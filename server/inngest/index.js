import { Inngest } from "inngest";
import prisma from "../configs/prisma.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "profileexchange" });

/**
 * 1. Sync User Creation/Update from Clerk
 * Uses upsert to handle both creation and updates in one atomic operation.
 */
const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event, step }) => {
        const { data } = event;
        const email = data?.email_addresses?.[0]?.email_address;
        const fullName = `${data?.first_name || ""} ${data?.last_name || ""}`.trim();

        await step.run("upsert-user", async () => {
            return await prisma.user.upsert({
                where: { id: data.id },
                update: {
                    email: email,
                    name: fullName,
                    image: data?.image_url,
                },
                create: {
                    id: data.id,
                    email: email,
                    name: fullName,
                    image: data?.image_url,
                }
            });
        });
    }
);

/**
 * 2. Sync User Deletion
 * Logic: If the user has active business data, we deactivate listings instead of deleting the record.
 */
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event, step }) => {
        const { data } = event;

        await step.run("handle-user-cleanup", async () => {
            const [listingsCount, chatsCount, transactionsCount] = await Promise.all([
                prisma.listing.count({ where: { ownerId: data.id } }),
                prisma.chat.count({ 
                    where: { OR: [{ ownerUserId: data.id }, { chatUserId: data.id }] } 
                }),
                prisma.transaction.count({ where: { userId: data.id } })
            ]);

            if (listingsCount === 0 && chatsCount === 0 && transactionsCount === 0) {
                return await prisma.user.delete({ where: { id: data.id } });
            } else {
                // Soft delete approach: deactivate listings if history exists
                return await prisma.listing.updateMany({
                    where: { ownerId: data.id },
                    data: { status: "inactive" }
                });
            }
        });
    }
);

/**
 * 3. Sync User Updates
 */
const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk' },
    { event: 'clerk/user.updated' },
    async ({ event, step }) => {
        const { data } = event;
        await step.run("update-user-record", async () => {
            return await prisma.user.update({
                where: { id: data.id },
                data: {
                    email: data?.email_addresses[0]?.email_address,
                    name: `${data?.first_name || ""} ${data?.last_name || ""}`.trim(),
                    image: data?.image_url,
                }
            });
        });
    }
);

/**
 * 4. Process Purchase (Internal Logic Only)
 * Fetches data for the purchase. Removed Nodemailer logic.
 */
// const processPurchase = inngest.createFunction(
//     { id: 'process-purchase' },
//     { event: "app/purchase" },
//     async ({ event, step }) => {
//         const { transaction } = event.data;

//         await step.run("get-purchase-details", async () => {
//             const customer = await prisma.user.findUnique({ where: { id: transaction.userId } });
//             const listing = await prisma.listing.findUnique({ where: { id: transaction.listingId } });
//             const credential = await prisma.credential.findFirst({ where: { listingId: transaction.listingId } });

//             // Logic for what happens after purchase (e.g., logging or status updates)
//             return { customerEmail: customer?.email, listingTitle: listing?.title };
//         });
//     }
// );

/**
 * 5. Handle Listing Deletion (Internal Logic Only)
 * Fetches credentials for the deleted listing. Removed Nodemailer logic.
 */
// const handleListingDeletion = inngest.createFunction(
//     { id: 'handle-listing-deletion' },
//     { event: "app/listing-deleted" },
//     async ({ event, step }) => {
//         const { listingId } = event.data;

//         await step.run("fetch-credentials", async () => {
//             return await prisma.credential.findFirst({
//                 where: { listingId },
//             });
//         });
        
//         // You could add logic here to archive the credentials elsewhere
//     }
// );

// Exporting functions for the Inngest handler
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
    // processPurchase,
    // handleListingDeletion
];
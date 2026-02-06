// // import {
// //   DollarSign,
// //   Users,
// //   LineChart,
// //   Eye,
// //   Calendar,
// //   MapPin,
// //   CheckCircle2,
// //   ChevronLeftIcon,
// //   ChevronRightIcon,
// //   ArrowLeftIcon,
// //   Loader2Icon,
// //   ShoppingBagIcon,
// //   ArrowUpRightFromSquareIcon,
// //   MessageSquareMoreIcon,
// // } from "lucide-react";

// // import { getProfileLink, platformIcons } from "../assets/assets";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { useEffect, useState } from "react";

// // export default function ListingDetails() {
// //   const navigate = useNavigate();
// //   const currency = import.meta.env.VITE_CURRENCY || "$";

// //   const [listing, setListing] = useState(null);
// //   const { listingId } = useParams();
// //   const { listings } = useSelector((state) => state.listing);

// //   const [current, setCurrent] = useState(0);
// //   const images = listing?.images || [];

// //   const profileLink =
// //     listing && getProfileLink(listing.platform, listing.username);

// //   const prevSlide = () =>
// //     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

// //   const nextSlide = () =>
// //     setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

// //   useEffect(() => {
// //     const found = listings.find((l) => l.id === listingId);
// //     if (found) setListing(found);
// //   }, [listingId, listings]);

// //   return listing ? (
// //     <div className="mx-auto mt-15 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="flex items-center gap-2 text-slate-600 py-5"
// //       >
// //         <ArrowLeftIcon className="size-4" /> Go to Previous Page
// //       </button>

// //       <div className="flex items-start max-md:flex-col gap-10">
// //         <div className="flex-1 max-md:w-full">
// //           {/* Header */}
// //           <div className="bg-white rounded-xl border p-6 mb-5">
// //             <div className="flex justify-between items-end">
// //               <div className="flex gap-3">
// //                 <div className="p-2 rounded-xl">
// //                   {platformIcons[listing.platform]}
// //                 </div>
// //                 <div>
// //                   <h2 className="flex gap-2 text-xl font-semibold">
// //                     {listing.title}
// //                     <Link target="_blank" to={profileLink}>
// //                       <ArrowUpRightFromSquareIcon className="size-4" />
// //                     </Link>
// //                   </h2>
// //                   <p className="text-sm text-gray-500">
// //                     @{listing.username} • {listing.platform}
// //                   </p>
// //                 </div>
// //               </div>

// //               <h3 className="text-2xl font-bold">
// //                 {currency}
// //                 {listing.price?.toLocaleString()}
// //               </h3>
// //             </div>
// //           </div>

// //           {/* Images */}
// //           {images.length > 0 && (
// //             <div className="bg-white rounded-xl border mb-5 overflow-hidden">
// //               <div className="relative aspect-video">
// //                 <div
// //                   className="flex transition-transform duration-300"
// //                   style={{ transform: `translateX(-${current * 100}%)` }}
// //                 >
// //                   {images.map((img, i) => (
// //                     <img key={i} src={img} className="w-full shrink-0" />
// //                   ))}
// //                 </div>

// //                 <button
// //                   onClick={prevSlide}
// //                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
// //                 >
// //                   <ChevronLeftIcon />
// //                 </button>

// //                 <button
// //                   onClick={nextSlide}
// //                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
// //                 >
// //                   <ChevronRightIcon />
// //                 </button>
// //                 {/* Dots Indicator */}
// //                 <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
// //                   {images.map((_, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={() => setCurrent(index)}
// //                       className={`w-2.5 h-2.5 rounded-full ${current === index ? "bg-indigo-600" : "bg-gray-300"}`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Metrics */}
// //           <div className="bg-white rounded-xl border mb-5 p-4 grid grid-cols-2 md:grid-cols-4 text-center gap-4">
// //             <div>
// //               <Users className="mx-auto" />
// //               {listing.followers_count} Followers
// //             </div>
// //             <div>
// //               <LineChart className="mx-auto" />
// //               {listing.engagement_rate}% Engagement
// //             </div>
// //             <div>
// //               <Eye className="mx-auto" />
// //               {listing.monthly_views} Views
// //             </div>
// //             <div>
// //               <Calendar className="mx-auto" />
// //               {new Date(listing.createdAt).toLocaleDateString()}
// //             </div>
// //           </div>

// //           {/* Description */}
// //           <div className="bg-white rounded-xl border p-4">
// //             {listing.description}
// //           </div>

// //           {/* Additional Details */}
// //           <div className="bg-white rounded-xl border border-gray-200 mb-5">
// //             <div className="p-4 border-b border-gray-100">
// //               <h4 className="font-semibold text-gray-800">
// //                 Additional Details
// //               </h4>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-sm">
// //               <div>
// //                 <p className="text-gray-500">Niche</p>
// //                 <p className="font-medium capitalize">{listing.niche}</p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Primary Country</p>
// //                 <p className="flex items-center font-medium">
// //                   <MapPin className="size-4 mr-1 text-gray-400" />{" "}
// //                   {listing.country}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Audience Age</p>
// //                 <p className="font-medium">{listing.age_range}</p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Platform Verified</p>
// //                 <p className="font-medium">
// //                   {listing.platformAssured ? "Yes" : "No"}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Monetization</p>
// //                 <p className="font-medium">
// //                   {listing.monetized ? "Enabled" : "Disabled"}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-500">Status</p>
// //                 <p className="font-medium capitalize">{listing.status}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Seller Card */}
// //         <div className="bg-white md:min-w-[360px] border rounded-xl p-5">
// //           <h4 className="font-semibold mb-4">Seller Information</h4>

// //           <div className="flex items-center gap-3 mb-4">
// //             <img src={listing.owner?.image} className="size-10 rounded-full" />
// //             <div>
// //               <p className="font-medium">{listing.owner?.name}</p>
// //               <p className="text-sm text-gray-500">{listing.owner?.email}</p>
// //             </div>
// //           </div>

// //           {/* Disabled actions (frontend only) */}
// //           <button
// //             disabled
// //             className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg flex justify-center gap-2 cursor-not-allowed"
// //           >
// //             <MessageSquareMoreIcon className="size-4" /> Chat (coming soon)
// //           </button>

// //           <button
// //             disabled
// //             className="w-full mt-2 bg-gray-300 text-gray-600 py-2 rounded-lg flex justify-center gap-2 cursor-not-allowed"
// //           >
// //             <ShoppingBagIcon className="size-4" /> Purchase (coming soon)
// //           </button>
// //         </div>
// //       </div>
// //        {/* Footer */}
// //             <div className='bg-white border-t border-gray-200 p-4 text-center mt-28'>
// //                 <p className='text-sm text-gray-500'>
// //                     © {new Date().getFullYear()} <span className='text-indigo-600'> ProfileXChange</span> All rights reserved.
// //                 </p>
// //             </div>
// //     </div>
// //   ) : (
// //     <div className="h-screen flex justify-center items-center">
// //       <Loader2Icon className="size-7 animate-spin" />
// //     </div>
// //   );
// // }


// import { DollarSign, Users, LineChart, Eye, Calendar, MapPin, CheckCircle2, UserCircle, ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, Loader2Icon, ShoppingBagIcon, ArrowUpRightFromSquareIcon, MessageSquareMoreIcon } from 'lucide-react';
// import { getProfileLink, platformIcons } from '../assets/assets';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { setChat } from '../app/features/chatSlice';

// export default function ListingDetails() {
//     // Removed: Clerk hooks (useUser, useAuth, useClerk)
    
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const currency = import.meta.env.VITE_CURRENCY || '$';

//     const [listing, setListing] = useState(null);
//     const profileLink = listing && getProfileLink(listing.platform, listing.username);

//     const { listingId } = useParams();
//     // Assuming listings are loaded in Redux state from a mock file or previous fetch
//     const { listings } = useSelector((state) => state.listing);

//     const [current, setCurrent] = useState(0);
//     const images = listing?.images || [];

//     const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

//     // Refactored: Removed Auth/Toast logic. 
//     // This is now a placeholder function for the UI.
//     const loadChatbox = () => {
//         // Example: logic to open chat UI without auth checks
//         // dispatch(setChat({ listing: listing })); 
//         alert("Chat functionality requires backend integration.");
//     };

//     // Refactored: Removed Axios/Toast/Auth logic.
//     const purchaseAccount = async () => {
//         alert("Purchase functionality requires backend integration.");
//     };

//     useEffect(() => {
//         const listing = listings.find((listing) => listing.id === listingId);
//         if (listing) {
//             setListing(listing);
//         }
//     }, [listingId, listings]);

//     return listing ? (
//         <div className='mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 '>
//             <button onClick={() => navigate(-1)} className='flex items-center gap-2 text-slate-600 py-5'>
//                 <ArrowLeftIcon className='size-4' /> Go to Previous Page
//             </button>

//             <div className='flex items-start max-md:flex-col gap-10'>
//                 <div className='flex-1 max-md:w-full'>
//                     {/* Top Section */}
//                     <div className='bg-white rounded-xl border border-gray-200 p-6 mb-5'>
//                         <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
//                             <div className='flex items-start gap-3'>
//                                 <div className='p-2 rounded-xl'>{platformIcons[listing.platform]}</div>
//                                 <div>
//                                     <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-800'>
//                                         {listing.title}
//                                         <Link target='_blank' to={profileLink}>
//                                             <ArrowUpRightFromSquareIcon className='size-4 hover:text-indigo-500' />
//                                         </Link>
//                                     </h2>
//                                     <p className='text-gray-500 text-sm'>
//                                         @{listing.username} • {listing.platform?.charAt(0).toUpperCase() + listing.platform?.slice(1)}
//                                     </p>
//                                     <div className='flex gap-2 mt-2'>
//                                         {listing.verified && (
//                                             <span className='flex items-center text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md'>
//                                                 <CheckCircle2 className='w-3 h-3 mr-1' /> Verified
//                                             </span>
//                                         )}
//                                         {listing.monetized && (
//                                             <span className='flex items-center text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md'>
//                                                 <DollarSign className='w-3 h-3 mr-1' /> Monetized
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='text-right'>
//                                 <h3 className='text-2xl font-bold text-gray-800'>
//                                     {currency}
//                                     {listing.price?.toLocaleString()}
//                                 </h3>
//                                 <p className='text-sm text-gray-500'>USD</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Screenshot Section */}
//                     {images?.length > 0 && (
//                         <div className='bg-white rounded-xl border border-gray-200 mb-5 overflow-hidden'>
//                             <div className='p-4'>
//                                 <h4 className='font-semibold text-gray-800'>Screenshots & Proof</h4>
//                             </div>

//                             {/* Slider container */}
//                             <div className='relative w-full aspect-video overflow-hidden'>
//                                 <div className='flex transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${current * 100}%)` }}>
//                                     {images.map((img, index) => (
//                                         <img key={index} src={img} alt='Listing Proof' className='w-full shrink-0' />
//                                     ))}
//                                 </div>

//                                 {/* Navigation Buttons */}
//                                 <button onClick={prevSlide} className='absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
//                                     <ChevronLeftIcon className='w-5 h-5 text-gray-700' />
//                                 </button>

//                                 <button onClick={nextSlide} className='absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
//                                     <ChevronRightIcon className='w-5 h-5 text-gray-700' />
//                                 </button>

//                                 {/* Dots Indicator */}
//                                 <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
//                                     {images.map((_, index) => (
//                                         <button key={index} onClick={() => setCurrent(index)} className={`w-2.5 h-2.5 rounded-full ${current === index ? 'bg-indigo-600' : 'bg-gray-300'}`} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Account Metrics */}
//                     <div className='bg-white rounded-xl border border-gray-200 mb-5'>
//                         <div className='p-4 border-b border-gray-100'>
//                             <h4 className='font-semibold text-gray-800'>Account Metrics</h4>
//                         </div>
//                         <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-center'>
//                             <div>
//                                 <Users className='mx-auto text-gray-400 w-5 h-5 mb-1' />
//                                 <p className='font-semibold text-gray-800'>{listing.followers_count?.toLocaleString()}</p>
//                                 <p className='text-xs text-gray-500'>Followers</p>
//                             </div>
//                             <div>
//                                 <LineChart className='mx-auto text-gray-400 w-5 h-5 mb-1' />
//                                 <p className='font-semibold text-gray-800'>{listing.engagement_rate}%</p>
//                                 <p className='text-xs text-gray-500'>Engagement</p>
//                             </div>
//                             <div>
//                                 <Eye className='mx-auto text-gray-400 w-5 h-5 mb-1' />
//                                 <p className='font-semibold text-gray-800'>{listing.monthly_views?.toLocaleString()}</p>
//                                 <p className='text-xs text-gray-500'>Monthly Views</p>
//                             </div>
//                             <div>
//                                 <Calendar className='mx-auto text-gray-400 w-5 h-5 mb-1' />
//                                 <p className='font-semibold text-gray-800'>{new Date(listing.createdAt).toLocaleDateString()}</p>
//                                 <p className='text-xs text-gray-500'>Listed</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Description */}
//                     <div className='bg-white rounded-xl border border-gray-200 mb-5'>
//                         <div className='p-4 border-b border-gray-100'>
//                             <h4 className='font-semibold text-gray-800'>Description</h4>
//                         </div>
//                         <div className='p-4 text-sm text-gray-600'>{listing.description}</div>
//                     </div>

//                     {/* Additional Details */}
//                     <div className='bg-white rounded-xl border border-gray-200 mb-5'>
//                         <div className='p-4 border-b border-gray-100'>
//                             <h4 className='font-semibold text-gray-800'>Additional Details</h4>
//                         </div>
//                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-sm'>
//                             <div>
//                                 <p className='text-gray-500'>Niche</p>
//                                 <p className='font-medium capitalize'>{listing.niche}</p>
//                             </div>
//                             <div>
//                                 <p className='text-gray-500'>Primary Country</p>
//                                 <p className='flex items-center font-medium'>
//                                     <MapPin className='size-4 mr-1 text-gray-400' /> {listing.country}
//                                 </p>
//                             </div>
//                             <div>
//                                 <p className='text-gray-500'>Audience Age</p>
//                                 <p className='font-medium'>{listing.age_range}</p>
//                             </div>
//                             <div>
//                                 <p className='text-gray-500'>Platform Verified</p>
//                                 <p className='font-medium'>{listing.platformAssured ? 'Yes' : 'No'}</p>
//                             </div>
//                             <div>
//                                 <p className='text-gray-500'>Monetization</p>
//                                 <p className='font-medium'>{listing.monetized ? 'Enabled' : 'Disabled'}</p>
//                             </div>
//                             <div>
//                                 <p className='text-gray-500'>Status</p>
//                                 <p className='font-medium capitalize'>{listing.status}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Seller Info & Purchase Options */}
//                 <div className='bg-white min-w-full md:min-w-[370px] rounded-xl border border-gray-200 p-5 max-md:mb-10'>
//                     <h4 className='font-semibold text-gray-800 mb-4'>Seller Information</h4>
//                     <div className='flex items-center gap-3 mb-2'>
//                         <img src={listing.owner?.image} alt='seller' className='size-10 rounded-full' />
//                         <div>
//                             <p className='font-medium text-gray-800'>{listing.owner?.name}</p>
//                             <p className='text-sm text-gray-500'>{listing.owner?.email}</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center justify-between text-sm text-gray-600 mb-4'>
//                         <p>
//                             Member Since <span className='font-medium'> {new Date(listing.owner?.createdAt).toLocaleDateString()} </span>
//                         </p>
//                     </div>
//                     <button onClick={loadChatbox} className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium flex items-center justify-center gap-2'>
//                         <MessageSquareMoreIcon className='size-4' /> Chat
//                     </button>

//                     {listing.isCredentialChanged && (
//                         <button onClick={purchaseAccount} className='w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium flex items-center justify-center gap-2'>
//                             <ShoppingBagIcon className='size-4' /> Purchase
//                         </button>
//                     )}
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className='bg-white border-t border-gray-200 p-4 text-center mt-28'>
//                 <p className='text-sm text-gray-500'>
//                     © {new Date().getFullYear()} <span className='text-indigo-600'> Profile Marketplace</span> All rights reserved.
//                 </p>
//             </div>
//         </div>
//     ) : (
//         <div className='h-screen flex justify-center items-center'>
//             <Loader2Icon className='size-7 animate-spin text-indigo-600' />
//         </div>
//     );
// }

import { DollarSign, Users, LineChart, Eye, Calendar, MapPin, CheckCircle2, UserCircle, ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, Loader2Icon, ShoppingBagIcon, ArrowUpRightFromSquareIcon, MessageSquareMoreIcon } from 'lucide-react';
import { getProfileLink, platformIcons } from '../assets/assets';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setChat } from '../app/features/chatSlice';

export default function ListingDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currency = import.meta.env.VITE_CURRENCY || '$';

    const [listing, setListing] = useState(null);
    const profileLink = listing && getProfileLink(listing.platform, listing.username);

    const { listingId } = useParams();
    const { listings } = useSelector((state) => state.listing);

    const [current, setCurrent] = useState(0);
    const images = listing?.images || [];

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    // UPDATED: Now directly dispatches the chat action without checks
    const loadChatbox = () => {
        dispatch(setChat({ listing: listing }));
    };

    const purchaseAccount = async () => {
        alert("Purchase functionality requires backend integration.");
    };

    useEffect(() => {
        const listing = listings.find((listing) => listing.id === listingId);
        if (listing) {
            setListing(listing);
        }
    }, [listingId, listings]);

    return listing ? (
        <div className='mx-auto min-h-screen px-6 md:px-16 mt-15 lg:px-24 xl:px-32 '>
            <button onClick={() => navigate(-1)} className='flex items-center gap-2 text-slate-600 py-5'>
                <ArrowLeftIcon className='size-4' /> Go to Previous Page
            </button>

            <div className='flex items-start max-md:flex-col gap-10'>
                <div className='flex-1 max-md:w-full'>
                    {/* Top Section */}
                    <div className='bg-white rounded-xl border border-gray-200 p-6 mb-5'>
                        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
                            <div className='flex items-start gap-3'>
                                <div className='p-2 rounded-xl'>{platformIcons[listing.platform]}</div>
                                <div>
                                    <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-800'>
                                        {listing.title}
                                        <Link target='_blank' to={profileLink}>
                                            <ArrowUpRightFromSquareIcon className='size-4 hover:text-indigo-500' />
                                        </Link>
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        @{listing.username} • {listing.platform?.charAt(0).toUpperCase() + listing.platform?.slice(1)}
                                    </p>
                                    <div className='flex gap-2 mt-2'>
                                        {listing.verified && (
                                            <span className='flex items-center text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md'>
                                                <CheckCircle2 className='w-3 h-3 mr-1' /> Verified
                                            </span>
                                        )}
                                        {listing.monetized && (
                                            <span className='flex items-center text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md'>
                                                <DollarSign className='w-3 h-3 mr-1' /> Monetized
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='text-right'>
                                <h3 className='text-2xl font-bold text-gray-800'>
                                    {currency}
                                    {listing.price?.toLocaleString()}
                                </h3>
                                <p className='text-sm text-gray-500'>USD</p>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Section */}
                    {images?.length > 0 && (
                        <div className='bg-white rounded-xl border border-gray-200 mb-5 overflow-hidden'>
                            <div className='p-4'>
                                <h4 className='font-semibold text-gray-800'>Screenshots & Proof</h4>
                            </div>

                            {/* Slider container */}
                            <div className='relative w-full aspect-video overflow-hidden'>
                                <div className='flex transition-transform duration-300 ease-in-out' style={{ transform: `translateX(-${current * 100}%)` }}>
                                    {images.map((img, index) => (
                                        <img key={index} src={img} alt='Listing Proof' className='w-full shrink-0' />
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                <button onClick={prevSlide} className='absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                                    <ChevronLeftIcon className='w-5 h-5 text-gray-700' />
                                </button>

                                <button onClick={nextSlide} className='absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                                    <ChevronRightIcon className='w-5 h-5 text-gray-700' />
                                </button>

                                {/* Dots Indicator */}
                                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
                                    {images.map((_, index) => (
                                        <button key={index} onClick={() => setCurrent(index)} className={`w-2.5 h-2.5 rounded-full ${current === index ? 'bg-indigo-600' : 'bg-gray-300'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Account Metrics */}
                    <div className='bg-white rounded-xl border border-gray-200 mb-5'>
                        <div className='p-4 border-b border-gray-100'>
                            <h4 className='font-semibold text-gray-800'>Account Metrics</h4>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-center'>
                            <div>
                                <Users className='mx-auto text-gray-400 w-5 h-5 mb-1' />
                                <p className='font-semibold text-gray-800'>{listing.followers_count?.toLocaleString()}</p>
                                <p className='text-xs text-gray-500'>Followers</p>
                            </div>
                            <div>
                                <LineChart className='mx-auto text-gray-400 w-5 h-5 mb-1' />
                                <p className='font-semibold text-gray-800'>{listing.engagement_rate}%</p>
                                <p className='text-xs text-gray-500'>Engagement</p>
                            </div>
                            <div>
                                <Eye className='mx-auto text-gray-400 w-5 h-5 mb-1' />
                                <p className='font-semibold text-gray-800'>{listing.monthly_views?.toLocaleString()}</p>
                                <p className='text-xs text-gray-500'>Monthly Views</p>
                            </div>
                            <div>
                                <Calendar className='mx-auto text-gray-400 w-5 h-5 mb-1' />
                                <p className='font-semibold text-gray-800'>{new Date(listing.createdAt).toLocaleDateString()}</p>
                                <p className='text-xs text-gray-500'>Listed</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='bg-white rounded-xl border border-gray-200 mb-5'>
                        <div className='p-4 border-b border-gray-100'>
                            <h4 className='font-semibold text-gray-800'>Description</h4>
                        </div>
                        <div className='p-4 text-sm text-gray-600'>{listing.description}</div>
                    </div>

                    {/* Additional Details */}
                    <div className='bg-white rounded-xl border border-gray-200 mb-5'>
                        <div className='p-4 border-b border-gray-100'>
                            <h4 className='font-semibold text-gray-800'>Additional Details</h4>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-sm'>
                            <div>
                                <p className='text-gray-500'>Niche</p>
                                <p className='font-medium capitalize'>{listing.niche}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Primary Country</p>
                                <p className='flex items-center font-medium'>
                                    <MapPin className='size-4 mr-1 text-gray-400' /> {listing.country}
                                </p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Audience Age</p>
                                <p className='font-medium'>{listing.age_range}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Platform Verified</p>
                                <p className='font-medium'>{listing.platformAssured ? 'Yes' : 'No'}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Monetization</p>
                                <p className='font-medium'>{listing.monetized ? 'Enabled' : 'Disabled'}</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>Status</p>
                                <p className='font-medium capitalize'>{listing.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Seller Info & Purchase Options */}
                <div className='bg-white min-w-full md:min-w-[370px] rounded-xl border border-gray-200 p-5 max-md:mb-10'>
                    <h4 className='font-semibold text-gray-800 mb-4'>Seller Information</h4>
                    <div className='flex items-center gap-3 mb-2'>
                        <img src={listing.owner?.image} alt='seller' className='size-10 rounded-full' />
                        <div>
                            <p className='font-medium text-gray-800'>{listing.owner?.name}</p>
                            <p className='text-sm text-gray-500'>{listing.owner?.email}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between text-sm text-gray-600 mb-4'>
                        <p>
                            Member Since <span className='font-medium'> {new Date(listing.owner?.createdAt).toLocaleDateString()} </span>
                        </p>
                    </div>
                    <button onClick={loadChatbox} className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium flex items-center justify-center gap-2'>
                        <MessageSquareMoreIcon className='size-4' /> Chat
                    </button>

                    {listing.isCredentialChanged && (
                        <button onClick={purchaseAccount} className='w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium flex items-center justify-center gap-2'>
                            <ShoppingBagIcon className='size-4' /> Purchase
                        </button>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className='bg-white border-t border-gray-200 p-4 text-center mt-28'>
                <p className='text-sm text-gray-500'>
                    © {new Date().getFullYear()} <span className='text-indigo-600'> Profile Marketplace</span> All rights reserved.
                </p>
            </div>
        </div>
    ) : (
        <div className='h-screen flex justify-center items-center'>
            <Loader2Icon className='size-7 animate-spin text-indigo-600' />
        </div>
    );
}
# ProfileExchange - Social Media Account Marketplace 🚀

**ProfileExchange** is a secure, full-stack marketplace platform designed for buying and selling social media accounts (YouTube, Instagram, TikTok, etc.). It bridges the trust gap in the digital asset market by providing an escrow-style credential verification system, real-time messaging, and comprehensive dashboards for buyers, sellers, and administrators.

This project was built using the **PERN Stack** (PostgreSQL, Express, React, Node.js) to ensure scalability, data integrity, and performance.

---

## 🛠 Tech Stack

* **Frontend:** React.js, Tailwind CSS, Redux Toolkit, Lucide React, React Router DOM.
* **Backend:** Node.js, Express.js.
* **Database:** PostgreSQL (Relational DB for structured listing & user data).
* **Authentication:** Clerk (Secure user management & sessions).
* **Tools:** Axios, React Hot Toast, Date-fns.

---

## ✨ Key Features

### 🛒 **Marketplace Engine**
* **Granular Filtering:** Users can browse listings filtered by Platform (YouTube, Instagram, etc.), Niche (Tech, Fashion, Travel), Follower Count, and Price Range.
* **Detailed Asset Data:** Listings display key metrics such as Engagement Rate, Monthly Views, Monetization Status, and Verification badges.

### 🔐 **Secure Credential System**
* **Escrow-Style Flow:** Sellers submit account credentials to a secure platform vault.
* **Verification Status:** Listings track the credential lifecycle with statuses: *Submitted* → *Verified* → *Changed*.
* **Instant Access:** Upon confirmed purchase, buyers receive immediate, secure access to credentials via the "My Orders" panel.

### 📊 **User Dashboards**
* **Seller Hub:** A dedicated dashboard to track "Active," "Sold," and "Banned" listings. Includes a financial overview showing Total Earned, Withdrawn, and Available Balance.
* **Buyer Orders:** A secure interface for buyers to view purchase history and access sensitive credentials (with copy-to-clipboard functionality).

### 👮 **Admin Panel**
* **Platform Overview:** High-level metrics on Total Revenue, Active Listings, and Total Users.
* **Credential Oversight:** Specialized tools for admins to verify submitted credentials and flag them as "Verified" or "Changed."
* **Listing Control:** Approve, ban, or delete listings to maintain marketplace quality.

### 💬 **Communication**
* **Real-time Messaging:** Integrated chat system allowing pre-sale negotiations between buyers and sellers without leaving the platform.

---

## 🚀 How to Run Locally

Follow these steps to set up the project on your local machine:

### 1. Prerequisites
* Node.js (v16 or higher)
* PostgreSQL installed and running
* Clerk Account (for Authentication keys)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/VanshSaraf/profileXchange.git](https://github.com/VanshSaraf/profileXchange.git)
cd ProfileXchange

# Install Backend Dependencies
npm install

# Install Frontend Dependencies
cd client
npm install

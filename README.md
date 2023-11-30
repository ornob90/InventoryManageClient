# InventoryHub

## Description

InventoryHub is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a comprehensive inventory management system with different roles and functionalities for system administrators, shop managers, and logged-in users.

## Live URL

[InventoryHub Live](https://inventorymanage-48123.web.app/)

## Admin Credentials

- Username: admin@gmail.com
- Password: Ornob1200,()

## Features

### System Admin

1. **Manage Shops**

   - View all shops in a table format with essential details.
   - Send notices to shop owners.

2. **Sale Summary**

   - View summary information of total income, products, and sales.
   - Access a detailed view of sales, including product names, selling dates, and profits.

3. **Users Section**
   - View information about registered users, including user name, email, shop name (if any), and role.
   - Send promotional emails to users without a shop or role.

### Shop Manager

1. **Product Management**

   - Add, manage, and delete products.
   - View a total product count for the shop.
   - Update product details and delete products.

2. **Sales Collection**

   - View all products available for sale.
   - Add products to the checkout cart for customers.
   - Generate invoices and sales data.

3. **Subscription & Payment**

   - Choose from subscription plans to increase product limits.
   - Make payments securely using the Stripe payment system.

4. **Sales Summary**
   - View total sales, total investment, and total profit.
   - Access a sales history table with pagination.

### Logged-In User

1. **Shop Creation**

   - Create a shop with a unique name, logo, and description.
   - Become a shop manager for an existing shop.

2. **General User Features**
   - Register and log in to the system.
   - Access a personalized dashboard.
   - Watch a demo video showcasing the system.

### Additional Features

1. **Email Sending**

   - Utilizes Email JS to send notices and promotional emails.

2. **API Protection**

   - Protects all APIs for System Admin, Shop Manager, and Logged-In User with JWT.

3. **Dynamic Titling**

   - Dynamically updates the website title based on the current route.

4. **Responsiveness**

   - Ensures the homepage is responsive across mobile, tablet, and desktop devices.

5. **Animation**

   - Implements animations using the Framer-Motion, Data-AOS, or React-Spring packages.

6. **Optional Features**
   - Implements `react-rechart` on the sale summary route.
   - Implements a share-shop access functionality.

## How to Run Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up your MongoDB database and update the connection string in the server configuration.
5. Run the server using `npm run server`.
6. Navigate to the client directory (`cd client`) and run the React app using `npm start`.

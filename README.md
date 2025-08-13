# MERN Café Store

![MERN Café Store](./public/home.png)

## Description

MERN Café Store is a full-stack e-commerce web application designed specifically for a café business. It allows customers to browse products, add items to their cart, and place orders after logging in. The application features role-based authentication with two main user types: Customers and Admins.

Admins have a dedicated dashboard to manage users, products, and orders, including adding or deleting users/products and updating order statuses (complete/reject). This system ensures smooth operations for café management and a seamless shopping experience for customers.

---

## Features

### User Features
- User registration and login authentication.
- Browse café products with detailed information.
- Add products to the shopping cart.
- Place orders (login required).
- View order history and status updates.

### Admin Features
- Secure admin login.
- Dashboard with an admin navigation bar.
- Manage users: Add, delete users.
- Manage products: Add, delete products.
- Manage orders: View all orders and update order status (Complete / Reject).
- Admin can monitor all user activities and order progress.

---

## Technology Stack

| Frontend       | Backend         | Database         | Authentication       |
|----------------|-----------------|------------------|----------------------|
| React.js       | Node.js + Express.js | MongoDB          | JWT (JSON Web Token) |

---

## Project Structure

mern-cafe-store/
│
├── backend/ # Express server, routes, controllers
├── frontend/ # React app
├── public/ # Static assets like images (home.png)
├── README.md
└── package.json



---

## Installation & Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-cafe-store.git
   cd mern-cafe-store
   Setup Backend

2. Setup Backend
cd backend
npm install
# create a .env file with your MongoDB URI and JWT_SECRET
npm start

3. Setup Frontend
   cd ../frontend
npm install
npm start

Environment Variables
Create a .env file in the backend folder with:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Usage
Users can browse products without login.

To place an order, users must register or login.

Admins login via the Admin section in the navbar.

Admin panel allows user and product management and order status updates.

Order statuses can be updated to "Complete" or "Rejected" by the admin.

API Endpoints (Summary)
Route	Method	Description
/api/users/register	POST	Register a new user
/api/users/login	POST	Login user and return JWT token
/api/products	GET	Get all products
/api/products	POST	Admin: Add new product
/api/products/:id	DELETE	Admin: Delete a product
/api/orders	POST	Place new order
/api/orders	GET	Admin: Get all orders
/api/orders/:id	PUT	Admin: Update order status
/api/users	GET	Admin: Get all users
/api/users/:id	DELETE	Admin: Delete user

System Diagram
+----------------+       +----------------+       +------------------+
|                |       |                |       |                  |
|   React Front  | <---> |  Express API   | <---> |    MongoDB       |
|   (Frontend)   |       |  (Backend)     |       |   (Database)     |
|                |       |                |       |                  |
+----------------+       +----------------+       +------------------+

User Flow:
- User registers/logs in --> Token stored locally --> Authenticated requests to API
- Admin logs in --> Access admin dashboard --> Manage users/products/orders



Contribution
Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.


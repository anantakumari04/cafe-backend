☕ MERN Café Store

A full-stack café e-commerce web application built using MongoDB, Express.js, React.js, and Node.js with role-based authentication for Users & Admins.
Seamless shopping for customers 🛍️ + powerful admin controls 🛠️ — perfect for online café businesses.

📜 Description
MERN Café Store offers:

🛡️ Secure authentication with JWT

📦 Product catalog with images & details

🛒 Shopping cart

📜 Order management

🏢 Admin dashboard with full control

✨ Features
👤 User Side
📝 Account Creation / Login – Register & log in securely

📜 Browse Products – View café menu with images & prices

🛒 Add to Cart – Add, update, or remove products from cart

📦 Place Orders – Orders linked to user account (login required)

📂 Order History – Track previous orders & statuses

🛠 Admin Side
🔑 Role-Based Access – Admins see a special nav bar section

👥 User Management – Add / delete users

📦 Product Management – Add / delete / update products

📋 Order Management – Mark orders as ✅ Complete / ❌ Rejected

🛠 Tech Stack
Layer	Technology
🎨 Frontend	React.js
🖥 Backend	Node.js, Express.js
🗄 Database	MongoDB
🔐 Auth	JWT, bcrypt
🎨 Styling	CSS, Bootstrap, Tailwind CSS

📂 Project Structure
bash
Copy
Edit
MERN-Cafe-Store/
│
├── client/        # React front-end
├── server/        # Node.js/Express back-end
├── models/        # Mongoose schemas (Users, Products, Orders, Cart)
├── routes/        # API endpoints
└── README.md
🚀 Installation
1️⃣ Clone the Project
bash
Copy
Edit
git clone https://github.com/YourUsername/mern-cafe-store.git
cd mern-cafe-store
2️⃣ Install Dependencies
bash
Copy
Edit
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
3️⃣ Set Up Environment Variables
Create .env in /server with:

ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
4️⃣ Run the Project
bash
Copy
Edit
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start
🛠 Usage Flow
🧑‍💻 As a User
Browse products

Create an account / Log in

Add items to cart

Place order (requires login)

View order history

🛡 As an Admin
Log in as Admin

Access Admin Dashboard via nav bar

Manage users, products, and orders

🔄 User/Admin Role Flow Diagram
mermaid
Copy
Edit
flowchart TD
    A[🏠 Visitor Landing Page]
    B[🔑 Login / Create Account]
    C[📜 Browse Products]
    D[🛒 Add to Cart]
    E[📦 User Places Order]
    F[🛡 Admin Login]
    G[📊 Admin Dashboard]
    H[👥 User Management]
    I[📦 Product Management]
    J[📋 Order Management]
    K[✅ Complete / ❌ Reject Order]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> K
    B --> F
    F --> G
    G --> H
    G --> I
    G --> J
    J --> K
📡 API Endpoints
👤 User
POST /api/users/register – Register user

POST /api/users/login – Login user/admin

GET /api/products – Fetch products

🛒 Cart & Orders
POST /api/cart – Add to cart

POST /api/orders – Place order

🛠 Admin
GET /api/admin/users – List users

POST /api/admin/products – Add product

PUT /api/admin/orders/:id – Update order status

🖼 Screenshots




💡 Future Enhancements
💳 Payment Integration (Stripe/Razorpay)

⭐ Product Reviews & Ratings

🚚 Real-time Order Tracking

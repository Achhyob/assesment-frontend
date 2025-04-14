# Task Manager Authentication App (MERN Stack)

A simple and secure **Task Manager Application** built with:

- **Frontend**: React.js  
- **Backend**: Node.js, Express, Sequelize ORM, MySQL  
- **Authentication**: JWT (stored in cookies)

##  Features

- User Registration & Login with JWT
- Secure password hashing with bcrypt
- Protected API routes
- Add / View / Delete personal tasks
- Cookie-based session handling
- Cross-Origin support for frontend ↔ backend

## Folder Structure
frontend/
├── public/                      # Public assets like favicon, index.html
│
├── src/                         # Main source folder
│   ├── components/              # Reusable UI components
│   │   ├── Auth/                # Authentication components
│   │   │   ├── Login.js         # Login form component
│   │   │   └── Register.js      # Registration form component
│   │   ├── Layout/              # Layout components (e.g., Navbar, Footer)
│   │   └── Tasks/               # Task management components (list, add, delete)
│   │
│   ├── context/                 # Global state (Auth Context API)
│   │   └── AuthContext.js       # Handles user login state and JWT
│   │
│   ├── pages/                   # Page-level components (optional)
│   │
│   ├── api.js                   # Axios instance & API request functions
│   ├── App.js                   # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── index.js                 # Entry point for React DOM rendering
│   ├── index.css                # Global styles
│   ├── App.test.js              # Test file (if testing is configured)
│   ├── setupTests.js            # React testing setup
│   ├── reportWebVitals.js       # Web performance reporting (optional)
│   └── logo.svg                 # React logo (optional asset)
│
├── .gitignore                   # Git ignored files
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for exact dependency versions
└── README.md                    # Project overview and setup guide

# Setup Instructions
1. **Clone the Repository:**
git clone https://github.com/Achhyob/assesment-frontend.git

2. **Install Dependencies**
npm install

3. **Run the Server**
npm start
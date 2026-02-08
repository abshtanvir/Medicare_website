# Medicare Health Platform

A modern healthcare e-commerce platform built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- 🏥 **User Portal**
  - Browse medicines and health products
  - Book lab tests and health checkup packages
  - Shopping cart with checkout
  - User dashboard with order history
  
- 👨‍💼 **Admin Portal**
  - Order management dashboard
  - Real-time order status updates
  - Revenue and statistics tracking

- 🔐 **Authentication**
  - Mock authentication system
  - Separate user and admin roles

## Demo Credentials

### User Account
- Email: `user@demo.com`
- Password: `user123`

### Admin Account
- Email: `admin@demo.com`
- Password: `admin123`

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

### As a User
1. Browse medicines or lab tests from the homepage
2. Add items to your cart
3. Login with user credentials
4. Complete checkout with delivery address
5. View your orders in the dashboard

### As an Admin
1. Login with admin credentials
2. View all orders in the admin dashboard
3. Update order status (Pending → Processing → Shipped → Delivered)
4. Track platform statistics

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API
- **Data Persistence**: LocalStorage

## Project Structure

```
src/
├── components/
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/             # Reusable UI components
├── context/            # React Context providers
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── OrderContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Medicines.tsx
│   ├── LabTests.tsx
│   ├── Cart.tsx
│   ├── Dashboard.tsx
│   └── AdminDashboard.tsx
├── lib/                # Utilities and mock data
├── types/              # TypeScript type definitions
└── App.tsx             # Main app component with routing
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT

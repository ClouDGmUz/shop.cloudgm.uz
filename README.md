# Professional Services - Digital Solutions

A full-stack web application built with React, Vite, Express, and MongoDB.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- PM2 (for production deployment)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shop.cloudgm.uz.git
cd shop.cloudgm.uz
```

2. Install dependencies:
```bash
npm install
```

3. Install PM2 globally if not already installed:
```bash
npm install -g pm2
```

## Development

1. Start the development server:
```bash
npm run dev
```
This will start the Vite development server with hot module replacement (HMR).

2. Start the API server in development mode:
```bash
PORT=3300 NODE_ENV=development pm2 start ecosystem.config.js
```

## Production Build

1. Build the frontend:
```bash
npm run build
```
This will create optimized production files in the `dist` directory.

2. Start the production server:
```bash
PORT=3300 NODE_ENV=production pm2 start ecosystem.config.js
```

## PM2 Server Management

- View running processes:
```bash
pm2 list
```

- Monitor processes:
```bash
pm2 monit
```

- View logs:
```bash
pm2 logs shop-cloudgm
```

- Restart server:
```bash
pm2 restart shop-cloudgm
```

- Stop server:
```bash
pm2 stop shop-cloudgm
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password
```

## Project Structure

```
├── public/           # Static files
├── server/          # Backend API
│   ├── models/      # Database models
│   └── utils/       # Utility functions
├── src/             # Frontend source
│   ├── components/  # React components
│   └── data/       # Static data
└── dist/           # Production build
```

## License

This project is proprietary and confidential. All rights reserved.

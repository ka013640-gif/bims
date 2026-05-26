# Barangay Management System

A web-based barangay management system for handling residents, households, and community data.

## Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended package manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/bims.git
cd bims
```

2. Install dependencies:
```bash
pnpm install
```

## Running the System

### Development Server
```bash
pnpm dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

### Linting
```bash
pnpm lint
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Application pages
└── assets/        # Images and static files
```

## Technologies

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- shadcn/ui components

## Features

- Resident management with personal information
- Household grouping by zone
- User authentication (login/register)
- Dashboard overview
- Responsive design with Tailwind CSS

## Default Accounts

### Pre-configured Mock Accounts

| Name | Username | Password | Role |
|------|----------|----------|------|
| System Administrator | admin | admin123 | admin |
| Default Resident | resident | 12345678 | user |

### Seeded Resident Accounts

The system seeds mock residents on first run. Passwords are formatted as MMDDYYYY of the birthday:

| Name | Username | Password |
|------|----------|----------|
| Carlos Bautista | carlos.bautista | 05141976 |
| Maria Bautista | maria.bautista | 08211979 |
| Joshua Bautista | joshua.bautista | 02172003 |
| Roberto Dela Cruz | roberto.delacruz | 03151975 |
| Karen Dela Cruz | karen.delacruz | 12112005 |
| Antonio Reyes | antonio.reyes | 08011970 |
| Mark Reyes | mark.reyes | 09142000 |

## Notes

- Data is stored in browser `localStorage`
- Clear browser storage to reset the database
- For development, the seed script runs automatically on app start
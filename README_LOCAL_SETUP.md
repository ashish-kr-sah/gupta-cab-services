# Gupta Cab Service - Local Database Setup

## 1. Requirements
- Node.js
- MySQL 8.x / MySQL Workbench
- Gmail account with a Gmail App Password (only if email notifications are needed)

## 2. Configure backend/.env
Set your local MySQL password:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_LOCAL_MYSQL_PASSWORD
DB_NAME=gupta_cab
DB_PORT=3306
```

For email:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASSWORD=YOUR_GMAIL_APP_PASSWORD
ADMIN_EMAIL=yourgmail@gmail.com
```

Do not use your normal Gmail password.

## 3. Start backend
```bash
cd backend
npm install
npm run db:check
npm run dev
```

The backend runs at `http://localhost:5000`.
Health check: `http://localhost:5000/api/health`.

The database `gupta_cab` is created automatically if the MySQL user has permission. Sequelize then creates/syncs the Admin, Booking and Contact tables.

## 4. Create the first admin
In another terminal:

```bash
cd backend
node scripts_createAdmin.js "Gupta Cab Admin" admin@example.com Admin@123
```

Use the same credentials at `/admin/login`.

## 5. Start frontend
From the project root:

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## 6. Test flow
1. Open Contact and submit a message.
2. Check MySQL `Contacts`.
3. Check admin email and customer email.
4. Open Booking and submit a booking.
5. Check MySQL `Bookings`.
6. Login to `/admin/login`.
7. Check Dashboard, Bookings and Contacts.

## Important
Aiven/Render are not used by the local configuration. `src/api.js` defaults to `http://localhost:5000`.

require("dotenv").config();
const bcrypt = require("bcryptjs");
const sequelize = require("./config/db");
const { ensureDatabase } = sequelize;
const Admin = require("./models/Admin");

(async () => {
  const [name, email, password] = process.argv.slice(2);

  if (!name || !email || !password) {
    console.log('Usage: node scripts_createAdmin.js "Name" email password');
    process.exit(1);
  }

  await ensureDatabase();
  await sequelize.authenticate();
  await sequelize.sync();

  const existing = await Admin.findOne({ where: { email } });

  if (existing) {
    console.log("⚠️ Admin already exists:", email);
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  console.log("✅ Admin created:", email);
  await sequelize.close();
})().catch(async (error) => {
  console.error("❌ Admin creation failed:", error.message);
  try { await sequelize.close(); } catch {}
  process.exit(1);
});

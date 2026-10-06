require("dotenv").config();
const sequelize = require("./config/db");
const { ensureDatabase } = sequelize;

(async () => {
  await ensureDatabase();
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("✅ Local MySQL connection is working");
  console.log(`📦 Database: ${process.env.DB_NAME || "gupta_cab"}`);
  await sequelize.close();
})().catch(async (error) => {
  console.error("❌ Local MySQL connection failed:", error.message);
  try { await sequelize.close(); } catch {}
  process.exit(1);
});

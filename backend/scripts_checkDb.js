require("dotenv").config();

const sequelize = require("./config/db");

(async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    console.log("✅ Neon PostgreSQL connection is working");
    console.log("📦 Database: neondb");

    await sequelize.close();
  } catch (error) {
    console.error("❌ PostgreSQL connection failed:", error.message);

    try {
      await sequelize.close();
    } catch {}

    process.exit(1);
  }
})();
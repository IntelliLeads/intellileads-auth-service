import { PrismaClient, UserRole, Industry, SubscriptionPlan } from "@prisma/client";
import bcrypt from "bcryptjs";
import { loadConfig } from "../config";

const prisma = new PrismaClient();
const config = loadConfig();

async function seed() {
  console.log("🌱 Starting database seed...");

  try {
    // Create default organization
    const organization = await prisma.organization.upsert({
      where: { id: "org-default" },
      update: {},
      create: {
        id: "org-default",
        name: "IntelliLeads Demo",
        domain: "demo.intellileads.co",
        industry: Industry.SAAS,
        plan: SubscriptionPlan.PRO,
        settings: {
          features: {
            ai: true,
            analytics: true,
            integrations: true,
          },
          branding: {
            logo: null,
            colors: {
              primary: "#3B82F6",
              secondary: "#1E40AF",
            },
          },
        },
      },
    });

    console.log("✅ Organization created:", organization.name);

    // Create default admin user
    const hashedPassword = await bcrypt.hash("admin123", config.auth.bcryptRounds);
    
    const adminUser = await prisma.user.upsert({
      where: { email: "admin@intellileads.co" },
      update: {},
      create: {
        email: "admin@intellileads.co",
        name: "Admin User",
        password: hashedPassword,
        role: UserRole.SUPER_ADMIN,
        organizationId: organization.id,
        industry: Industry.SAAS,
        isActive: true,
      },
    });

    console.log("✅ Admin user created:", adminUser.email);

    // Create demo sales rep
    const salesRepPassword = await bcrypt.hash("demo123", config.auth.bcryptRounds);
    
    const salesRep = await prisma.user.upsert({
      where: { email: "demo@intellileads.co" },
      update: {},
      create: {
        email: "demo@intellileads.co",
        name: "Demo Sales Rep",
        password: salesRepPassword,
        role: UserRole.SALES_REP,
        organizationId: organization.id,
        industry: Industry.SAAS,
        isActive: true,
      },
    });

    console.log("✅ Sales rep created:", salesRep.email);

    console.log("🎉 Database seeding completed successfully!");
    console.log("");
    console.log("📋 Default credentials:");
    console.log("  Admin: admin@intellileads.co / admin123");
    console.log("  Sales: demo@intellileads.co / demo123");

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run seed if called directly
if (require.main === module) {
  seed()
    .then(() => {
      console.log("✅ Seed completed");
      process.exit(0);
    })
    .catch((error) => {
      console.error("❌ Seed failed:", error);
      process.exit(1);
    });
}

export default seed;

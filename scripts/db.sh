#!/bin/bash

# Database management scripts for IntelliLeads Auth Service

echo "🗄️  IntelliLeads Auth Service - Database Management"
echo "=================================================="

case "$1" in
  "setup")
    echo "📦 Setting up database..."
    npx prisma db push
    echo "✅ Database setup completed!"
    ;;
  "migrate")
    echo "🔄 Creating migration..."
    npx prisma migrate dev --name "$2"
    echo "✅ Migration created!"
    ;;
  "deploy")
    echo "🚀 Deploying migrations..."
    npx prisma migrate deploy
    echo "✅ Migrations deployed!"
    ;;
  "reset")
    echo "⚠️  Resetting database..."
    npx prisma migrate reset --force
    echo "✅ Database reset completed!"
    ;;
  "seed")
    echo "🌱 Seeding database..."
    npx ts-node src/scripts/seed.ts
    echo "✅ Database seeded!"
    ;;
  "studio")
    echo "🔍 Opening Prisma Studio..."
    npx prisma studio
    ;;
  *)
    echo "Usage: $0 {setup|migrate|deploy|reset|seed|studio}"
    echo ""
    echo "Commands:"
    echo "  setup    - Push schema to database (development)"
    echo "  migrate  - Create new migration"
    echo "  deploy   - Deploy migrations (production)"
    echo "  reset    - Reset database and apply migrations"
    echo "  seed     - Seed database with initial data"
    echo "  studio   - Open Prisma Studio"
    exit 1
    ;;
esac

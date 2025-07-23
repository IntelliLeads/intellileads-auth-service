# 🚀 IntelliLeads Auth Service Commands

## 📦 Development Commands

### Build and Compilation
```bash
npm run build          # Compile TypeScript to JavaScript
npm run dev            # Development server with hot reload
npm run start          # Start production server
npm run clean          # Clean dist/ directory
```

### Testing
```bash
npm test               # Run all tests
npm run test:watch     # Tests in watch mode
npm run test:coverage  # Tests with coverage report
```

### Linting
```bash
npm run lint           # Check code with ESLint
npm run lint:fix       # Fix ESLint errors automatically
```

## 🗄️ Database Commands

### High-Level Scripts (Recommended)
```bash
npm run db:setup       # Setup database (development)
npm run db:migrate     # Create new migration
npm run db:deploy      # Deploy migrations (production)
npm run db:reset       # Reset database
npm run db:seed        # Populate with test data
npm run db:studio      # Open Prisma Studio (web interface)
```

### Direct Prisma Commands
```bash
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push schema to database
npm run prisma:migrate   # Create migration
npm run prisma:deploy    # Deploy migrations
npm run prisma:studio    # Open Prisma Studio
```

## 🐳 Docker Commands

```bash
npm run docker:build    # Build Docker image
npm run docker:run      # Run Docker container
```

## 📋 Typical Workflow

### 1. Initial Setup
```bash
# Install dependencies
npm install

# Setup database
npm run db:setup

# Populate with test data
npm run db:seed
```

### 2. Daily Development
```bash
# Start development server
npm run dev

# In another terminal, view database
npm run db:studio
```

### 3. Testing
```bash
# Run tests
npm test

# Check code quality
npm run lint
```

### 4. Production
```bash
# Compile
npm run build

# Deploy migrations
npm run db:deploy

# Start server
npm start
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Database
DATABASE_URL="postgresql://intellileads:intellileads123@localhost:5432/intellileads_auth"

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d

# Redis
REDIS_URL=redis://localhost:6379
```

## 🐳 Docker Compose

```bash
# Start database services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📊 Tool Access

- **Prisma Studio**: http://localhost:5555 (npm run db:studio)
- **pgAdmin**: http://localhost:8080 (admin@intellileads.co / admin123)
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## 🆘 Emergency Commands

```bash
# Reset everything
npm run db:reset

# Regenerate Prisma client
npm run prisma:generate

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

**💡 Tip**: Use `npm run` to see all available commands.

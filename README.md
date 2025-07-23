# @intellileads/auth-service

Authentication service for IntelliLeads microservices architecture.

## 🚀 Overview

This service handles all authentication and authorization for the IntelliLeads platform, including user registration, login, JWT token management, and role-based access control.

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🏗️ Architecture

```
intellileads-auth-service/
├── src/
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic
│   ├── middleware/      # JWT, validation, etc.
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── config/          # Configuration
│   └── app.ts           # Main application
├── tests/
│   ├── unit/            # Unit tests
│   └── integration/     # Integration tests
├── prisma/
│   └── schema.prisma    # Database schema
└── docs/                # Documentation
```

## 📋 Features

- **User Registration & Login**: Secure user authentication
- **JWT Token Management**: Access and refresh tokens
- **Role-Based Access Control**: User roles and permissions
- **Password Security**: Bcrypt hashing and validation
- **Rate Limiting**: API protection against abuse
- **CORS Support**: Cross-origin resource sharing
- **Input Validation**: Zod schema validation
- **Logging**: Winston structured logging
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for session management

## 🔧 Usage

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Server
NODE_ENV=development
PORT=3001
HOST=0.0.0.0

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d

# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/intellileads_auth"

# Redis
REDIS_URL=redis://localhost:6379
```

### API Endpoints

#### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user info

#### Users
- `GET /users` - List users (admin only)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user (admin only)

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --testNamePattern="UserService"
```

## 📚 API Reference

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe",
  "organizationId": "org-123"
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### Response Format
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "SALES_REP"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m Add some amazing feature`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related

- [IntelliLeads Shared Types](../intellileads-shared-types)
- [IntelliLeads CRM Service](../intellileads-crm-service)
- [IntelliLeads AI Service](../intellileads-ai-service)
- [IntelliLeads Web App](../intellileads-web-app)

## 📞 Support

For support, email support@intellileads.com or join our Slack channel.

---

Built with ❤️ by the IntelliLeads Team

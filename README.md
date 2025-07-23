# IntelliLeads Auth Service

Servicio de autenticación para la plataforma IntelliLeads. Maneja el registro de usuarios, login, gestión de tokens JWT y control de acceso basado en roles.

## Tecnologías

- **Node.js** con TypeScript
- **Fastify** como framework web
- **PostgreSQL** con Prisma ORM
- **Redis** para caché y sesiones
- **JWT** para autenticación
- **Jest** para testing

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
# Server
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/intellileads_auth"

# JWT
JWT_SECRET=tu-clave-secreta-super-segura
JWT_EXPIRES_IN=24h
JWT_REFRESH_EXPIRES_IN=7d

# Redis (opcional)
REDIS_URL=redis://localhost:6379
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Ejecutar tests
npm test

# Lint y fix
npm run lint
npm run lint:fix
```

## Base de Datos

```bash
# Configurar base de datos
npm run db:setup

# Ejecutar migraciones
npm run prisma:migrate

# Generar cliente Prisma
npm run prisma:generate

# Abrir Prisma Studio
npm run prisma:studio
```

## Estructura del Proyecto

```
src/
├── config/          # Configuraciones
├── controllers/     # Controladores de rutas
├── middleware/      # Middlewares (JWT, validación)
├── models/          # Modelos de datos
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── utils/           # Utilidades
└── scripts/         # Scripts de utilidad
```

## API Endpoints

### Autenticación
- `POST /auth/register` - Registrar usuario
- `POST /auth/login` - Login de usuario
- `POST /auth/refresh` - Renovar token
- `POST /auth/logout` - Logout
- `GET /auth/me` - Obtener usuario actual

### Usuarios
- `GET /users` - Listar usuarios (solo admin)
- `GET /users/:id` - Obtener usuario por ID
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario (solo admin)

## Modelos de Datos

### Usuario
- `id`: Identificador único
- `email`: Email del usuario
- `name`: Nombre completo
- `password`: Contraseña hasheada
- `role`: Rol del usuario (SUPER_ADMIN, ADMIN, MANAGER, SALES_REP, VIEWER)
- `organizationId`: ID de la organización
- `industry`: Industria (SAAS, CONSULTING, RETAIL, etc.)
- `isActive`: Estado activo/inactivo

### Organización
- `id`: Identificador único
- `name`: Nombre de la organización
- `domain`: Dominio (opcional)
- `industry`: Industria
- `plan`: Plan de suscripción (FREE, PRO, ENTERPRISE)
- `settings`: Configuraciones en JSON

## Docker

```bash
# Construir imagen
npm run docker:build

# Ejecutar contenedor
npm run docker:run
```

## Testing

```bash
# Ejecutar todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Tests con coverage
npm run test:coverage
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar TypeScript
- `npm start` - Servidor de producción
- `npm test` - Ejecutar tests
- `npm run lint` - Verificar código
- `npm run db:setup` - Configurar base de datos
- `npm run prisma:studio` - Abrir Prisma Studio

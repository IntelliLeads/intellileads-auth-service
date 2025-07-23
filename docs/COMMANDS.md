# 🚀 Comandos de IntelliLeads Auth Service

## 📦 Comandos de Desarrollo

### Build y Compilación
```bash
npm run build          # Compilar TypeScript a JavaScript
npm run dev            # Servidor de desarrollo con hot reload
npm run start          # Iniciar servidor de producción
npm run clean          # Limpiar directorio dist/
```

### Testing
```bash
npm test               # Ejecutar todos los tests
npm run test:watch     # Tests en modo watch
npm run test:coverage  # Tests con reporte de cobertura
```

### Linting
```bash
npm run lint           # Verificar código con ESLint
npm run lint:fix       # Corregir errores de ESLint automáticamente
```

## 🗄️ Comandos de Base de Datos

### Scripts de Alto Nivel (Recomendados)
```bash
npm run db:setup       # Configurar base de datos (desarrollo)
npm run db:migrate     # Crear nueva migración
npm run db:deploy      # Desplegar migraciones (producción)
npm run db:reset       # Resetear base de datos
npm run db:seed        # Poblar con datos de prueba
npm run db:studio      # Abrir Prisma Studio (interfaz web)
```

### Comandos Prisma Directos
```bash
npm run prisma:generate  # Generar cliente Prisma
npm run prisma:push      # Push schema a base de datos
npm run prisma:migrate   # Crear migración
npm run prisma:deploy    # Desplegar migraciones
npm run prisma:studio    # Abrir Prisma Studio
```

## 🐳 Comandos Docker

```bash
npm run docker:build    # Construir imagen Docker
npm run docker:run      # Ejecutar contenedor Docker
```

## 📋 Flujo de Trabajo Típico

### 1. Configuración Inicial
```bash
# Instalar dependencias
npm install

# Configurar base de datos
npm run db:setup

# Poblar con datos de prueba
npm run db:seed
```

### 2. Desarrollo Diario
```bash
# Iniciar servidor de desarrollo
npm run dev

# En otra terminal, ver base de datos
npm run db:studio
```

### 3. Testing
```bash
# Ejecutar tests
npm test

# Verificar calidad de código
npm run lint
```

### 4. Producción
```bash
# Compilar
npm run build

# Desplegar migraciones
npm run db:deploy

# Iniciar servidor
npm start
```

## 🔧 Variables de Entorno

Copia `.env.example` a `.env` y configura:

```bash
# Base de datos
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
# Levantar servicios de base de datos
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar servicios
docker-compose down
```

## 📊 Acceso a Herramientas

- **Prisma Studio**: http://localhost:5555 (npm run db:studio)
- **pgAdmin**: http://localhost:8080 (admin@intellileads.co / admin123)
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## 🆘 Comandos de Emergencia

```bash
# Resetear todo
npm run db:reset

# Regenerar cliente Prisma
npm run prisma:generate

# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

**💡 Tip**: Usa `npm run` para ver todos los comandos disponibles.

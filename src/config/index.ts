export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  jwtRefreshExpiresIn: string;
  bcryptRounds: number;
  rateLimitMax: number;
  rateLimitWindowMs: number;
  corsOrigin: string;
}

export interface DatabaseConfig {
  url: string;
}

export interface RedisConfig {
  url: string;
  password?: string;
}

export interface ServerConfig {
  port: number;
  host: string;
  nodeEnv: string;
}

export interface AppConfig {
  server: ServerConfig;
  auth: AuthConfig;
  database: DatabaseConfig;
  redis: RedisConfig;
}

export const loadConfig = (): AppConfig => {
  return {
    server: {
      port: parseInt(process.env["PORT"] || "3001", 10),
      host: process.env["HOST"] || "0.0.0.0",
      nodeEnv: process.env["NODE_ENV"] || "development",
    },
    auth: {
      jwtSecret: process.env["JWT_SECRET"] || "default-secret-change-in-production",
      jwtExpiresIn: process.env["JWT_EXPIRES_IN"] || "24h",
      jwtRefreshExpiresIn: process.env["JWT_REFRESH_EXPIRES_IN"] || "7d",
      bcryptRounds: parseInt(process.env["BCRYPT_ROUNDS"] || "12", 10),
      rateLimitMax: parseInt(process.env["RATE_LIMIT_MAX"] || "100", 10),
      rateLimitWindowMs: parseInt(process.env["RATE_LIMIT_WINDOW_MS"] || "900000", 10),
      corsOrigin: process.env["CORS_ORIGIN"] || "http://localhost:3000",
    },
    database: {
      url: process.env["DATABASE_URL"] || "postgresql://user:pass@localhost:5432/intellileads_auth",
    },
    redis: {
      url: process.env["REDIS_URL"] || "redis://localhost:6379",
      ...(process.env["REDIS_PASSWORD"] && { password: process.env["REDIS_PASSWORD"] }),
    },
  };
};

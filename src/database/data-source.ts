import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "dotenv"

config(); // Inicializa as variáveis de ambiente

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/common/entities/**/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
  subscribers: []
})



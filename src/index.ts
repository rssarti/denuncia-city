import express, { Request, Response } from 'express';
import { database } from './config/database.config';
import { userRoutes } from './modules/users/users.routes';
import { AppDataSource } from './database/data-source';

const app = express();
const port = 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    app.use('/users', userRoutes);
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco:', error);
  });

app.use('/users', userRoutes);


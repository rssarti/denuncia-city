import express from 'express';
import { userRoutes } from './modules/users/users.routes';
import { AppDataSource } from './database/data-source';
import { complaintsRoutes } from './modules/complaints/complaints.route';
import { categoriesRoutes } from './modules/categories/categories.route';

const app = express();
const port = 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    app.use('/users', userRoutes);
    app.use('/complaints', complaintsRoutes);
    app.use('/categories', categoriesRoutes);
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco:', error);
  });

app.use('/users', userRoutes);


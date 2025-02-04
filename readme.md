# 🏙️ Sistema de Denúncia de Problemas na Cidade

Este sistema permite que cidadãos reportem problemas na cidade, como buracos, necessidade de poda de árvores e outras situações. As denúncias podem ser feitas de forma anônima ou identificada, com suporte para imagens, vídeos e localização via mapa.

---

## 📌 Tecnologias Utilizadas

### **Backend**
- [Node.js](https://nodejs.org/) - Plataforma para execução de JavaScript no servidor
- [Express.js](https://expressjs.com/) - Framework web minimalista para Node.js
- [TypeORM](https://typeorm.io/) - ORM para PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Redis](https://redis.io/) - Cache e filas de processamento
- [Multer](https://github.com/expressjs/multer) - Upload de imagens e vídeos
- [JWT](https://jwt.io/) - Autenticação segura via tokens
- [Socket.IO](https://socket.io/) - Notificações em tempo real

---

## 📂 Estrutura de Pastas
│── /src
│   ├── /config                   # Configurações do projeto (env, database, etc.)
│   │   ├── database.config.ts     # Configuração do TypeORM e conexão com PostgreSQL
│   │   ├── env.config.ts          # Carregamento de variáveis de ambiente
│   │   ├── jwt.config.ts          # Configuração do JWT para autenticação
│   │   ├── s3.config.ts           # Configuração para upload de arquivos (AWS S3)
│   │   ├── redis.config.ts        # Configuração do Redis (cache e filas)
│   │
│   ├── /common                    # Módulos e utilitários compartilhados
│   │   ├── decorators             # Decorators personalizados
│   │   ├── dtos                   # Data Transfer Objects (DTOs)
│   │   ├── entities               # Entidades TypeORM compartilhadas
│   │   ├── exceptions             # Exceções personalizadas
│   │   ├── interfaces             # Interfaces globais
│   │   ├── middlewares            # Middlewares globais
│   │   ├── pipes                  # Pipes para validação e transformação
│   │   ├── utils                  # Funções auxiliares
│   │
│   ├── /modules                   # Módulos do sistema
│   │   ├── /auth                  # Autenticação e autorização
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.strategy.ts
│   │   │   ├── entities/user.entity.ts
│   │   │   ├── dtos/auth.dto.ts
│   │   │
│   │   ├── /users                 # Gerenciamento de usuários
│   │   │   ├── users.controller.ts
│   │   │   ├── users.module.ts
│   │   │   ├── users.service.ts
│   │   │   ├── entities/user.entity.ts
│   │   │   ├── dtos/users.dto.ts
│   │   │
│   │   ├── /reports               # Módulo de denúncias de problemas na cidade
│   │   │   ├── reports.controller.ts
│   │   │   ├── reports.module.ts
│   │   │   ├── reports.service.ts
│   │   │   ├── entities/report.entity.ts
│   │   │   ├── dtos/reports.dto.ts
│   │   │
│   │   ├── /notifications         # Notificações para usuários e administração
│   │   │   ├── notifications.controller.ts
│   │   │   ├── notifications.module.ts
│   │   │   ├── notifications.service.ts
│   │   │   ├── entities/notification.entity.ts
│   │   │
│   │   ├── /uploads               # Upload de imagens/vídeos para denúncias
│   │   │   ├── uploads.controller.ts
│   │   │   ├── uploads.module.ts
│   │   │   ├── uploads.service.ts
│   │   │   ├── entities/upload.entity.ts
│   │   │
│   │   ├── /admin                 # Painel administrativo
│   │   │   ├── admin.controller.ts
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.service.ts
│   │
│   ├── /database                  # Configuração do TypeORM e migrations
│   │   ├── migrations              # Migrations do TypeORM
│   │   ├── data-source.ts          # Configuração do banco de dados
│   │
│   ├── /jobs                      # Processos assíncronos (fila com Redis/RabbitMQ)
│   │   ├── notification.job.ts
│   │   ├── cleanup-reports.job.ts
│   │
│   ├── main.ts                     # Arquivo principal do Node.js
│   ├── app.ts                      # Configuração e inicialização do servidor Express
│
│── /test                           # Testes unitários e de integração
│
│── .env                            # Arquivo de variáveis de ambiente
│── package.json                     # Dependências do projeto
│── tsconfig.json                     # Configuração do TypeScript
│── docker-compose.yml                # Configuração do Docker para PostgreSQL, Redis e RabbitMQ

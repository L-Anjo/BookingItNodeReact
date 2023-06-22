# Introduction 
A plataforma web será capaz de gerir informações sobre alojamentos, incluindo dados como o tipo de alojamento, localização, preço, disponibilidade, e outros detalhes importantes tais como os serviços adicionais. Além disso, terá uma utilização facilitada para os proprietários e para os clientes. Também permitirá aos anunciantes a promoção dos alojamentos.

# Getting Started
1. Software dependencies

   ```
   docker
   docker compose
   ```

# Build

1. Installation process LINUX & MacOSx & Windows
   1. Create and start the project
   ```shell
   docker-compose up -d --build
   ```
   NOTA: Se o projeto estiver com problemas de cors na primeira instalação fazer
   ```shell
   docker-compose down && docker-compose up -d
   ```
   
   2. Logs
   ```shell
   docker-compose logs -f --tail=100
   ```

# API Commands
1. API Logs
   ```shell
   docker-compose logs api-app -f --tail=100
   ```

2. Seed Database
   ```shell
   docker exec -it api-app npm run seed
   ```

3. Start cron jobs
   ```shell
   docker exec -it api-app npm run jobs
   ```

4. Cron jobs Logs
   ```shell
   docker exec -it api-app tail -fn 100 /var/log/cron.log
   ```

5. Run tests
   ```shell
   docker exec -it api-app npm test
   ```

6. Database
   ```shell
   docker exec -it api-app yarn sequelize
   ```

# Frontend Commands
1. Front end Logs
   ```shell
   docker-compose logs front-app -f --tail=100
   ```

# API - Backend

   http://api.localhost/

   http://api.localhost/docs

# APP - Frontend

   http://localhost/

# Admin User
  ```
  email: admin@bookingithere.com
  Password: 123456
  ```

# Database management

   http://phpmyadmin.localhost/

# Emails

   http://mail.localhost/

# Contribute

- João Ponte, nº 17694
- João Carvalho, nº 12747
- Pedro Martins, nº 23527
- Luís Anjo, nº 23528
- Diogo Silva, nº 23893

# Links

- [BookingItHere.com](https://BookingItHere.com)
- [Docker](https://docker.com)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
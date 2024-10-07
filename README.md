# G4cuisiner

G4cuisiner is G4 School student project.

## Project installation (local)

- Make sure you already had installed:

  - Git
  - Node JS
  - PNPM
  - MySQL

- Install project dependencies

  ```bash
  pnpm install
  ```

- Creates a database user and a password

  ```sql
  CREATE USER 'g4cuisiner-user'@'localhost' IDENTIFIED BY 'g4cuisiner-password';
  ```

  - Allows user to connect to database

  ```sql
  GRANT ALL PRIVILEGES ON *.* TO 'g4cuisiner-user'@'localhost';
  ```

- Add an `.env` file at the root of the project, with the following variables

  - Database connection ([Prisma get started](https://www.prisma.io/docs/get-started/setup-prisma/start-from-scratch/relational-databases/mysql-mysql-ts))
    > I use MySQL Prisma adapter, but you can use any other database supported by Prisma. Follow the [Prisma database drivers](https://www.prisma.io/docs/orm/overview/databases/database-drivers) to setup your database.

  ```js
  DATABASE_URL=mysql://g4cuisiner-user:g4cuisiner-password@localhost:3306/g4cuisiner-db
  ```

  - Session secret ([Jose Docs](https://github.com/panva/jose))

  Generate 32 characters random string

  ```bash
  openssl rand -base64 32
  ```

  Use the generated string for the encryption key

  ```js
  SESSION_SECRET=your-session-secret-generated-with-openssl
  ```

  <!-- - Resend API config ([Resend Docs](https://resend.com/docs/dashboard/api-keys/introduction))

  ```js
  RESEND_API_KEY=your-resend-api-key-generated-with-resend-dashboard
  ```

  - Other necessary variables
    `Copy/paste` theses parameters into your `.env` file

  ```js
  RESEND_DOMAIN=https://domain.com
  RESEND_EMAIL=hello@domain.com
  ``` -->

- Generate the Prisma client

  ```bash
  pnpm prisma generate
  ```

- Run Prisma database migrations

  ```bash
  pnpm prisma migrate dev --name initial-migration
  ```

- Run server project

   ```bash
   pnpm run dev
   ```

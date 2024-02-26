### Prerequisites

- **Node version 18.x**
### Install packages

```shell
npm i
```

### Setup .env


```js
DATABASE_URL=mysql://root:123456@localhost:3306/section_2
```


### Connect to MySQL
```shell
Set up MySQL Workbench
Create MySQL connection name is ecommerce
dbname: section_2 
Hostname: 127.0.0.1 or localhost
Port: 3306
Username: root
Password: 123456 or your password

if you have another password or another username
please config this DATABASE_URL

Example:
DATABASE_URL=mysql://username:pasword@hostname:port/dbname
```

### Generate Prisma and push DB
```shell
npx prisma generate
npx prisma db push
```

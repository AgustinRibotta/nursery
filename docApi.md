## 1. Descargar Repo

## 2. Dentro del proyecto (Instala dependecias)

```bash
  npm i
```

## 3. Instalar Postgres

- Ingresar a Postgres

```powershell

psql postgres

```

- Cuando estes dentro :

```sql

CREATE USER nombre_usuario WITH PASSWORD 'contraseña';

ALTER USER nombre_usuario CREATEDB;

ALTER USER nombre_usuario CREATEROLE;

```

- Crear Base de Datos

```sql

CREATE DATABASE mi_nueva_db ;

GRANT ALL PRIVILEGES ON DATABASE mi_nueva_db TO usuario_ejemplo;

ALTER DATABASE nombre_base_datos OWNER TO nuevo_usuario;

\q

```

## 4 Generamos y completamos archivo .env

Lo creamos a la altura de la carpeta src creamos un archivo .env

```json
  DB_USER='nombre_usuario'
  DB_HOST='localhost'
  DB_NAME='mi_nueva_db'
  DB_PASSWORD='contraseña'
  DB_PORT='5432'
  APP_PORT=3000
```

## 5 Iniciar el Servidor

```bash
  npm start

  npx nodemon app.js
```

# RESTful API Basics

## Index

- [User](#user)
  - [New](#new) : Generate a new "User".
  - [Login](#login) : Log in and generate a token for the "User".
  - [Update](#update) : Update "User".
  - [List](#list) : List the users that have been created.
  - [Logout](#logout) : Log out and delete the corresponding token for the "User".
- [About Us](#about-us)
  - [Create](#create-1) : Create a new "About Us" section
  - [Update](#update-1) : Update the "About Us" section
  - [List Active](#list-active) : List the active "About Us" sections
  - [Delete](#delete) : Delete the specified "About Us" section
- [Season](#season)
  - [List Active](#list-active-1) : List the active "Seasons".
  - [Create](#create-2) : Create a new "Season".
  - [Update](#update-2) : Update the "Season".
  - [Delete](#delete-1) : Delete the "Season".

---

## User

- **URL:** `http://localhost:3000/api/user`

### New

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/`
- **Headers:** None
- **Body:** raw (json)

  ```json
  {
    "fname": "",
    "lname": "",
    "email": "",
    "password": ""
  }
  ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "User created successfully",
      "status": "success",
      "data": {
        "id": 1,
        "fname": "example",
        "lname": "example",
        "email": "example@example.com"
      }
    }
    ```

[Back to Index](#index)

### Login

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/login`
- **Headers:** None
- **Body:**

  ```json
  {
    "email": "",
    "password": ""
  }
  ```

- **Description:** Every time you log in you will need to generate a new Token
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Login successful",
      "status": "success",
      "user": {
        "id": 1,
        "email": "example@example.com",
        "fname": "example",
        "lname": "example"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzIwOTUxOTgyLCJleHAiOjE3MjA5NTU1ODJ9.6N4VBf-ld9opwIg-K13e8oMsbyl36odPgzTQkaB5z8U"
    }
    ```

[Back to Index](#index)

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/user/3`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Body:** raw (json)

  ```json
  {
    "fname": "",
    "lname": "",
    "email": "",
    "password": ""
  }
  ```

- **Responses:**

  - **Example Response:**

        ```json
        {
          "message": "User updated successfully",
          "status": "success",
          "user": {
            "id": 1,
            "email": "example.new@example.com",
            "fname": "example",
            "lname": "example"
          }
        }
        ```

[Back to Index](#index)

### List

- **Method:** GET
- **URL:** `http://localhost:3000/api/user/`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Authorization:** Bearer Token
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "User list",
      "status": "success",
      "user": [
        {
          "id": 1,
          "fname": "example1",
          "lname": "example1",
          "email": "example1.new@example.com"
        },
        {
          "id": 2,
          "fname": "example2",
          "lname": "example2",
          "email": "example2.new@example.com"
        },
        {
          "id": 3,
          "fname": "example3",
          "lname": "example3",
          "email": "example3.new@example.com"
        }
      ]
    }
    ```

[Back to Index](#index)

### Logout

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/logout`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Description:** Every time you close the session the token will be deleted and you will have to log in again
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Logout successful",
      "status": "success"
    }
    ```

---

## About Us

- **URL:** `http://localhost:3000/api/about-us`

### Create

- **Description:** Keep in mind that when creating a new "about us" you can only have one active

- **Method:** POST
- **URL:** `http://localhost:3000/api/about-us/`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Body:** form-data

  ```json
  {
    "title": "",
    "text": "",
    "iamge": "",
    "active": ""
  }
  ```

- **Responses:**

  - **Example Response:**

        ```json
        {
          "message": "About Us created successfully",
          "status": "success",
          "data": {
            "id": 1,
            "title": "example",
            "text": "example",
            "image": "1720977005536.jpg",
            "active": true
          }
        }
        ```

[Back to Index](#index)

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/about-us/id`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Body:** form-data

  ```json
  {
    "title": "",
    "text": "",
    "iamge": "",
    "active": ""
  }
  ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us created successfully",
      "status": "success"
    }
    ```

[Back to Index](#index)

### List Active

- **Method:** GET
- **URL:** `http://localhost:3000/api/about-us/active`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us List Active successfully",
      "status": "success",
      "data": [
        {
          "id": 1,
          "title": "example2",
          "text": "example2",
          "image": null,
          "active": true
        }
      ]
    }
    ```

[Back to Index](#index)

### Delete

- **Method:** DELETE
- **URL:** `http://localhost:3000/api/about-us/`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us deleted successfully",
      "status": "success"
    }
    ```

---

## Season

- **URL:** `http://localhost:3000/api/season`

### List Active

- **Method:** GET
- **URL:** `http://localhost:3000/api/season/active`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey"
    }
    ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us List Active successfully",
      "status": "success",
      "data": [
        {
          "id": 3,
          "title": "example2",
          "text": "example2",
          "active": true
        }
      ]
    }
    ```

[Back to Index](#index)

### Create

- **Method:** POST
- **URL:** `http://localhost:3000/api/season/`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Body:** raw (json)

  ```json
  {
    "title": "",
    "text": "",
    "active": ""
  }
  ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Seosn List Active successfully",
      "status": "success",
      "data": [
        {
          "id": 1,
          "title": "example",
          "text": "example",
          "active": true
        }
      ]
    }
    ```

[Back to Index](#index)

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/season/id`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Body:** raw (json)

  ```json
  {
    "title": "",
    "text": "",
    "active": ""
  }
  ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Season update successfully",
      "status": "success"
    }
    ```

[Back to Index](#index)

### Delete

- **Method:** DELETE
- **URL:** `http://localhost:3000/api/season/id`
- **Headers:**

  - **Authorization:** Bearer Token

    ```json
    {
      "Authorization": "Bearer Token"
    }
    ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Season deleted successfully",
      "status": "success"
    }
    ```

[Back to Index](#index)

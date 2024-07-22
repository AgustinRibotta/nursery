# RESTful API Basics #nursery

## User

- **URL:** `http://localhost:3000/api/user`

### New

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/create`
- **Headers:** None
- **Body:**

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
        "id": 7,
        "fname": "example",
        "lname": "example",
        "email": "example@example.com"
      }
    }
    ```

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
        "id": 7,
        "email": "example@example.com",
        "fname": "example",
        "lname": "example"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzIwOTUxOTgyLCJleHAiOjE3MjA5NTU1ODJ9.6N4VBf-ld9opwIg-K13e8oMsbyl36odPgzTQkaB5z8U"
    }
    ```

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/user/update/3`
- **Headers:**
  - **Authorization:** Bearer Token
- **Body:**

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
        "id": 7,
        "email": "example.new@example.com",
        "fname": "example",
        "lname": "example"
      }
    }
    ```

### List

- **Method:** GET
- **URL:** `http://localhost:3000/api/user/list`
- **Headers:**
  - **Authorization:** Bearer Token
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "User list",
      "status": "success",
      "user": [
        {
          "id": 5,
          "fname": "Alice",
          "lname": "Johnson",
          "email": "aliace.johnson@example.com"
        },
        {
          "id": 6,
          "fname": "Alice",
          "lname": "Johnson",
          "email": "aliceasd.johnson@example.com"
        },
        {
          "id": 7,
          "fname": "example",
          "lname": "example",
          "email": "example.new@example.com"
        }
      ]
    }
    ```

### Logout

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/logout`
- **Headers:**
  - **Authorization:** Bearer Token
- **Description:** Every time you close the session the token will be deleted and you will have to log in again
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "Logout successful",
      "status": "success"
    }
    ```

## About Us

- **URL:** `http://localhost:3000/api/about-us`

### Create

- **Method:** POST
- **URL:** `http://localhost:3000/api/about-us/create`
- **Headers:** None
- **Body:**

  ```json
  {
    "title": "",
    "text": "",
    "iamge": ""
  }
  ```

- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us created successfully",
      "status": "success",
      "data": {
        "id": 4,
        "title": "example",
        "text": "example",
        "image": "1720977005536.jpg"
      }
    }
    ```

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/about-us/update?id=5`
- **Headers:** None
- **Body:**

  ```json
  {
    "title": "",
    "text": "",
    "iamge": ""
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

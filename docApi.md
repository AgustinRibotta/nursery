# RESTful API Basics #nursery

## User

- **URL:** `http://localhost:3000/api/user`

### New

- **Method:** POST
- **URL:** `http://localhost:3000/api/user/`
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
        "id": 1,
        "email": "example@example.com",
        "fname": "example",
        "lname": "example"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzIwOTUxOTgyLCJleHAiOjE3MjA5NTU1ODJ9.6N4VBf-ld9opwIg-K13e8oMsbyl36odPgzTQkaB5z8U"
    }
    ```

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/user/3`
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
        "id": 1,
        "email": "example.new@example.com",
        "fname": "example",
        "lname": "example"
      }
    }
    ```

### List

- **Method:** GET
- **URL:** `http://localhost:3000/api/user/`
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
          "id": 1,
          "fname": "example",
          "lname": "example",
          "email": "example.new@example.com"
        }
        {
          "id": 2,
          "fname": "example",
          "lname": "example",
          "email": "example.new@example.com"
        }
        {
          "id": 3,
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

- **Description:** Keep in mind that when creating a new "about us" you can only have one active

- **Method:** POST
- **URL:** `http://localhost:3000/api/about-us/`
- **Headers:**
  - **Authorization:** Bearer Token
- **Body:**

  ```json
  {
    "title": "",
    "text": "",
    "iamge": "",
    "active":
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

### Update

- **Method:** PATCH
- **URL:** `http://localhost:3000/api/about-us/id`
- **Headers:**
  - **Authorization:** Bearer Token
- **Body:**

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

### List

- **Method:** GET
- **URL:** `http://localhost:3000/api/about-us/active`
- **Headers:**
  - **Authorization:** Bearer Token
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

### Delete

- **Method:** DELETE
- **URL:** `http://localhost:3000/api/about-us/`
- **Headers:**
  - **Authorization:** Bearer Token
- **Responses:**

  - **Example Response:**

    ```json
    {
      "message": "About Us deleted successfully",
      "status": "success"
    }
    ```

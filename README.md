# Nodejs Expressjs MongoDB Users API

## How to install

### Using Git

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Andrii-25/mvp-app.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`

    ```bash
    cp .env.example .env
    ```

3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.

## How to run

### Running API server locally

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
App is running...
Connected to mongodb:YOUR_DB_CONNECTION_STRING
```

**Note:** `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

## Routes

### GET Routes

- /users - to get all users
- /users/current - to get current
- /users/:id - to get user by id

### POST Routes

- /users/register - to register
- /users/login - to login

### PUT Routes

- /users/:id - to update one user

### DELETE Routes

- /users/:id - to remove one user

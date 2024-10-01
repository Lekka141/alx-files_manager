# 0x04. Files Manager

## Features

- User authentication via tokens.
- List all files.
- Upload new files.
- Change permissions of files (publish/unpublish).
- View files.
- Generate thumbnails for images.
- Background processing using Bull for tasks like thumbnail generation and sending welcome emails.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and file data.
- **Redis**: In-memory data structure store, used for caching and temporary data.
- **Bull**: Queue system for managing background jobs.
- **Mocha**: JavaScript test framework for testing.

## Requirements

- Node.js (version 12.x.x)
- MongoDB
- Redis
- Ubuntu 18.04 LTS or compatible environment

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/alx-files_manager.git
    cd alx-files_manager
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set environment variables**:
    Make sure to configure your environment variables for MongoDB and Redis in a `.env` file or your environment setup.

4. **Run the application**:
    ```bash
    npm run start-server
    ```

5. **Start the worker** (in a separate terminal):
    ```bash
    npm run start-worker
    ```

## API Endpoints

- **GET /status**: Check the status of Redis and MongoDB.
- **GET /stats**: Get statistics on the number of users and files.
- **POST /users**: Create a new user (requires email and password).
- **GET /connect**: Authenticate a user and generate a token.
- **GET /disconnect**: Sign out a user based on their token.
- **GET /users/me**: Retrieve the authenticated user's information.
- **POST /files**: Upload a new file (with details like name, type, and data).
- **GET /files/:id**: Retrieve a specific file by ID.
- **GET /files**: List all files with pagination.
- **PUT /files/:id/publish**: Publish a file to make it public.
- **PUT /files/:id/unpublish**: Unpublish a file to make it private.
- **GET /files/:id/data**: Retrieve the content of a file by ID (supports query parameter for size).

## Testing

To run the tests for the application, use the following command:

```bash
npm test

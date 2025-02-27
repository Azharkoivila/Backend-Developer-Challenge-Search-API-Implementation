# BytesDelivery Assignment

This is a Node.js application for managing products using Express and MongoDB.

## Project Structure

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd BytesDelivery-Assignment
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. The application will be running on `http://localhost:3000`.

## API Endpoints

### Get All Products

- **URL:** `/api/v1/products`
- **Method:** `GET`
- **Query Parameters:**
  - `title` (optional): Filter products by title
  - `category` (optional): Filter products by category
  - `price` (optional): Filter products by price
  - `page` (optional): Pagination, default is 1
- **Response:**
  - Status: `200 OK`
  - Body: JSON array of products

### Example Request

```sh
curl -X GET "http://localhost:3000/api/v1/products?title=example&category=example&price=100&page=1"

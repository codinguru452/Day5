
# Library Books REST API

## Overview

This document describes a REST API for managing books in a library.

Base URL: `/api/books`

Each book has an ID, title, author, publication year, and ISBN.

## Endpoints

### 1. List all books

- **Method:** GET
- **Path:** `/api/books`
- **Description:** Retrieves all books in the library.
- **Success status:** `200 OK`
- **Example response:**

```json
[
  {
    "id": 1,
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": 1958,
    "isbn": "9780385474542"
  }
]
```

### 2. Get a single book

- **Method:** GET
- **Path:** `/api/books/1`
- **Description:** Retrieves a book using its ID.
- **Success status:** `200 OK`
- **Example response:**

```json
{
  "id": 1,
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "year": 1958,
  "isbn": "9780385474542"
}
```

### 3. Create a new book

- **Method:** POST
- **Path:** `/api/books`
- **Description:** Adds a new book to the library.
- **Example request body:**

```json
{
  "title": "The River and the Source",
  "author": "Margaret Ogola",
  "year": 1994,
  "isbn": "9789966467000"
}
```

- **Success status:** `201 Created`

### 4. Update a book

- **Method:** PUT
- **Path:** `/api/books/1`
- **Description:** Replaces the details of an existing book.
- **Example request body:**

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "year": 1958,
  "isbn": "9780385474542"
}
```

- **Success status:** `200 OK`

### 5. Delete a book

- **Method:** DELETE
- **Path:** `/api/books/1`
- **Description:** Deletes a book using its ID.
- **Success status:** `204 No Content`

### 6. Find books by author

- **Method:** GET
- **Path:** `/api/books?author=Chinua%20Achebe`
- **Description:** Retrieves books written by the specified author using a query parameter.
- **Success status:** `200 OK`
- **Example response:**

```json
[
  {
    "id": 1,
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": 1958,
    "isbn": "9780385474542"
  }
]
```

## Error responses

### 400 Bad Request

**Meaning:** The request contains invalid data or missing required fields.

Example response:

```json
{
  "error": "Bad Request",
  "message": "The title and author fields are required."
}
```

### 404 Not Found

**Meaning:** The requested book does not exist.

Example response:

```json
{
  "error": "Not Found",
  "message": "Book with ID 99 was not found."
}
```

## Summary

| HTTP method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/books` | List all books |
| GET | `/api/books/1` | Retrieve one book |
| POST | `/api/books` | Create a book |
| PUT | `/api/books/1` | Update a book |
| DELETE | `/api/books/1` | Delete a book |
| GET | `/api/books?author=Chinua%20Achebe` | Filter by author |

**Note:** These endpoints describe the proposed API design. A real server would need to implement them before they could be used.

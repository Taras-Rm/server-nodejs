# server-nodejs

## Start server
`npm run dev`

## Endpoints
- **POST** - localhost:8000/api/user (create user)
#### Request (example):
  ```sh
{
    "name": "Vital"
}
```
--------
- **GET** - localhost:8000/api/user/:id (get user by ID)
-------
- **POST** - localhost:8000/api/todo (create todo item)
#### Request (example):
  ```sh
{
    "content": "Walking",
    "done": false,
    "user_id": "62a088440775439c04b5c1e5"
}
```
-------
- **PUT** - localhost:8000/api/todo (update todo item)
#### Request (example):
  ```sh
{
    "content": "Walking 5",
    "done": true,
    "_id": "62a095af52f21933b1e1858c"
}
```
-------
- **DELETE** - localhost:8000/api/todo/:id (delete todo item by ID)
-------
- **GET** - localhost:8000/api/todo/:user_id (get todo items by user ID)
#### Request (example):
  ```sh
{
    "content": "Walking 5",
    "done": true,
    "_id": "62a095af52f21933b1e1858c"
}
```

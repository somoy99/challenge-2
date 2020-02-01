
## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Documentation

[Swagger] http://localhost:3000/api  to check open api specifications

### Compodoc
```bash
# [Compodoc](http://localhost:8080) to view structure
$ npx compodoc -p tsconfig.json -s
```

### API Specification
[GET] /all - to view all contacts

[POST] /add - to add new contact 

Params: Type raw/JSON 
```bash
  {
    "name": String,
    "number": Number
  }
```
[POST] /edit - to edit a contact
Params: Type raw/JSON 
```bash
  {
    "_id": String(MongoDB ID),
    "name": String,
    "number": Number
  }
```
[POST] /delete - to delete a contact
Params: Type raw/JSON 
```bash
  {
    "_id": String(MongoDB ID),
  }
```
[POST] /fetch-by-number - to fetch a contact
Params: Type raw/JSON 
```bash
  {
    "number": Number,
  }
```


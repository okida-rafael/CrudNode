# Projeto Crud Node.js

## Descrição
Crud Simples em Node.js nativo, para cadastro de usuários. Este projeto foi desenvolvido para exemplificar um CRUD básico sem o uso de dependências externas, utilizando apenas funcionalidades nativas do Node.js.

### Tecnologia Usada
Node.js: O projeto é inteiramente construído em Node.js nativo, sem a necessidade de bibliotecas ou frameworks adicionais.


## End-point: getUsers
Busca todos os usuários cadastrados.
### Method: GET
>```
>localhost:3000/users
>```
### Response: 200
```json
[
    {
        "id": 1,
        "name": "Ragnar"
    },
    {
        "id": 2,
        "name": "Freyja"
    },
    {
        "id": 3,
        "name": "Balder"
    }
]
```


________________________________________________________________________________________________


## End-point: getUsersById
Busca de usuário por ID.
### Method: GET
>```
>localhost:3000/users/1
>```
### Response: 200
```json
{
    "id": 1,
    "name": "Ragnar"
}
```

### Response: 400
```json
{
    "error": "User not found!"
}
```


________________________________________________________________________________________________


## End-point: createUser
Cria novo usuário.
### Method: POST
>```
>localhost:3000/users
>```
### Body (**raw**)

```json
{"name":"Odin"}
```

### Response: 200
```json
{
    "id": 4,
    "name": "Odin"
}
```


________________________________________________________________________________________________


## End-point: updateUser
Atualiza cadastro de usuário por ID.
### Method: PUT
>```
>localhost:3000/users/6
>```
### Body (**raw**)

```json
{"name":"Thor"}
```

### Response: 200
```json
{
    "id": 4,
    "name": "Thor"
}
```

### Response: 400
```json
{
    "error": "User not Found!"
}
```


________________________________________________________________________________________________


## End-point: deleteUser
Deleta cadastro de usuário por ID.
### Method: DELETE
>```
>localhost:3000/users/4
>```
### Response: 200
```json
[
    {
        "id": 1,
        "name": "Ragnar"
    },
    {
        "id": 2,
        "name": "Freyja"
    },
    {
        "id": 3,
        "name": "Balder"
    }
]
```


________________________________________________________________________________________________


Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)

# Global Accelerate Coding task Solution

## Documentation

# INSTRUCTIONS

- create development.json in config file
- MYSQL DATABASE SET UP

```
 {
    "db_username": "you database username",
    "db_password": "your database password"
}

```

- **npm install**

* **npm start**

to start the server at port 5000

1. **/episodes**

Returns all episodes data sorteed by **releaseDate** from oldest to newest along with the comment count

**Request**

GET
http://localhost:5000/api/episodes

**Response**

```
[
    {
        "id": ...,
        "name": "...",
        "releaseDate": "...",
        "episodeCode": "...",
        "created": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "commentCount": ...
    },
]

```

2. **/comments**

Returns all comments data in reverse chronological order with **public ipaddress** of the commenter and dateTime created

**Request**

GET
http://localhost:5000/api/comments

**Response**

```
[
    {
        "id": ..,
        "comment": "..",
        "ipAddressLocation": "...",
        "created": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "episodeId": ...
    },
]

```

3. **/characters/?sort=lastName | firstName&gender&status=unknown | active | dead |&location**

Returns all character sorted by the parameter and filter the data by second parameter provided

**Request**

GET
http://localhost:5000/api/characters/?sort=lastName&status=unknown

**Response**

```
[
    {
        "id": ...,
        "firstName": "...",
        "lastName": "...",
        "status": "UNKNOWN",
        "stateOfOrigin": "...",
        "gender": "...",
        "created": "...",
        "createdAt": "...",
        "updatedAt": "..."
    }
]

```

4. **characters/1/episodes**

Returns all episodes of the character with the id=1

**Request**

GET
http://localhost:5000/api/characters/1/episodes

**Response**

```
[
    {
        "id": 1,
        "name": "Episode 1",
        "releaseDate": "...",
        "episodeCode": "...",
        "created": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "CharactersEpisode": {
            "id": 2,
            "characterId": 1,
            "episodeId": ...,
            "createdAt": "...",
            "updatedAt": "..."
        }
    },
]

```

5. **characters/1/episodes**

Returns the just created comment by in the episode with the id=1

**Request**

POST
http://localhost:5000/api/episodes/1/comments

**Request BODY**

```
{
    "comment":"...",
    "ipAddressLocation":"...",
    "created":"..."
}
```

**Response**

```
[
    {
        "id": 1,
        "name": "Episode 1",
        "releaseDate": "...",
        "episodeCode": "...",
        "created": "...",
        "createdAt": "...",
        "updatedAt": "...",
        "CharactersEpisode": {
            "id": 2,
            "characterId": 1,
            "episodeId": ...,
            "createdAt": "...",
            "updatedAt": "..."
        }
    },
]

```

**ERROR MESSAGE if any of the field is empty**
**status code 400**

```
{
message :{
    "comment":"...", ||
    "ipAddressLocation":"...",||
    "created":"..."
}
}
```

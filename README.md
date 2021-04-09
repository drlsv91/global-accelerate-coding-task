# Global Accelerate Coding task Solution

## Documentation

1. **/episodes**

Returns all episodes data sorteed by **releaseDate** from oldest to newest along with the comment count

**Request**

GET
http://localhost:5000/api/episodes

**Request**

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

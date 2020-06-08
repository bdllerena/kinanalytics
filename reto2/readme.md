# Reto2
Fueron creadas 4 apis
* Page
* Section
* Post
* News
Cuya relación genera un Json nested
## Demo
* [reto2](https://reto2-kinanalytics.herokuapp.com/explorer) - Demo Live

### Ejemplo POST
Agregar una noticia en la página principal

```
Request URL:
https://reto2-kinanalytics.herokuapp.com/api/news
Parameters:data 
value:
{
  "category": "News",
  "title": "New Machine learning techniques",
  "text": "New techniques has been discovered",
  "image": "(Any image in base64)",
  "pageId": "home (main page/index)"
}
Response: 200 OK
```
### Ejemplo GET

Recupera la estructura de noticias

```
Request URL
https://reto2-kinanalytics.herokuapp.com/api/news
Response Body
[
  {
    "category": "string",
    "title": "string",
    "text": "string",
    "image": "string",
    "id": "string",
    "pageId": "string"
  }
]
```
## Frameworks utilizados
* Nodejs
* Loopback
* Swagger
* Heroku
* Mongodb / mlab



Welcome, we are eager to see how creative minds can use our etymology database in their project.

EtimolojiTurkce.com has about **14.000 Turkish word**'s etymological explanation, over 3.000 daily visitors and has a special search engine designed for Turkish words.

In this documentation and repository you can see the examples of how you can use etimolojiturkce.com HTTP api in your projects.

### See the Database Status
Allows you to see if the database service is up and running.

```
GET http://www.etimolojiturkce.com/api/status

{
  "status":"1",
  "message":"Service is UP"
}
```

### Get A Word's Data
Allows you to get all the the etymology data about a spesific word.

```
GET http://www.etimolojiturkce.com/api/word/{WORD} (eg: mahal)

{
  "return":"1",
  "word":"mahal",
  "derivedLang":"Ar",
  "explanation":"~ Ar mah\u0323all \u0645\u062d\u0644\u0651  [#h\u0323ll iz\/m.]  \u00e7\u00f6zme yeri, durma veya konaklama yeri, konak, durak &lt; Ar h\u0323alla \u062d\u0644\u0651 \u00e7\u00f6zd\u00fc, duraklad\u0131 &#8594; hal2",
  "firstInHistory":"mahall \"yer\" [ Dede Korkut Kitab\u0131 (1400 y\u0131l\u0131ndan \u00f6nce) : Bu mahalde sultanum, babas\u0131 Salur Kazan\u0131lem Karacuk (...) ]",
  "additional":"Mal bulmu\u015f ma\u011frib\u00ee deyimi, 16. yy'dan itibaren Ma\u011frip sahillerine egemen olan yerel korsan beylikleriyle ba\u011flant\u0131l\u0131 olmal\u0131d\u0131r."
}
```

 - ***return:*** If the word exist in DB, return 1 else return 0
 - ***word:*** Corrected version of the word you get the data for.
 - ***derivedLang:*** Which language the word has deriven from.
 - ***explanation:*** Explanation and meaning of the word and its roots.
 - ***firstInHistory:*** Which Turkish book contains the word for the first time as it is known.
 - ***additional:*** Additional information about the word or its roots.
 

### Get A Random Word Data
Allows you to get the data of a random word from the Database.

```
GET http://www.etimolojiturkce.com/api/word/random

{
  "return":"1",
  "word":"beyhude",
  ---additional data here---
}
```

### Get Multiple Random Words
Allows you to get the data of a random word from the Database.

```
GET http://www.etimolojiturkce.com/api/word/random&q={quantity} (eg:5, MAX:10)

["sardalya","kar\u015f\u0131","mucit","hedonizm","delalet"]
```
This returns an array of words.

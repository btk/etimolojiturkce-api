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


### Search for Words
Allows you to search in the existing words form the Database.

```
GET http://www.etimolojiturkce.com/api/search/{TERM} (eg: aba)

{
  "return":"1",
  "0":"aba",
  "1":"abanmak",
  "2":"acaba",
  "3":"akraba",
  "4":"babagannu\u015f",
  "5":"caba",
  "6":"daraba",
  "7":"gabavet",
  "8":"gulyabani",
  "9":"habaset"
}
```
In this json dump, return value being 1 means that the searched {term} actually exist in the database, if return value is 0, the word does not exist, but the results by search engine are listed below. *MAX 10 word is listed.*

## Examples with Javascript API
The Javascript side of the API is already implemented, here is some examples explaining how you can use it;

Download the javascript file in the master of his repository and include it to your page:

```<script type="text/javascript" src="your/js/path/etimolojiturkce.js"></script>```

Some examples with the function;

```
       etimolojiTurkceApi("word", "sadasd", function(w){
            console.log(w); // word does not exist
       }, 1);

       etimolojiTurkceApi("word", "mahal", function(w){
            console.log(w); // returns word
       }, 1);

       etimolojiTurkceApi("search", "aba", function(w){
            console.log(w); // returns search result
       }, 10);

       etimolojiTurkceApi("word", "random", function(w){
            console.log(w); // returns random words
       }, 5);
       
       etimolojiTurkceApi("word", "random", function(w){
            console.log(w); // returns one random word data
       }, 0);
       
```

- Do you want to show add some more examples? PR your examples in /js-examples directiory.
- Did you implement `etimolojiTurkceApi()` function in the programming language you are using? PR your code to the master directiory.

## Suggestions
Did you like the api? Yes it can be better, open any suggestions as an issue and have fun coding. Keep us updated with your project that you are using the api with.


## Sources and Licensing
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

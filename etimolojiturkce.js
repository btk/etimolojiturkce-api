
function etimolojiTurkceApi(type, word, read, quant){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.etimolojiturkce.com/"+type+"/"+word+"&q="+quant, true);
    xhr.responseType = "text";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        read(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();

}
    //Examples

/*
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

*/

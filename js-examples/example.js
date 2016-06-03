
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

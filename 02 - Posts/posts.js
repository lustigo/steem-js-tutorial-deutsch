//Bibliothek importieren
const steem = require("steem");
//Callback-Funktion definieren: Wir erhalten erst die Fehler und dann die Daten
const callback = function(fehler,daten){
    //Wir iterieren durch alle erhaltenen Posts und greifen uns immer einen heraus
    for(let post of daten){
        //Von diesem einen lassen wir  uns den Titel im Terminal ausgeben
        console.log(post.title);
    }
};
//Wir definieren unsere Abfrage, dass der Tag "deutsch" sein soll und wir 30 Posts erhalten möchten
const abfrage = {
    tag: "deutsch",
    limit: "30"
};
//Zum Schluß rufen wir die Steem.js Funktion mit unserer Abfrage und der Callback-Funktion auf.
steem.api.getDiscussionsByCreated(abfrage,callback);

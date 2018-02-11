# 02 - Posts ansehen
DEUTSCH | [ENGLISH](https://steemit.com/steemit/@lustigo/02-posts-or-steem-js-tutorial)

Die Tutorials erscheinen immer in einer deutschen und englischen Version. Den Code des kompletten Tutorials könnt ihr (unterteilt in die einzelnen Kapitel) unter [Github](https://github.com/lustigo/steem-js-tutorial-deutsch) einsehen.

Heute wollen wir die Titel der letzten 30 Posts mit dem Tag "deutsch" uns ausgeben lassen.

Heute müssen wir uns erstmal drei Konzepte näher führen:
1. Callback-Funktionen
2. Objekte
3. Schleifen


## 1. Callback - Funktionen
Wir haben Callback-Funktionen bereits benutzt, aber immer nur console.log. Heute müssen wir die Daten aufbereiten, bevor wir sie ausgeben. Dafür müssen wir uns eine eigene Callback-Funktion schreiben.
Eine Callback-Funktion erhält in der Regel zwei Argumente: Fehlermeldungen und die eigentlichen Datensätze. 
Ihr habt bei den ersten Kapiteln vielleicht gemerkt, dass zuerst immer "null" ausgegeben wurde. Dies war die Fehlermeldung und "null" bedeutet, dass keine vorliegt. Als nächstes wurde immer das eigentliche Datenobjekt ausgegeben.

## 2. Objekte
Objektorientierung ist ein grundlegendes Konzept in der Programmierung. Man versucht reale Objekte in der Programmierung mit ihren Eigenschaften und Methoden abzubilden.
Javascript liefert dafür die sogenannte "JSON" mit. JSON steht für Javascript Object Notation, also Javascript Objekt Schreibweise. 
Diese wird zunehmend auch in vielen anderen Programmiersprachen eingesetzt.
Ein JSON-Objekt habt ihr bereits in den letzten Kapiteln sehen können.
Man kann aber auch einen Schuh in JSON definieren:
````JSON
{
  "farbe": "rot",
  "groesse": 40,
  "marke": "Schuhhersteller"
}
````
Hier sieht man, dass ein Objekt durch ein `{` eingeleitet wird und mit einem `}` aufhört. In der Mitte sind dann die Eigenschaften definiert.
Die Namen der Eigenschaften werden in Anführungszeichen gesetzt, danach kommt ein Doppelpunkt (ähnlich wie das Gleichheitszeichen in der Variablenzuweisung), nun kommt der Wert, welcher zugewiesen wird und abschließend ein Komma (ähnlich wie das Semikolon bei den Variablenzuweisungen). 
Man beachte, dass nach der letzten Eigenschaft kein Komma mehr angegeben wird.

## 3. Schleifen
Man kann mit Schleifen ein Geschenk schön aussehen lassen, aber auch in der Programmierung arbeiten.
Eine Schleife verwendet man, wenn man einen Code mehrmals hintereinander ausführen möchte.

# Umsetzung
So, das wars erstmal mit dem theoretischen Teil.
Heute fangen wir wieder zuerst damit an, dass wir die Datei "posts.js" erstellen und unsere Bibliothek importieren:
````javascript
const steem = require("steem");
````
Als nächstes definieren wir unsere Callback-Funktion. Wir speichern diese auch in einer Konstante ab (die Funktion möchten wir nicht mehr überschreiben) um sie später einfacher der Steemitapi mitgeben zu können.
````javascript
const callback = function(fehler,daten){

};
````
Hiermit initiieren wir eine Funktion, welche die Parameter "fehler" und "daten" erhält. Das sind wieder nur Variablen, die ihr frei benennen könnt. Beachtet aber hierbei, dass zuerst Fehlermeldungen und danach die Daten mitgegeben werden.
Eine Funktion besitzt, ähnlich wie das JSON-Objekt, geschweifte Klammern um anzuzeigen, wann die Beschreibung der Funktion anfängt und endet.
Jetzt füllen wir unsere Funktion mit Leben:
````javascript
const callback = function(fehler,daten){
  for(let post of daten){

  }
};
````
Wir beginnen unsere sogenannte "for"-Schleife. Auch diese zeigt mit den Klammern ihren Anfang und das Ende an. 
`let post of daten` bedeutet, dass für jedes Element des "Array" (ihr kennt es vielleicht aus dem Einführungskapitel) den Rumpf der Schleife ausführen und das jeweilige Element in der Variable  `post` abspeichern.
Wir könnten die Schleife auch weglassen und 30-mal den Inhalt der Schleife (leicht abgeändert) hintereinander schreiben.
In dieser Schleife erhalten wir also Zugriff auf ein einzelnes JSON-Objekt, welches einen Steemit Post representiert.
Wir möchten nur den Titel ausgeben lassen, also rufen wir console.log auf und übergeben den Titel des Posts:
````javascript
const callback = function(fehler,daten){
  for(let post of daten){
    console.log(post.title);
  }
};
````
Super, jetzt haben wir unsere Callbackfunktion!
Als nächstes müssen wir ein JSON-Objekt definieren, welches beschreibt, welche Posts wir erhalten möchten.
````javascript
const abfrage = {
  tag: "deutsch",
  limit: "30"
};
````
Auch dieses speichern wir in einer Variable ab. Beachte hier, dass `tag` und `limit` keine Anführungszeichen besitzen dürfen, da wir direkt in Javascript arbeiten.
Nun rufen wir die Steem.Js Funktion auf und geben unsere Abfrage und Callbackfunktion mit:
````javascript
steem.api.getDiscussionsByCreated(abfrage,callback);
````
Das wars schon!
Wie immer testen wir unser Programm mit `node posts` und sollten die Titel der letzten 30 Posts mit dem Tag "deutsch" ausgegeben bekommen.

 Bis zum nächsten Mal!


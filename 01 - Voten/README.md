# 01 - Voten

DEUTSCH | [ENGLISH](https://steemit.com/steemit/@lustigo/00-voting-or-steem-js-tutorial)

Die Tutorials erscheinen immer in einer deutschen und englischen Version. Den Code des kompletten Tutorials könnt ihr (unterteilt in die einzelnen Kapitel) unter [Github](https://github.com/lustigo/steem-js-tutorial-deutsch) einsehen.

Heute wollen wir versuchen einen Beitrag zu voten.
Dafür schauen wir einmal bei unserer Bibliothek [Steem.js](https://github.com/steemit/steem-js/tree/master/doc#broadcast-api) nach und finden folgenden Codeschnipsel:

````javascript
steem.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
````
Dieser besagt, dass wir die Funktion unter `broadcast.vote` ausführen können und somit einen Beitrag voten können.
Um einen Vote durchzuführen, müssen wir aber einige Parameter mitgeben.
Als Erstes brauchen wir den WIF (Wallet Import Format - Geldbörse Import Format). Dieses findet ihr in eurer Steemit Wallet unter dem Reiter Permissions und dort bei "Posting". 
Ihr müsst allerdings erst auf den rechten Button "Show Private Key" klicken um den richtigen angezeigt zu bekommen.
Diesen bitte nie öffentlich teilen!
Wir erstellen uns nun eine neue Datei namens "voting.js" und binden zu allererst die Bibliothek ein:
````javascript
const steem = require("steem");
````
Was diese Zeile macht, wisst ihr ja bereits.
Nun definieren wir unseren WIF-Schlüssel (hier nur als "XXXXX"):
````javascript
const wif = 'XXXXX';
````
Auch hier definieren wir eine konstante Variable, welche wir "wif" nennen und ordnen dieser eine Zeichenkette (String) zu: unseren Schlüssel zum Voten.
(Für erfahrenere Programmierer: am Besten verwendet man hier Umgebungsvariablen)
Das nächste was wir benötigen ist der Voter, das bist du! 
Also hier deinen Nutzernamen eintragen:
````javascript
const voter = 'deinNutzername';
````
Author ist der Autor des Beitrages den du voten möchtest. 
Auch diesen definieren wir in einer Konstante.
````javascript
const author = 'nutzerNamedesAutors';
````
Der Permlink ist der letzte Part der URL auf Steemit.com des Beitrages, z.B. `part-1-how-to-configure-the-steempy-cli-wallet-and-upvote-an-article-with-steem-python` oder `00-einfuehrung-or-steem-js-tutorial-deutsch`.
````javascript
const permlink = 'letzerPartderAdresse';
````
Weight ist ein wenig komplizierter. Hier musst du eintragen mit wie viel Prozent du voten möchtest.
Es sind aber nur ganze Zahlen erlaubt, weshalb 1% der Zahl 100 entspricht, 100% 10000 und 0,01% 1.
Wenn man mit 100% voten möchte schreibt man also:
````javascript
const weight = 10000;
````
Damit wären wir fertig mit den benötigten Werten zum Voten. 
Das letzte ist noch die besagte Callback-Funktion. 
Mit dieser arbeiten wir aber noch nicht und benutzen deswegen wieder `console.log` um uns das Ergebnis im Terminal ausgeben zu lassen.
Und jetzt rufen wir die Funktion auf:
````javascript
steem.broadcast.vote(wif,voter,author,permlink,weight,console.log);
````
Das wars schon! 
Im Browser, wenn ihr auf den Daumen klickt, erledigt die Website genau diese Schritte für euch.
Hier ist es erstmal etwas komplizierter, aber so könnt ihr zum Beispiel einen Bot voten lassen (später irgendwann einmal).
Aber nun testen wir das Ergebnis:
Gebt im Terminal `node voting` ein und ihr solltet eine Ausgabe wie die Folgende erhalten:
![information about successfull vote](https://image.ibb.co/dUyk66/Auswahl_001.png)
Unter steemworld.org/@deinNutzername kannst du auch gleich überprüfen, ob das Voting geklappt hat.

 Bis zum nächsten Mal!


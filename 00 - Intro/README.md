# 00 - Einführung

DEUTSCH | [ENGLISH](https://steemit.com/steemit/@lustigo/00-introduction-or-steem-js-tutorial)

Dies ist das erstes Kapitel meines Steem.js Tutorials.

Hier möchte ich euch die Grundlagen beibringen mit der Steem-Blockchain über Node.js (Javascript für Server) zu interagieren. Inhaltlich möchte ich mich dafür am Steempy Tutorial (@steempytutorials) orientieren.

Die Tutorials erscheinen immer in einer deutschen und englischen Version. Den Code des kompletten Tutorials könnt ihr (unterteilt in die einzelnen Kapitel) unter [Github](https://github.com/lustigo/steem-js-tutorial-deutsch) einsehen.

Zu allererst kümmern wir uns um Node.js: 
## Was ist das überhaupt?

Node.js ist eine Javascript Laufzeitumgebung, die ohne Browser auskommt und u.a. mit dem Dateisystem interagieren kann. Es ist dabei Event-basierend, nicht-blockierend und benutzt Googles Chrome V8 Engine. (Wenn euch der letzte Satz spanisch vorkommt: ist nicht ganz so wichtig). Außerdem liefert es einen Paketmanager mit, den wir auch gleich brauchen werden.

## Was ist Javascript? 
Javascript ist eine Spezifikation für eine Programmiersprache, die fürs Web entwickelt wurde und wird. Dies bedeutet konkret, dass verschiedene Entwickler verschiedene Laufzeitumgebungen für diese Spezifikation implementieren. Javascript läuft in (fast) jedem Browser, mit Node.js auf Servern, aber auch in Apps und in Desktopanwendungen (z.B. [Atom](https://atom.io/)). Die Programmiersprache hat sich in den letzten Jahren sehr stark weiterentwickelt. Eine Bitte noch von mir: Verwechselt Javascript nicht mit der objektorientierten Programmiersprache Java.

## Was brauche ich?

Du brauchst einen Editor (der Windows/Mac Editor reicht aus, Notpad ++ oder Atom oder Microsoft Visual Studio Code oder Sublime Text sind aber auch möglich. Entscheidet euch für den Editor in dem ihr euch am Wohlsten fühlt), Node.js und die Steem-Bibliothek. Einen Internetzugang und Computer solltest du auch zur Verfügung haben.

Dies soll kein Tutorial zur Installation von Node.js für alle verschiedene Betriebssysteme werden, weshalb ich hier ein paar verlinke:

[Windows](http://nodecode.de/nodejs-installieren-windows) 
| [Mac](http://nodecode.de/nodejs-installieren-mac) | [Debian/Ubuntu/Linux Mint](https://wiki.ubuntuusers.de/Node.js/)

_Ich benutze hier einen Debian 9 (Stretch), Microsoft Visual Studio Code und Node.js Version 9.4.0. Für Entwicklungszwecke kann ich ein Linux-basierendes Betriebssystem sehr empfehlen._

## Steem Bibliothek installieren

_Im folgenden werde ich für eine Kommandozeile (Windows: Powershell, Mac/Linux: Terminal) den Begriff "Terminal" verwenden._

Öffnet nun euer Terminal und navigiert zu einem neuen Ordner für dieses Tutorial. Nun tippt dort `npm init` ein. Es werden verschiedene Eingaben abgefragt, die ihr aber getrost mit einem Enter bestätigen könnt. Wenn ihr damit fertig seid, habt ihr nun eine `package.json` - Datei erstellt, welche Metadaten über euer neues Projekt enthält.

Mit einem `npm install steem --save` ladet ihr nun die Steem Bibliothek herunter. Diese befindet sich in dem `node_modules` Ordner. Außerdem enthält die `package.json` einen Verweis zu dieser Bibliothek und die `package.lock.json` die genaue Versionsnummer. 

Falls ihr euch den Code auf Github anschaut, werdet ihr feststellen, dass ich nur den reinen Programmcode online stelle und ihr diese Initialisierung vorher vornehmen müsst. Kopiert dann einfach den Code in euren Projektordner und führt ihn dort aus.

## Steem Bibliothek testen

Nun sind wir bereit mit der Blockchain zu interagieren. Wir möchten uns nun die Daten eines Benutzers direkt von der Blockchain holen.

Dafür erstellen wir zuerst die eine neue Datei namens `benutzer.js`. Die Dateiendung `.js` zeigt, dass es sich um ein Javascriptprogramm handelt.

In dieser Datei müssen wir zuerst unsere Bibliothek importieren:

````javascript
const steem = require('steem');
````
Mit `const` zeigen wir, dass wir eine neue feste (nicht veränderbare) Variable deklarieren möchten. Eine Variable ist im Grunde nichts anderes als ein Zeiger auf einen Speicherplatz im RAM des Computers. Wir können eigentlich alles in so einer Variable abspeichern und damit später weiterarbeiten.

`steem` ist der Name dieser Variable. Wir können ihn frei wählen.

`=` zeigt an, dass wir dieser Variable einen Wert zuordnen möchten.

`require` bedeutet, dass wir eine Bibliothek laden möchten. Welche dies ist geben wir in den runden Klammern an. In unserem Fall ist das `steem`. Beachtet hier die Anführungszeichen. Diese müssen wir setzen, da dies ein fester Name ist und keine andere Variable.

Mit dem Semikolon schließen wir jede Anweisung ab.

Nun rufen wir die Informationen vom Benutzer ned ab:
 ````javascript
 steem.api.getAccounts(['ned'], console.log);
 ````
 mit `steem.api.getAccounts()` rufen wir die Funktion getAccounts der Steem Bibliothek ab. Eine Funktion kann man sich wie in der Mathematik vorstellen: Man gibt Informationen rein, diese werden verarbeitet und neue Informationen kommen raus. 

 In die Funktion f(x) = 2x gebe ich eine Information zum Beispiel die Zahl 2 rein, sie wird verarbeitet (verdoppelt) und die neue Information: die Zahl 4 kommt heraus.

 In diesem Fall geben wir die Information `['ned']` hinein. Die `[]` geben hier an, dass wir auch mehrere Benutzer definieren könnten. Man spricht von einem sogenannten "Array" oder auch "Feld". Also `['ned','lustigo']` würde auch funktionieren.

 Wir müssen in Javascript sehr oft aber auch noch angeben, was mit der neuen Information gemacht werden soll. Dies muss auch eine Funktion sein. Man spricht von "Callbacks" also "Rückrufern". Diese Funktion wird dann mit den neuen Informationen aufgerufen und kann sie wieder verarbeiten. In unserem Fall wollen wir sie einfach im Terminal ausgeben. 
 
 Da Funktionen auch in Variabeln abgespeichert werden können bedienen wir uns hier der globalen (von Node.js definierten) Funktion `console.log`, welche genau das tut was wir möchten.

Alle Zeilen mit einem `//` werden von Node übrigens überlesen (auf Github werdet ihr kurze Kommentare zu den Zeilen finden).

 Wenn ihr nun die Datei abspeichert und im Terminal `node benutzer` eingebt solltet ihr ein ähnliches Ergebnis erhalten: 

![Informationen über Nutzer Ned](https://image.ibb.co/i7yPyb/Auswahl_002.png)

 Ich danke euch fürs Lesen dieses Einführungstutorials. Es ist nicht schlimm, wenn ihr nicht alle Erklärungen verstanden habt, das wird alles später noch klarer. Ich freue mich über Rückmeldungen!

 Bis zum nächsten Mal!


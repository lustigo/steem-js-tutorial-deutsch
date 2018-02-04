//Bibliothek einbinden
const steem = require("steem");
//hier euren privaten Posting Schlüssel eintragen
const wif = 'XXXXX';
//hier euren Benutzernamen eintragen
const voter = 'deinNutzername';
//hier den Benutzernamen des Autors eintragen
const author = 'nutzerNamedesAutors';
//hier den letzten Teil des Links zum Post eintragen
const permlink = 'letzerPartderAdresse';
//hier das Gewicht eintragen
const weight = 10000;

//Nun den Vote auf die Blockchain schicken
steem.broadcast.vote(wif,voter,author,permlink,weight,console.log);
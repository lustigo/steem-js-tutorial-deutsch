// Wir laden hier die Steem-Bibliothek
const steem = require('steem');
// Wir holen uns nun Informationen über den Benutzer Ned und geben sie im Terminal aus
steem.api.getAccounts(['ned'], console.log);
const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1/TriviaChallengeDB';

mongoose.connect(URI)
.then(db => console.log('Successful database conection'))
.catch(err => console.log('Failed database conection'))
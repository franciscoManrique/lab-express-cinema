const mongoose = require('mongoose');
const DB_NAME = 'ex-cinema';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI)
.then(data => console.log(`connected to db: ${DB_NAME}`))
.catch(err=> next(err))


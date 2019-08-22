const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/producto';

mongoose.connect(URI,  {useNewUrlParser: true})
    .then(db => console.log('BD is connectd'))
    .catch(err => console.log(err))

module.exports = mongoose;
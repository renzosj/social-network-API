const connection = require('../config/connection');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to MongoDB');
    process.exit(0);
    //enter seed instructions here
});
const monggoose = require('mongoose');

async function connect(){
    try {
        await monggoose.connect('mongodb://localhost:27017/f8_education_dev', {
            //useNewUrlParser: true,
           // useUnifiedTopology: true,
           // useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = {
    connect
}
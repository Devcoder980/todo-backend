const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/user';
const mongoose = require('mongoose');

const connectDb=async()=>{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB', err));
}  

module.exports=connectDb
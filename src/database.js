import mongoose from "mongoose";

//const URI = "mongodb+srv://baneymelo:brady719@crud.wbthq.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect('mongodb://localhost/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))
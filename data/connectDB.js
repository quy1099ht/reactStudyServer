const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://quy1099ht:******@cluster0.icevc.mongodb.net/test", {
    useNewUrlParser: true
}, () => {
    console.log("connected")
});

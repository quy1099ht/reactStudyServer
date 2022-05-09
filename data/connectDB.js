const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://quy1099ht:Quypro123@cluster0.icevc.mongodb.net/test", {
    useNewUrlParser: true
}, () => {
    console.log("connected")
});

const express=require("express");
const mongoose=require("mongoose");
const helmet=require("helmet");
const user_routes=require("./routes/auth");
const item_routes=require("./routes/item");
const cart_routes=require("./routes/cart");
const order_routes=require("./routes/order");
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(res => console.log("Connected to the database"))
.catch(err => console.log(err));

const port=process.env.PORT || 5000;

app.use('/api',user_routes);
app.use('/api',item_routes);
app.use('/api',cart_routes);
app.use('/api',order_routes);

app.listen(port,()=>console.log(`Server listening on port ${port}`));
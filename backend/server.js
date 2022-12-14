const express = require("express");
// const { chats } = require("./data/data");
const dotenv = require('dotenv');
const connDB = require("./config/datb");
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
dotenv.config();
connDB();

const app = express();
// for accepting Json Data
app.use(express.json());

app.get('/', (req,res) => {
    res.send('karma karte chalo phal ki chinta mat karo BAS');
})

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes)

app.use(notFound);
app.use(errorHandler);


// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req,res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((c)=> c._id === req.params.id);
//     res.send(singleChat);
// });

const PORT = process.env.PORT;
app.listen( PORT , console.log(`Server has Started at ${PORT}`));
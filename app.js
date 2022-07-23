const express = require ("express");
const userRouter = require ("./src/user/user.route");
const app = express ();
const port = 8000;
app.use (express.json());

app.get ("/", (req,res) => {
    res.send ("hello..");
})

app.use(userRouter);

app.listen (port, () =>
    console.log(">Server running on port:" + port)
);
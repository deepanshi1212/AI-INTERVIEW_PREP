//! create an express server and check if it's working

import express from "express"
import cors from "cors";
// 1) we are importing express module which we installed using npm i
 
import userRoutes from "./routes/auth-route.js";
// 2) call/invoke the function
let app = express(); //object ={listen}
app.use(cors({
    origin: "http://localhost:5173",
})
);

app.use(express.urlencoded({ extended: true })); // this 
app.user(express.json()); // to parse json data coming from client side

app.use("/api/auth", userRoutes); // http://localhost:9000/api/auth/signup

//4) declare routes -> app.http_method('endpoint', callback)
app.get("/", (req, res) => {
    // res.send("welcome");
    // res.json({
    //     success: true,
    //     message: "okay",
    //     data: {userName: "abc"}
    // });

    res.status(500).json({
        success: false,
        message: "eror occured",
        err:{name: "some error"},
    });

});

app.get("/about", (req, res) => {
    res.status(122).json({ message: "hi"});
});

// 3) assign a port number to our server
app.listen(9000, () => {
    console.log("Server Started.....");
});
// app.listen(PORT_NUMBER, callback)

//? to check if the server is running, in cmd(git bash),
// goto backend folder and type "npx nodemon index.js"
//open browser -> localhost:PORT_NUMBER and press enter

// https://nodejs.org/en/ (/)=> this is base url
// https://nodejs.org/en/blog => /blog is one endpoint
// https://nodejs.org/en/download

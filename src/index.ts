import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to my API",
        data: "Hello World!"
    });
});
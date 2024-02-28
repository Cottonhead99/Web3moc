const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "NFThome.html"));
});

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


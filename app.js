const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello DevOps! CI/CD Pipeline is Working 🚀");
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = app;

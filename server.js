const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).json({ api: "API version 1 is working" });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

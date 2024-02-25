import express from "express";

// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
1
// Start the express server
app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});
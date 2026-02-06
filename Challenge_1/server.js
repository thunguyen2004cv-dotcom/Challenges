const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.json({ "message": "Hello from Express!" });
});
app.listen(3000, () => console.log('Server running http: 3000'));
app.use(express.json()); app.post('/echo', (req, res) => res.json(req.body));
app.use((req, res, next) => { console.log(`${req.method} ${req.url} ${new Date()}`); next(); });
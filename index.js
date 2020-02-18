const server = require('./server');
const PORT = process.env.PORT || 5000;

// Sanity Check
server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});
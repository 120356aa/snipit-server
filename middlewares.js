// 404 Handler
const notFound = (req, res, next) => {
    const err = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(err);
};

// Specified Error
const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack,
    });
};

module.exports = {
    notFound,
    errHandler
};
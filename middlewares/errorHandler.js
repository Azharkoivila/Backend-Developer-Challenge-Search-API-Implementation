
// this is a middleware that will catch any error that is thrown in the application 
// so no need to use try catch block in every route with help of express-async-errors package
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
};

module.exports = errorHandler;
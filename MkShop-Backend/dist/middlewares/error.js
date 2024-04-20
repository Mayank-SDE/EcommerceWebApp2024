export const errorMiddleware = (error, request, response, next) => {
    error.message || (error.message = 'Internal server error');
    error.statusCode || (error.statusCode = 500);
    if (error.name === 'CastError') {
        error.message = 'Invalid ID';
    }
    return response.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
};
export const TryCatch = (func) => {
    return (request, response, next) => {
        return Promise.resolve(func(request, response, next)).catch((error) => next(error));
    };
};
const a = TryCatch(async (request, response, next) => { });
console.log(a);

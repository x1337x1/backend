// Updated Status Code Naming
exports.sendOK = 200; // Request succeeded
exports.sendCreated = 201; // Resource successfully created
exports.sendAccepted = 202; // Request accepted but processing not complete
exports.sendNoContent = 204; // Request succeeded but no content to return

exports.sendBadRequest = 400; // Client-side input error
exports.sendUnauthorized = 401; // Authentication required or failed
exports.sendForbidden = 403; // Access to the resource is forbidden
exports.sendNotFound = 404; // Resource not found
exports.sendMethodNotAllowed = 405; // HTTP method not allowed
exports.sendConflict = 409; // Conflict with current state of resource (e.g., duplicate)
exports.sendUnprocessableEntity = 422; // Validation error
exports.sendTooManyRequests = 429; // Too many requests sent in a given time

exports.sendInternalServerError = 500; // Generic server error
exports.sendNotImplemented = 501; // Server does not support the requested functionality
exports.sendServiceUnavailable = 503; // Service is currently unavailable
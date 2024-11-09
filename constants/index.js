const customResponses = {
	SIGN_UP: "You’re almost there! Verifying your account will give you access to exclusive features and content.",
	VERIFICATION: "We’re thrilled to have you on board! Your account is verified, and you’re all set to start exploring!"
};

const HTTPStatusCode = {
	ok: { code: 200, message: "OK" },
	created: { code: 201, message: "Created" },
	accepted: { code: 202, message: "Accepted" },
	noContent: { code: 204, message: "No Content" },
	partialContent: { code: 206, message: "Partial Content" },
	multipleChoices: { code: 300, message: "Multiple Choices" },
	movedPermanently: { code: 301, message: "Moved Permanently" },
	found: { code: 302, message: "Found" },
	badRequest: { code: 400, message: "Bad Request" },
	unauthorized: { code: 401, message: "Unauthorized" },
	paymentRequired: { code: 402, message: "Payment Required" },
	forbidden: { code: 403, message: "Forbidden" },
	notFound: { code: 404, message: "Not Found" },
	methodNotAllowed: { code: 405, message: "Method Not Allowed" },
	requestTimeout: { code: 408, message: "Request Timeout" },
	conflict: { code: 409, message: "Conflict" },
	gone: { code: 410, message: "Gone" },
	unprocessableEntity: { code: 422, message: "Unprocessable Entity" },
	tooManyRequests: { code: 429, message: "Too Many Requests" },
	internalServerError: { code: 500, message: "Internal Server Error" },
	notImplemented: { code: 501, message: "Not Implemented" },
	badGateway: { code: 502, message: "Bad Gateway" },
	serviceUnavailable: { code: 503, message: "Service Unavailable" },
	gatewayTimeout: { code: 504, message: "Gateway Timeout" },
};


module.exports = {customResponses, HTTPStatusCode};
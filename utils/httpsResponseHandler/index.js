const message = require('./messages');

const responseHandler = (req, res, next) => {
	res.sendOK = (data = {}) => {
		message.successResponse(data, res);
	};
	res.sendCreated = (data = {}) => {
		message.created(data, res);
	};
	res.sendBadRequest = (data = {}) => {
		message.badRequest(data, res);
	};
	res.sendFailure = (data = {}) => {
		message.failureResponse(data, res);
	};
	res.sendForbidden = (data = {}) => {
		message.forbiddenResponse(data, res);
	};
	res.sendInvalidParam = (data = {}) => {
		message.inValidParam(data, res);
	};
	res.sendInsufficientParameters = (data = {}) => {
		message.insufficientParameters(data, res);
	};
	res.sendInvalidRequest = (data = {}) => {
		message.invalidRequest(data, res);
	};
	res.sendRequestValidated = (data = {}) => {
		message.requestValidated(data, res);
	};
	res.sendDuplicate = (data = {}) => {
		message.isDuplicate(data, res);
	};
	res.sendLoginSuccess = (data = {}) => {
		message.loginSuccess(data, res);
	};
	res.sendLoginFailed = (data = {}) => {
		message.loginFailed(data, res);
	};
	res.sendUnauthorized = (data = {}) => {
		message.unAuthorizedRequest(data, res);
	};
	res.sendValidationError = (data = {}) => {
		message.validationError(data, res);
	};
	res.sendNotFound = (data = {}) => {
		message.recordNotFound(data, res);
	};
	next();
};

module.exports = responseHandler;

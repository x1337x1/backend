const responseCode = require('./responseCode');

module.exports = {
	successResponse: (data, res) => res.status(responseCode.sendOK).json({
		status: 'SUCCESS',
		message: data.message || 'Your request is successfully executed',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),
	created: (data, res) => res.status(responseCode.sendCreated).json({
		status: 'CREATED',
		message: data.message || 'Data created successfully',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	failureResponse: (data, res) => res.status(responseCode.sendInternalServerError).json({
		status: 'FAILURE',
		message: data.message || 'Internal server error.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	forbiddenResponse: (data, res) => res.status(responseCode.sendForbidden).json({
		status: 'FORBIDDEN',
		message: data.message || 'You do not have permission to access this resource.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),
  
	badRequest: (data, res) => res.status(responseCode.sendBadRequest).json({
		status: 'BAD_REQUEST',
		message: data.message || 'The request cannot be fulfilled due to bad syntax.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	validationError: (data, res) => res.status(responseCode.sendValidationError).json({
		status: 'VALIDATION_ERROR',
		message: data.message || 'Invalid data, Validation failed.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	isDuplicate: (data, res) => res.status(responseCode.sendDuplicate).json({
		status: 'VALIDATION_ERROR',
		message: data.message || 'Duplicate detected! Ensure the information is distinct before proceeding.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	recordNotFound: (data, res) => res.status(responseCode.sendNotFound).json({
		status: 'RECORD_NOT_FOUND',
		message: data.message || 'Record not found.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	insufficientParameters: (data, res) => res.status(responseCode.sendBadRequest).json({
		status: 'BAD_REQUEST',
		message: data.message || 'Insufficient parameters.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	inValidParam: (data, res) => res.status(responseCode.sendValidationError).json({
		status: 'VALIDATION_ERROR',
		message: data.message || 'Invalid values in parameters',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	unAuthorizedRequest: (data, res) => res.status(responseCode.sendUnauthorized).json({
		status: 'UNAUTHORIZED',
		message: data.message || 'You are not authorized to access the request.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	loginSuccess: (data, res) => res.status(responseCode.sendOK).json({
		status: 'SUCCESS',
		message: data.message || 'Login successful.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	loginFailed: (data, res) => res.status(responseCode.sendBadRequest).json({
		status: 'BAD_REQUEST',
		message: data.message || 'Login failed.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	requestValidated: (data, res) => res.status(responseCode.sendOK).json({
		status: 'SUCCESS',
		message: data.message || 'Your request is successfully executed.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),

	invalidRequest: (data, res) => res.status(responseCode.sendBadRequest).json({
		status: 'FAILURE',
		message: data.message || 'Invalid data, Validation failed.',
		data: data.data && Object.keys(data.data).length ? data.data : null,
	}),
};

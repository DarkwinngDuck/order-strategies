const BaseError = require('../BaseError');

class TirReturnError extends BaseError {
  constructor({ errors }) {
    super({
      message: 'TIR_RETURN_JOBS_FAILED',
      errors,
    });
  }
}

module.exports = TirReturnError;

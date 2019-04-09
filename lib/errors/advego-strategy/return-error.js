const BaseError = require('../BaseError');

class AdvegoReturnError extends BaseError {
  constructor({ errors }) {
    super({
      message: 'ADVEGO_RETURN_JOBS_FAILED',
      errors,
    });
  }
}

module.exports = AdvegoReturnError;

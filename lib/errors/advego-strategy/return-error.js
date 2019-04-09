const BaseError = require('../BaseError');

class AdvegoReturnError extends BaseError {
  constructor({ error }) {
    super({
      message: 'ADVEGO_RETURN_JOBS_FAILED',
      error,
    });
  }
}

module.exports = AdvegoReturnError;

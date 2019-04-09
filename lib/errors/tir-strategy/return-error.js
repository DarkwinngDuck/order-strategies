const BaseError = require('../BaseError');

class TirReturnError extends BaseError {
  constructor({ error }) {
    super({
      message: 'TIR_RETURN_JOBS_FAILED',
      error,
    });
  }
}

module.exports = TirReturnError;

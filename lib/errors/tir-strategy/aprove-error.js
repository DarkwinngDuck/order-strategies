const BaseError = require('../BaseError');

class TirAproveError extends BaseError {
  constructor({ errors }) {
    super({
      message: 'TIR_APROVE_JOB_FAILED',
      errors,
    });
  }
}

module.exports = TirAproveError;

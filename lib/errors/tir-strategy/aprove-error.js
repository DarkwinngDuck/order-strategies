const BaseError = require('../BaseError');

class TirAproveError extends BaseError {
  constructor({ error }) {
    super({
      message: 'TIR_APROVE_JOB_FAILED',
      error,
    });
  }
}

module.exports = TirAproveError;

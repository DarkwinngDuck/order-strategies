const BaseError = require('../BaseError');

class TirSyncError extends BaseError {
  constructor({ errors }) {
    super({
      message: 'TIR_SYNC_JOB_FAILED',
      errors,
    });
  }
}

module.exports = TirSyncError;

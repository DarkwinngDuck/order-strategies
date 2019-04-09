const BaseError = require('../BaseError');

class TirSyncError extends BaseError {
  constructor({ error }) {
    super({
      message: 'TIR_SYNC_JOB_FAILED',
      error,
    });
  }
}

module.exports = TirSyncError;

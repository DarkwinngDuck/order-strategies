const BaseError = require('../BaseError');

class AdvegoSyncError extends BaseError {
  constructor({ error }) {
    super({
      message: 'ADVEGO_SYNC_JOB_FAILED',
      error,
    });
  }
}

module.exports = AdvegoSyncError;

const BaseError = require('../BaseError');

class AdvegoSyncError extends BaseError {
  constructor({ errors }) {
    super({
      message: 'ADVEGO_SYNC_JOB_FAILED',
      errors,
    });
  }
}

module.exports = AdvegoSyncError;

const { TirStrategyErrors } = require('../errors');

const { TirReturnError, TirSyncError, TirAproveError } = TirStrategyErrors;

class TirJobsStrategy {
  constructor({ client }) {
    this.client = client;
  }

  async sync() {
    try {
      const jobs = await this.client.getJobs();
      return jobs;
    } catch (err) {
      throw new TirSyncError(err);
    }
  }

  async return({ jobId, manager, message }) {
    try {
      const succes = await this.client.returnJob({ jobId, manager, message });
      return succes;
    } catch (err) {
      throw new TirReturnError(err);
    }
  }

  async approve({ jobId, manager }) {
    try {
      const success = await this.client.approveJob({ jobId, manager });
      return success;
    } catch (err) {
      throw new TirAproveError(err);
    }
  }
}

module.exports = TirJobsStrategy;

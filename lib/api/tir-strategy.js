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
    } catch (error) {
      throw new TirSyncError({ error });
    }
  }

  async return({ jobId, manager, message }) {
    try {
      const succes = await this.client.returnJob({ jobId, manager, message });
      return succes;
    } catch (error) {
      throw new TirReturnError({ error });
    }
  }

  async aprove({ jobId, manager }) {
    try {
      const success = await this.client.aproveJob({ jobId, manager });
      return success;
    } catch (error) {
      throw new TirAproveError({ error });
    }
  }
}

module.exports = TirJobsStrategy;

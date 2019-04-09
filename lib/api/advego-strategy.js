const { AdvegoStrategyErrors } = require('../errors');

const { AdvegoReturnError, AdvegoSyncError } = AdvegoStrategyErrors;

class AdvegoJobsStrategy {
  constructor({ client }) {
    this.client = client;
  }

  async sync() {
    try {
      const jobs = await this.client.getJobs();
      return jobs;
    } catch (err) {
      throw new AdvegoSyncError(err);
    }
  }

  async return({ jobId, manager, message }) {
    try {
      const succes = await this.client.returnJob({ jobId, manager, message });
      return succes;
    } catch (err) {
      throw new AdvegoReturnError(err);
    }
  }
}

module.exports = AdvegoJobsStrategy;

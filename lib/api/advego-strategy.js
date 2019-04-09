const { AdvegoStrategyErrors } = require('../errors');

const { AdvegoReturnError, AdvegoSyncError } = AdvegoStrategyErrors;

class AdvegoJobsStrategy {
  constructor({ client }) {
    this.client = client;
  }

  async sync({ idOrder }) {
    try {
      const jobs = await this.client.callMethod({
        method: 'getJobsAll',
        options: {
          id_order: idOrder,
          date_type: 'complete',
        },
      });
      return jobs;
    } catch (error) {
      throw new AdvegoSyncError({ error });
    }
  }

  async return({ jobId, message }) {
    try {
      const succes = await this.client.callMethod({
        method: 'returnJob',
        options: {
          ID: jobId,
          comment: message,
        },
      });
      return succes;
    } catch (error) {
      throw new AdvegoReturnError({ error });
    }
  }
}

module.exports = AdvegoJobsStrategy;

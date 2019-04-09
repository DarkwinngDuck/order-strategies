const pointer = require('json-pointer');

class BaseError extends Error {
  constructor({ message = '', error = {} }) {
    super();
    this.stack = null;
    this.message = message;
    this.error = pointer.dict(error);
  }

  toString() {
    return this.message;
  }

  toJSON() {
    return {
      message: this.message,
      error: this.error,
    };
  }
}

module.exports = BaseError;

const pointer = require('json-pointer');

class BaseError extends Error {
  constructor({ message = '', errors = {} }) {
    super();
    this.stack = null;
    this.message = message;
    this.errors = pointer.dict(errors);
  }

  toString() {
    return this.message;
  }

  toJSON() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }
}

module.exports = BaseError;

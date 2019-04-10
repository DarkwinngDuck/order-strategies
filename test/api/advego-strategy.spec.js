const { AdvegoStrategy } = require('../../lib/api');

describe('[API] AdvegoStrategy', () => {
  const client = {
    callMethod() {},
  };
  let advegoStrategy;

  beforeEach(() => {
    advegoStrategy = new AdvegoStrategy({ client });
  });

  test('it should create an instance of AdvegoStrategy', () => {
    expect(advegoStrategy).toBeInstanceOf(AdvegoStrategy);
  });

  test('it should call clients callMethod method with expected params', () => {
    const params = {
      method: 'getJobsAll',
      options: {
        id_order: 1,
        date_type: 'complete',
      },
    };
    const spy = spyOn(client, 'callMethod');
    advegoStrategy.sync({ idOrder: 1 });
    expect(spy).toHaveBeenCalledWith(params);
  });

  test('it should call clients callMethod method with expected params', () => {
    const params = {
      method: 'getJobsAll',
      options: {
        id_order: 1,
        date_type: 'complete',
      },
    };
    const spy = spyOn(client, 'callMethod');
    advegoStrategy.sync({ idOrder: 1 });
    expect(spy).toHaveBeenCalledWith(params);
  });

  test('it should call clients returnJob method with expected params', () => {
    const params = {
      method: 'returnJob',
      options: {
        ID: 1,
        comment: '',
      },
    };
    const spy = spyOn(client, 'callMethod');
    advegoStrategy.return({
      jobId: 1,
      message: '',
    });
    expect(spy).toHaveBeenCalledWith(params);
  });
});

const { TirStrategy } = require('../../lib/api');

describe('[API] TirStrategy', () => {
  const client = {
    getJobs() {},
    returnJob() {},
    aproveJob() {},
  };
  let tirStrategy;

  beforeEach(() => {
    tirStrategy = new TirStrategy({ client });
  });

  test('it should create an instance of TirStrategy', () => {
    expect(tirStrategy).toBeInstanceOf(TirStrategy);
  });

  test('it should call clients getJobs method', () => {
    const spy = spyOn(client, 'getJobs');
    tirStrategy.sync();
    expect(spy).toHaveBeenCalled();
  });

  test('it should call clients returnJob method with expected params', () => {
    const params = {
      jobId: 1,
      manager: '',
      message: '',
    };
    const spy = spyOn(client, 'returnJob');
    tirStrategy.return(params);
    expect(spy).toHaveBeenCalledWith(params);
  });

  test('it should call clients aproveJob method with expected params', () => {
    const params = {
      jobId: 1,
      manager: '',
    };
    const spy = spyOn(client, 'aproveJob');
    tirStrategy.aprove(params);
    expect(spy).toHaveBeenCalledWith(params);
  });
});

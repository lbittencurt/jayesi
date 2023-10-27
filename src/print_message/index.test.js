import {
  describe,
  it,
  expect,
  sinon
} from './../utils/testConfig.js';

import printMessage from './index.js';

const sandbox = sinon.createSandbox();

describe('Print Message Function', () => {
  let consoleLogStub;
  
  beforeEach(function () {
    consoleLogStub = sandbox.stub(console, 'log');
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should print custom message "Hey Jayesi"', () => {
    const message = "Hey Jayesi";
    printMessage(message);

    expect(consoleLogStub).to.have.been.calledWith(message);
  })

  it('should print "Hello, World!" when function is called without parameter', () => {
    printMessage();

    expect(consoleLogStub).to.have.been.calledWith('Hello again.');
  })
})
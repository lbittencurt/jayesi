import mocha from 'mocha';
const { describe, it } = mocha;

import chai from 'chai';
import sinonChai from 'sinon-chai';
const { expect } = chai;
chai.use(sinonChai);

import sinon from 'sinon';

import main from './index.js';

describe('Hello World Function', () => {
  it('should print "Hello, World!"', () => {
    const consoleLogStub = sinon.stub(console, 'log');
    main();

    expect(consoleLogStub).to.have.been.calledWith('Hello, World!');
  })
})
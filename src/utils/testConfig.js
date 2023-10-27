import mocha from 'mocha';
const { describe, it } = mocha;

import chai from 'chai';
import sinonChai from 'sinon-chai';
const { expect } = chai;
chai.use(sinonChai);

import sinon from 'sinon';

export {
  describe,
  it,
  expect,
  sinon
}
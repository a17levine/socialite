'use strict';

describe('Service: feedServices', function () {

  // load the service's module
  beforeEach(module('socialiteApp'));

  // instantiate service
  var feedServices;
  beforeEach(inject(function (_feedServices_) {
    feedServices = _feedServices_;
  }));

  it('should do something', function () {
    expect(!!feedServices).toBe(true);
  });

});

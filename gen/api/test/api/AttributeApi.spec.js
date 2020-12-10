/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.AttributeApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AttributeApi', function() {
    describe('deleteAttributesByInum', function() {
      it('should call deleteAttributesByInum successfully', function(done) {
        //uncomment below and update the code to test deleteAttributesByInum
        //instance.deleteAttributesByInum(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttributes', function() {
      it('should call getAttributes successfully', function(done) {
        //uncomment below and update the code to test getAttributes
        //instance.getAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttributesByInum', function() {
      it('should call getAttributesByInum successfully', function(done) {
        //uncomment below and update the code to test getAttributesByInum
        //instance.getAttributesByInum(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAttributesByInum', function() {
      it('should call patchAttributesByInum successfully', function(done) {
        //uncomment below and update the code to test patchAttributesByInum
        //instance.patchAttributesByInum(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAttributes', function() {
      it('should call postAttributes successfully', function(done) {
        //uncomment below and update the code to test postAttributes
        //instance.postAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putAttributes', function() {
      it('should call putAttributes successfully', function(done) {
        //uncomment below and update the code to test putAttributes
        //instance.putAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
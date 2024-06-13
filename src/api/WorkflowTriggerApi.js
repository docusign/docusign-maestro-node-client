/**
 * Maestro API
 * Maestro authors and executes experiences that allow non-coders the ability to define Simple Business Process without having to write code and to deploy them seamlessly without having to have development expertise
 *
 * OpenAPI spec version: 1.0.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorResponse', 'model/TriggerPayload', 'model/TriggerWorkflowViaPostResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorResponse'), require('../model/TriggerPayload'), require('../model/TriggerWorkflowViaPostResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowTriggerApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorResponse, root.Docusign.TriggerPayload, root.Docusign.TriggerWorkflowViaPostResponse);
  }
}(this, function(Configuration, ApiClient, ErrorResponse, TriggerPayload, TriggerWorkflowViaPostResponse) {
  'use strict';

  /**
   * WorkflowTrigger service.
   * @module api/WorkflowTriggerApi
   */

  /**
   * Constructs a new WorkflowTriggerApi. 
   * @alias module:api/WorkflowTriggerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the triggerWorkflow operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowTriggerApi~triggerWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TriggerWorkflowViaPostResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new workflow instance after authenticating with DS Account Server
     * Creates a new workflow instance after authenticating with DS Account Server
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:model/TriggerPayload} body JSON payload that will be passed to the triggered workflow
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.mtid Managed Token Id registered with DS Account Server
     * @param {String} optsOrCallback.mtsec Managed Token Secret registered with DS Account Server
     * @param {module:api/WorkflowTriggerApi~triggerWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TriggerWorkflowViaPostResponse}
     */
    this.triggerWorkflow = function(body, accountId, workflowDefinitionId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling triggerWorkflow");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling triggerWorkflow");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling triggerWorkflow");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workflowDefinitionId': workflowDefinitionId
      };
      var queryParams = {
        'mtid': optsOrCallback['mtid'],
        'mtsec': optsOrCallback['mtsec']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TriggerWorkflowViaPostResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/workflow_definitions/{workflowDefinitionId}/trigger', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
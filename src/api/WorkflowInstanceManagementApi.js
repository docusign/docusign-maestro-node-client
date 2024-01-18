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
	define(['Configuration', 'ApiClient', 'model/CancelResponse', 'model/ErrorResponse', 'model/WorkflowInstance', 'model/WorkflowInstancesList', 'model/WorkflowStepHistoryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CancelResponse'), require('../model/ErrorResponse'), require('../model/WorkflowInstance'), require('../model/WorkflowInstancesList'), require('../model/WorkflowStepHistoryList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowInstanceManagementApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CancelResponse, root.Docusign.ErrorResponse, root.Docusign.WorkflowInstance, root.Docusign.WorkflowInstancesList, root.Docusign.WorkflowStepHistoryList);
  }
}(this, function(Configuration, ApiClient, CancelResponse, ErrorResponse, WorkflowInstance, WorkflowInstancesList, WorkflowStepHistoryList) {
  'use strict';

  /**
   * WorkflowInstanceManagement service.
   * @module api/WorkflowInstanceManagementApi
   */

  /**
   * Constructs a new WorkflowInstanceManagementApi. 
   * @alias module:api/WorkflowInstanceManagementApi
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
     * (Optional) Callback function to receive the result of the cancelWorkflowInstance operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowInstanceManagementApi~cancelWorkflowInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Cancels a running workflow instance.
     * Cancels a running workflow instance.
     * @param {String} accountId Account ID
     * @param {String} instanceId DS Workflow Instance Id (dacId)
     * @param {module:api/WorkflowInstanceManagementApi~cancelWorkflowInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelResponse}
     */
    this.cancelWorkflowInstance = function(accountId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling cancelWorkflowInstance");
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling cancelWorkflowInstance");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CancelResponse;

      return this.apiClient.callApi(
        '/management/accounts/{accountId}/instances/{instanceId}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowHistory operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowInstanceManagementApi~getWorkflowHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowStepHistoryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get List of Step Histories
     * Returns a list of step history for a workflow instance
     * @param {String} accountId Account ID
     * @param {String} instanceId DS Workflow Instance Id (dacId)
     * @param {module:api/WorkflowInstanceManagementApi~getWorkflowHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowStepHistoryList}
     */
    this.getWorkflowHistory = function(accountId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowHistory");
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling getWorkflowHistory");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowStepHistoryList;

      return this.apiClient.callApi(
        '/management/accounts/{accountId}/instances/{instanceId}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowInstance operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowInstanceManagementApi~getWorkflowInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowInstance} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Workflow Instance Details
     * Returns the details for a specific instance for a deployed workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {String} instanceId DS Workflow Instance Id (dacId)
     * @param {module:api/WorkflowInstanceManagementApi~getWorkflowInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowInstance}
     */
    this.getWorkflowInstance = function(accountId, workflowDefinitionId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowInstance");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling getWorkflowInstance");
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling getWorkflowInstance");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'workflowDefinitionId': workflowDefinitionId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowInstance;

      return this.apiClient.callApi(
        '/management/accounts/{accountId}/workflowDefinitions/{workflowDefinitionId}/instances/{instanceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowInstances operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowInstanceManagementApi~getWorkflowInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowInstancesList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get List of Workflow Instances
     * Returns the list of instances for a deployed workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:api/WorkflowInstanceManagementApi~getWorkflowInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowInstancesList}
     */
    this.getWorkflowInstances = function(accountId, workflowDefinitionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowInstances");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling getWorkflowInstances");
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
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowInstancesList;

      return this.apiClient.callApi(
        '/management/accounts/{accountId}/workflowDefinitions/{workflowDefinitionId}/instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
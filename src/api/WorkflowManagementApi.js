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
	define(['Configuration', 'ApiClient', 'model/CreateOrUpdateWorkflowDefinitionRequestBody', 'model/DeployRequest', 'model/DeployResponse', 'model/ErrorResponse', 'model/GetConfigurationInstancesResponse', 'model/InvalidWorkflowResponse', 'model/NewOrUpdatedWorkflowDefinitionResponse', 'model/WorkflowDefinitionList', 'model/WorkflowDefinitionWithId', 'model/WorkflowDeleteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CreateOrUpdateWorkflowDefinitionRequestBody'), require('../model/DeployRequest'), require('../model/DeployResponse'), require('../model/ErrorResponse'), require('../model/GetConfigurationInstancesResponse'), require('../model/InvalidWorkflowResponse'), require('../model/NewOrUpdatedWorkflowDefinitionResponse'), require('../model/WorkflowDefinitionList'), require('../model/WorkflowDefinitionWithId'), require('../model/WorkflowDeleteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowManagementApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CreateOrUpdateWorkflowDefinitionRequestBody, root.Docusign.DeployRequest, root.Docusign.DeployResponse, root.Docusign.ErrorResponse, root.Docusign.GetConfigurationInstancesResponse, root.Docusign.InvalidWorkflowResponse, root.Docusign.NewOrUpdatedWorkflowDefinitionResponse, root.Docusign.WorkflowDefinitionList, root.Docusign.WorkflowDefinitionWithId, root.Docusign.WorkflowDeleteResponse);
  }
}(this, function(Configuration, ApiClient, CreateOrUpdateWorkflowDefinitionRequestBody, DeployRequest, DeployResponse, ErrorResponse, GetConfigurationInstancesResponse, InvalidWorkflowResponse, NewOrUpdatedWorkflowDefinitionResponse, WorkflowDefinitionList, WorkflowDefinitionWithId, WorkflowDeleteResponse) {
  'use strict';

  /**
   * WorkflowManagement service.
   * @module api/WorkflowManagementApi
   */

  /**
   * Constructs a new WorkflowManagementApi. 
   * @alias module:api/WorkflowManagementApi
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
     * (Optional) Callback function to receive the result of the createWorkflowDefinition operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~createWorkflowDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewOrUpdatedWorkflowDefinitionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a new workflow definition.
     * Creates a new workflow definition.
     * @param {String} accountId Account ID
     * @param {module:model/CreateOrUpdateWorkflowDefinitionRequestBody} body Request Body to create a new workflow definition.
     * @param {module:api/WorkflowManagementApi~createWorkflowDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewOrUpdatedWorkflowDefinitionResponse}
     */
    this.createWorkflowDefinition = function(body, accountId, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createWorkflowDefinition");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createWorkflowDefinition");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NewOrUpdatedWorkflowDefinitionResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteWorkflowDefinition operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~deleteWorkflowDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowDeleteResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Deletes a workflow definition.
     * Deletes a workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:api/WorkflowManagementApi~deleteWorkflowDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowDeleteResponse}
     */
    this.deleteWorkflowDefinition = function(accountId, workflowDefinitionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteWorkflowDefinition");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling deleteWorkflowDefinition");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowDeleteResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions/{workflowDefinitionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowDefinition operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~getWorkflowDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowDefinitionWithId} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Workflow Definition
     * Returns a workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.lastDeployedId deployed workflow definition metadata object id
     * @param {module:api/WorkflowManagementApi~getWorkflowDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowDefinitionWithId}
     */
    this.getWorkflowDefinition = function(accountId, workflowDefinitionId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowDefinition");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling getWorkflowDefinition");
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
        'lastDeployedId': optsOrCallback['lastDeployedId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowDefinitionWithId;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions/{workflowDefinitionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowDefinitionConfigInstances operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~getWorkflowDefinitionConfigInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetConfigurationInstancesResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets configuration instances
     * Returns a list of configuration instances for a workflow definition
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:api/WorkflowManagementApi~getWorkflowDefinitionConfigInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetConfigurationInstancesResponse}
     */
    this.getWorkflowDefinitionConfigInstances = function(accountId, workflowDefinitionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowDefinitionConfigInstances");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling getWorkflowDefinitionConfigInstances");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetConfigurationInstancesResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions/{workflowDefinitionId}/config_instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getWorkflowDefinitions operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~getWorkflowDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowDefinitionList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Workflow Definitions metadata
     * Returns a list of workflow definitions' metadata.
     * @param {String} accountId Account ID
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/String} optsOrCallback.status workflow definition metadata status
     * @param {module:api/WorkflowManagementApi~getWorkflowDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowDefinitionList}
     */
    this.getWorkflowDefinitions = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getWorkflowDefinitions");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'status': optsOrCallback['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowDefinitionList;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the publishOrUnPublishWorkflowDefinition operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~publishOrUnPublishWorkflowDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Publishes or unpublishes a workflow definition.
     * Publishes or unpublishes a workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:model/DeployRequest} body Request Body to publish or unpublish a workflow definition.
     * @param {module:api/WorkflowManagementApi~publishOrUnPublishWorkflowDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployResponse}
     */
    this.publishOrUnPublishWorkflowDefinition = function(body, accountId, workflowDefinitionId, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling publishOrUnPublishWorkflowDefinition");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling publishOrUnPublishWorkflowDefinition");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling publishOrUnPublishWorkflowDefinition");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeployResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions/{workflowDefinitionId}/publish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the updateWorkflowDefinition operation. If none specified a Promise will be returned.
     * @callback module:api/WorkflowManagementApi~updateWorkflowDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewOrUpdatedWorkflowDefinitionResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Updates a workflow definition.
     * Updates a workflow definition.
     * @param {String} accountId Account ID
     * @param {String} workflowDefinitionId Workflow Definition ID
     * @param {module:model/CreateOrUpdateWorkflowDefinitionRequestBody} body Request Body to update a workflow definition.
     * @param {module:api/WorkflowManagementApi~updateWorkflowDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewOrUpdatedWorkflowDefinitionResponse}
     */
    this.updateWorkflowDefinition = function(body, accountId, workflowDefinitionId, callback) {
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateWorkflowDefinition");
      }

      // verify the required parameter 'workflowDefinitionId' is set
      if (workflowDefinitionId === undefined || workflowDefinitionId === null) {
        throw new Error("Missing the required parameter 'workflowDefinitionId' when calling updateWorkflowDefinition");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkflowDefinition");
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

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NewOrUpdatedWorkflowDefinitionResponse;

      return this.apiClient.callApi(
        '/v1/accounts/{accountId}/management/workflow_definitions/{workflowDefinitionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
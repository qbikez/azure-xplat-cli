// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3600AFB6C9EF6\",\"creationTime\":\"2016-04-09T00:07:47.3511158Z\",\"lastModified\":\"2016-04-09T00:07:47.3511158Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:07:47.3511158Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:07:47 GMT',
  etag: '0x8D3600AFB6C9EF6',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d337d92-9355-467c-a203-4e283d704c4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0de0e4ac-a690-45aa-b932-56073a15ebd9',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3600AFB6C9EF6\",\"creationTime\":\"2016-04-09T00:07:47.3511158Z\",\"lastModified\":\"2016-04-09T00:07:47.3511158Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:07:47.3511158Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:07:47 GMT',
  etag: '0x8D3600AFB6C9EF6',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d337d92-9355-467c-a203-4e283d704c4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0de0e4ac-a690-45aa-b932-56073a15ebd9',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 09 Apr 2016 00:07:48 GMT',
  etag: '0x8D3600AFC335A38',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1304fe0f-edb8-4be0-bce3-65b72a204f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '743017f1-785f-4e21-8dc3-98b3afba82c4',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Sat, 09 Apr 2016 00:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 09 Apr 2016 00:07:48 GMT',
  etag: '0x8D3600AFC335A38',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1304fe0f-edb8-4be0-bce3-65b72a204f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '743017f1-785f-4e21-8dc3-98b3afba82c4',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Sat, 09 Apr 2016 00:07:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3600AFC335A38\",\"creationTime\":\"2016-04-09T00:07:47.3511158Z\",\"lastModified\":\"2016-04-09T00:07:48.6535224Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:07:47.3511158Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:07:48 GMT',
  etag: '0x8D3600AFC335A38',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3deaf239-4220-4742-8b47-bff2f2954f84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '55c24841-17c4-44c9-8ecb-edf25b973d67',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:07:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3600AFC335A38\",\"creationTime\":\"2016-04-09T00:07:47.3511158Z\",\"lastModified\":\"2016-04-09T00:07:48.6535224Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-09T00:07:47.3511158Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:07:48 GMT',
  etag: '0x8D3600AFC335A38',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3deaf239-4220-4742-8b47-bff2f2954f84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '55c24841-17c4-44c9-8ecb-edf25b973d67',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:07:49 GMT',
  connection: 'close' });
 return result; }]];
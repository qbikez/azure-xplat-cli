// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup9528?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup9528' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'x-ms-correlation-request-id': '05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043430Z:05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:34:29 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup9528?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup9528' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'x-ms-correlation-request-id': '05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043430Z:05456230-7b9c-4d74-ba00-690e2dbd1bb4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:34:29 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup9528?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528\",\"name\":\"armclibatchgroup9528\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'x-ms-correlation-request-id': 'da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043432Z:da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup9528?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528\",\"name\":\"armclibatchgroup9528\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'x-ms-correlation-request-id': 'da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043432Z:da1d2b5f-7106-4c3d-aaca-30d61d20d246',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:34:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511/operationResults/d2e238a8-583f-466f-8647-1a25adce5d23?api-version=2015-12-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'request-id': 'd2e238a8-583f-466f-8647-1a25adce5d23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3035a92f-7e03-4f61-9618-398c85613b71',
  'x-ms-correlation-request-id': '3035a92f-7e03-4f61-9618-398c85613b71',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043437Z:3035a92f-7e03-4f61-9618-398c85613b71',
  date: 'Thu, 24 Mar 2016 04:34:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511/operationResults/d2e238a8-583f-466f-8647-1a25adce5d23?api-version=2015-12-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'request-id': 'd2e238a8-583f-466f-8647-1a25adce5d23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3035a92f-7e03-4f61-9618-398c85613b71',
  'x-ms-correlation-request-id': '3035a92f-7e03-4f61-9618-398c85613b71',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043437Z:3035a92f-7e03-4f61-9618-398c85613b71',
  date: 'Thu, 24 Mar 2016 04:34:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511/operationResults/d2e238a8-583f-466f-8647-1a25adce5d23?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '406',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 24 Mar 2016 04:35:09 GMT',
  etag: '0x8D3539DAECBF4B8',
  'request-id': '89b6125f-ae63-431e-9449-983566354347',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '358c1e0e-3f6d-4e4c-866d-2661f1602593',
  'x-ms-correlation-request-id': '358c1e0e-3f6d-4e4c-866d-2661f1602593',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043508Z:358c1e0e-3f6d-4e4c-866d-2661f1602593',
  date: 'Thu, 24 Mar 2016 04:35:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511/operationResults/d2e238a8-583f-466f-8647-1a25adce5d23?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '406',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 24 Mar 2016 04:35:09 GMT',
  etag: '0x8D3539DAECBF4B8',
  'request-id': '89b6125f-ae63-431e-9449-983566354347',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '358c1e0e-3f6d-4e4c-866d-2661f1602593',
  'x-ms-correlation-request-id': '358c1e0e-3f6d-4e4c-866d-2661f1602593',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043508Z:358c1e0e-3f6d-4e4c-866d-2661f1602593',
  date: 'Thu, 24 Mar 2016 04:35:08 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatch9511','armclibatchgroup9528'];};
// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4be8920b-2978-43d7-ab14-04d8549c1d05',
    name: 'OSTC Shanghai Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1620',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '2232b196-cc76-4f74-9fb1-c30d4140b949',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e6642eed-259e-46aa-96be-9d045ead4c76',
  'x-ms-routing-request-id': 'WESTUS:20160321T075713Z:e6642eed-259e-46aa-96be-9d045ead4c76',
  date: 'Mon, 21 Mar 2016 07:57:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1620',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '2232b196-cc76-4f74-9fb1-c30d4140b949',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e6642eed-259e-46aa-96be-9d045ead4c76',
  'x-ms-routing-request-id': 'WESTUS:20160321T075713Z:e6642eed-259e-46aa-96be-9d045ead4c76',
  date: 'Mon, 21 Mar 2016 07:57:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160321-075701676\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/xplatvmExt-20160321-075701676.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1983',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '2061aef5-e484-4bc7-8c38-5410ca6c7f96',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0a679839-569c-47fb-b002-8b2926997aca',
  'x-ms-routing-request-id': 'WESTUS:20160321T075714Z:0a679839-569c-47fb-b002-8b2926997aca',
  date: 'Mon, 21 Mar 2016 07:57:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160321-075701676\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/xplatvmExt-20160321-075701676.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1983',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '2061aef5-e484-4bc7-8c38-5410ca6c7f96',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '0a679839-569c-47fb-b002-8b2926997aca',
  'x-ms-routing-request-id': 'WESTUS:20160321T075714Z:0a679839-569c-47fb-b002-8b2926997aca',
  date: 'Mon, 21 Mar 2016 07:57:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"2061aef5-e484-4bc7-8c38-5410ca6c7f96\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-21T07:57:13.471387+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '140',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '9edd9907-5577-43d0-ba49-62e5c0fcd371',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '9e5dc503-e211-4990-ac6c-3f7b29dd6fd8',
  'x-ms-routing-request-id': 'WESTUS:20160321T075745Z:9e5dc503-e211-4990-ac6c-3f7b29dd6fd8',
  date: 'Mon, 21 Mar 2016 07:57:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"2061aef5-e484-4bc7-8c38-5410ca6c7f96\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-21T07:57:13.471387+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '140',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '9edd9907-5577-43d0-ba49-62e5c0fcd371',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '9e5dc503-e211-4990-ac6c-3f7b29dd6fd8',
  'x-ms-routing-request-id': 'WESTUS:20160321T075745Z:9e5dc503-e211-4990-ac6c-3f7b29dd6fd8',
  date: 'Mon, 21 Mar 2016 07:57:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"2061aef5-e484-4bc7-8c38-5410ca6c7f96\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-21T07:57:13.471387+00:00\",\r\n  \"endTime\": \"2016-03-21T07:57:47.377863+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '452925b5-4f7e-49e3-962b-e36888c2db71',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cffee9db-0188-4673-9af0-375bc950206d',
  'x-ms-routing-request-id': 'WESTUS:20160321T075815Z:cffee9db-0188-4673-9af0-375bc950206d',
  date: 'Mon, 21 Mar 2016 07:58:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/2061aef5-e484-4bc7-8c38-5410ca6c7f96?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"2061aef5-e484-4bc7-8c38-5410ca6c7f96\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-21T07:57:13.471387+00:00\",\r\n  \"endTime\": \"2016-03-21T07:57:47.377863+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '452925b5-4f7e-49e3-962b-e36888c2db71',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'cffee9db-0188-4673-9af0-375bc950206d',
  'x-ms-routing-request-id': 'WESTUS:20160321T075815Z:cffee9db-0188-4673-9af0-375bc950206d',
  date: 'Mon, 21 Mar 2016 07:58:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160321-075701676\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/xplatvmExt-20160321-075701676.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1984',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '89664fda-2c87-45b8-a1f9-aad50940c0f7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd00bd6d7-854a-4610-946d-221d6c1f266e',
  'x-ms-routing-request-id': 'WESTUS:20160321T075815Z:d00bd6d7-854a-4610-946d-221d6c1f266e',
  date: 'Mon, 21 Mar 2016 07:58:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"3e94f479-d02b-4a8c-a726-536bbd6f55d5\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli858426d3fd1faf57-os-1458546791334\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/cli858426d3fd1faf57-os-1458546791334.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160321-075701676\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext46.blob.core.windows.net/xplatstoragecntext9249/xplatvmExt-20160321-075701676.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext46.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension531/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1984',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131024614768669708',
  'x-ms-request-id': '89664fda-2c87-45b8-a1f9-aad50940c0f7',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd00bd6d7-854a-4610-946d-221d6c1f266e',
  'x-ms-routing-request-id': 'WESTUS:20160321T075815Z:d00bd6d7-854a-4610-946d-221d6c1f266e',
  date: 'Mon, 21 Mar 2016 07:58:15 GMT',
  connection: 'close' });
 return result; }]];
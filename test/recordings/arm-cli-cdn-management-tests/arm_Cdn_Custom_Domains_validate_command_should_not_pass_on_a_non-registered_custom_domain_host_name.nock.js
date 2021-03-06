// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b',
    name: 'KasotaTest-001',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrg01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrg02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-1-406f580d-a634-4077-9b11-216a70c5998d.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":false,\"message\":\"We couldn't find a DNS record for custom domain that points to endpoint. To map a domain to this endpoint, create a CNAME record with your DNS provider for custom domain that points to endpoint.\",\"reason\":\"IncorrectMapping\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'f99012ef-4149-4955-b63a-827e3053af81',
  'x-ms-client-request-id': '93849e71-d7f0-4e8c-945a-8bec479866c7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '08b97315-010e-4ff4-92cc-acdc5f76ca49',
  'x-ms-routing-request-id': 'WESTUS:20160317T184028Z:08b97315-010e-4ff4-92cc-acdc5f76ca49',
  date: 'Thu, 17 Mar 2016 18:40:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"customDomainValidated\":false,\"message\":\"We couldn't find a DNS record for custom domain that points to endpoint. To map a domain to this endpoint, create a CNAME record with your DNS provider for custom domain that points to endpoint.\",\"reason\":\"IncorrectMapping\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'f99012ef-4149-4955-b63a-827e3053af81',
  'x-ms-client-request-id': '93849e71-d7f0-4e8c-945a-8bec479866c7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '08b97315-010e-4ff4-92cc-acdc5f76ca49',
  'x-ms-routing-request-id': 'WESTUS:20160317T184028Z:08b97315-010e-4ff4-92cc-acdc5f76ca49',
  date: 'Thu, 17 Mar 2016 18:40:27 GMT',
  connection: 'close' });
 return result; }]];
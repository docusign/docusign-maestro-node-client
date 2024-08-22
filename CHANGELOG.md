## [v1.0.0] - Maestro API v1.0.0-1.0.5 - 2024-07-30
### Changed
- Added support for version v1.0.0-1.0.5 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.0-rc5] - Maestro API v1.0.0-1.0.5 - 2024-06-07
### Changed
- Added support for version v1.0.0-1.0.5 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.0-rc4] - Maestro API v1.0.0-1.0.4 - 2024-04-24
### Changed
- Added support for version v1.0.0-1.0.4 of the DocuSign Maestro API.

**Security Updates**
- Updated HTTP Client: Due to identified security vulnerabilities in Superagent proxy version 3.0.0, we have transitioned from using Superagent to the more secure Axios HTTP client. This update helps in safeguarding your interactions by patching potential security gaps.

**New Features**
- Proxy Support for HTTP Requests: We've introduced the ability to make HTTP requests through a proxy. This enhancement is particularly useful for users operating within corporate or restricted networks.
- JWT Token Request Functionality: The new sendJWTTokenRequest method allows you to obtain authentication tokens without exposing your privateKey. This method is designed to enhance security in your authentication processes.

**Changes to Existing Features**
- Updated Callback Response Structure: We have made changes to the response structure for callbacks. If you are using callback functions in your integration, please note the updated response object attributes:
> statusCode
header
body

**Migration Guide**
- For those using callback functions, please adjust your implementation to handle the new response structure as detailed above.

## [v1.0.0-rc3] - Maestro API v1.0.0-1.0.3 - 2024-04-03
### Changed
- Added support for version v1.0.0-1.0.3 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.1-rc1] - Maestro API v1.0.0-1.0.1 - 2024-01-29
### Changed
- Added support for version v1.0.0-1.0.1 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.0-rc2] - Maestro API v1.0.0-1.0.0 - 2024-01-05
### Changed
- Added support for version v1.0.0-1.0.0 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.0-rc1] - Maestro API v1.0.0-1.0.0 - 2024-01-04
### Changed
- Added support for version v1.0.0-1.0.0 of the DocuSign Maestro API.
- Updated the SDK release version.

## [v1.0.0-rc1] - Maestro API v1.0.0-1.0.0 - 2024-01-04
### Changed
- Added support for version v1.0.0-1.0.0 of the DocuSign Maestro API.
- Updated the SDK release version.


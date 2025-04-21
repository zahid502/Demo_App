export enum RequestStatus {
  // HTTP Status Codes
  SUCCESS = 200, // Request succeeded
  CREATED = 201, // Resource created successfully
  BAD_REQUEST = 400, // Bad request (client-side error)
  UNAUTHORIZED = 401, // Unauthorized access
  NOT_FOUND = 404, // Resource not found
  NOT_MODIFIED = 304, // Resource not modified
  SERVER_ERROR = 500, // Internal server error

  // Application-Specific Error Codes
  LOCAL_FAILURE = -1, // Local application error
  NETWORK_ERROR = -2, // Network-related error
  NO_RESPONSE = -3, // No response received from server
  UNEXPECTED_ERROR = -4, // Unexpected error occurred
}

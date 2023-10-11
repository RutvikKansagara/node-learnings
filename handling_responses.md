# Node.js Response Object

The `res` (response) object in Node.js has several properties and methods that allow you to control the HTTP response being sent to the client. Below are some key properties and methods with explanations and code examples:

**Properties:**

- `res.statusCode`:

  Property to get or set the HTTP status code.
  Default is 200.

  ```javascript
  res.statusCode = 404;

  ```javascript

res.statusMessage:

Property to get or set the HTTP status message.
Default is determined by the status code.


res.statusMessage = 'Not Found';
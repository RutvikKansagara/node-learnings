The res (response) object in Node.js has several properties and methods
that allow you to control the HTTP response being sent to the client.
Below are some key properties and methods with explanations and code
examples:

Properties: res.statusCode:

Property to get or set the HTTP status code. Default is 200.

res.statusCode = 404; res.statusMessage:

Property to get or set the HTTP status message. Default is determined by
the status code.

res.statusMessage = \'Not Found\'; res.headersSent:

Property that returns a boolean indicating whether the headers have been
sent.

if (!res.headersSent) { // Do something before sending headers }
Methods: res.writeHead(statusCode, \[statusMessage\], \[headers\]):

Method to write the response header.

res.writeHead(200, { \'Content-Type\': \'text/plain\' });
res.write(chunk, \[encoding\], \[callback\]):

Method to send a chunk of the response body.

res.write(\'Hello, \'); res.write(\'Node.js Web Server!\');
res.end(\[data\], \[encoding\], \[callback\]):

Method to end the response and optionally send the last chunk of the
response body.

res.end(\'Goodbye!\'); res.setHeader(name, value):

Method to set a single header value.

res.setHeader(\'Content-Type\', \'text/html\'); res.getHeader(name):

Method to get the value of a single header.

const contentType = res.getHeader(\'Content-Type\');
res.removeHeader(name):

Method to remove a header.

res.removeHeader(\'X-My-Header\'); res.getHeaderNames():

Method to get an array of header names.

const headerNames = res.getHeaderNames(); res.getHeaders():

Method to get a copy of the current headers.

const headers = res.getHeaders();

These are all common responses to a client:

res.end();
res.send();
res.json();
res.render();
res.redirect();

What do the above methods do specifically?

What one function do they ALL have in common?

Please put your answers here:

res.end() signals to the server that the response process is complete so that the server can tell the client that it is done sending data for the request.

res.send() will send specified data to the client while automatically setting response headers. It calls res.end() automatically.

res.json() is used when specifically sending JSON data to the client.

res.render() will use a JS templating engine (like EJS, Pug, etc.) to generate HTML that will be sent to the client.

res.redirect() is used to tell the client the the requested resource has changed to a new location. The new location is sent so the client can automatically send a new request for the resource.

All of these use the Response object's end() function.
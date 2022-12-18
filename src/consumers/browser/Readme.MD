# Consumer for RemoteAccessToolV4
This is the browser-based consumer for the RemoteAccessToolV4 project, which is a reactive screenshot tool. It consists of HTML markup, CSS styles, and JavaScript code.
It loads a screenshot of the remote server every `n` seconds as specified by the user 

## HTML Markup
The HTML markup includes a `<h1>` element for the page title and a `<div>` element with the ID `frame` to contain the screenshot image. There is also a `<div>` element with the class `form` that contains an `<input>` element for entering the update interval in seconds and a `<button>` element to start the update.

## JavaScript Code
The JavaScript code uses the Rx-Http-Request module to make a request to the server's screenshot endpoint and subscribes to the response. When the response is received, it is converted to a base64-encoded string and used as the source for the `img` element. There is also a function that is called when the button is clicked, which clears the current interval and sets a new interval based on the value entered in the `input` element.

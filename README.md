# js-numpad

This project shows the pros and cons of different approaches to building a simple web app which includes data-binding.

I am not trying to promote a specific approach, as the app is too small to give a real indicator of what using a library or framework (or vanilla JS, for that matter) feels like for more involved apps. For a larger, more involved example--not to mention more libraries and frameworks--check out [TodoMVC](http://www.todomvc.com).

# Compatibility

Much of the code is targeted at newer browsers:

The CSS is optimized for a recent version of Firefox or Chromium/Chrome.

The versions of Angular and jQuery which I've included do not support IE8 or lower. You can try swapping in Angular 1.2.x or jQuery 1.x, which support older versions of IE, but I do not guarantee everything will work properly.

The vanilla JS version uses element.classList which needs IE10 to work without a shim (you can find a shim for IE 8-9 [here](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList)).

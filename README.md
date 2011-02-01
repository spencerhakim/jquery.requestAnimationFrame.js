This plugin bringins requestAnimationFrame goodness to jQuery.

What is that good for?
----------------------

- lets the browser choose the best animation frame rate
- greatly reduces animation CPU usage when switching tab
- helps keep animation synchronized

Can you prove it?
-----------------

Yep!

1. Open this [demo page](http://lrbabe.github.com/jquery-interval-bookmarklet/demo.html), 
2. launch your system monitor,
3. click on the 'spawn' button,
4. add loads of drops (type 50 in the input),
5. click on the 'interval bookmarklet' button,
6. click on the 'requestAnimationFrame' checkbox,
7. switch to another tab,
8. watch the cpu usage decrease.

And that's all?
---------------

See the full description of the [requestAnimationFrame mechanism](https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame). Read about all of the [potential benefits](http://hacks.mozilla.org/2010/08/more-efficient-javascript-animations-with-mozrequestanimationframe/).
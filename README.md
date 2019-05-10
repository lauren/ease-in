[Ease In](http://lauren.github.io/ease-in/)
===============

Fade in DOM elements hierarchically using CSS transitions and 385 bytes (minfied) of JavaScript.

1) Download the source. Add `ease-in-1.0.0.min.js` to your JS directory, and link it in your document before the ending `body` tag:

```html
<script src="js/ease-in.min.js"></script>
```
2) Add this CSS to all the items you want to fade in:

```css
{
  opacity:0;
  -webkit-transition: opacity .5s ease-in-out;
     -moz-transition: opacity .5s ease-in-out;
       -o-transition: opacity .5s ease-in-out;
          transition: opacity .5s ease-in-out;
}
```
3) Add this declaration to your stylesheet:

```css
.visible {
  opacity:1;
  -webkit-transition: opacity .5s ease-in-out;
     -moz-transition: opacity .5s ease-in-out;
       -o-transition: opacity .5s ease-in-out;
          transition: opacity .5s ease-in-out
}
```
4) Seriously, this won't work unless you add that CSS, but feel free to modify the transition duration and style if you like.

5) After the DOM has loaded, call easeIn on the element collection of our choice. For instance, this page uses:

```js
easeIn(document.body.children);
```

easeIn will sequentially apply the .visible class to each element in the collection you pass it, including all child elements if any are available.

6) The default delay between loading each element is 50 miliseconds. To specify a longer or shorter delay, pass an optional delay parameter (in miliseconds):

```js
easeIn(document.body.children, 200);
```

Contributing
------------

I ♥ pull requests. Here's how to contribute:

1. Fork and pull repo.
2. If you don't have node, [install it](http://howtonode.org/how-to-install-nodejs).
3. From the repo directory, `npm install --save-dev`
4. `grunt watch`: This will automatically JSHint, concatenate, and minify the JavaScript and automatically compile and minify the LESS every time you save. Watch for JSHint errors and correct them.
5. Code!

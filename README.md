# showhide.js

Showhide.js is a small and extremely simple, dependency-free library to show and hide elements conditionally based on HTML data attributes. It is quite useful to create simple interactions on pages without much hassle, which is ideal for prototyping. 

## Getting started

### 1. Installing

Clone showhide.js repository to a folder of your choice in your web project, e.g. `/var/www/project/js`:

```
cd /var/www/project/js && git clone https://github.com/Dovyski/showhide.git showhide
```

### 2. Include `showhide.js` in your HTML file

Just before the `</head>` or `</body>` tags, add the following:

```html
<script src="js/showhide/showhide.js"></script>
```

## Usage

Showhide.js uses HTML data attributes to control the show/hide logic. All happens when the user clicks an HTML element that has a `data-sh-show` or `data-sh-hide` data element:

```html       
<a href="javascript:void(0);" data-sh-show=".dynamic">Show</a>
<a href="javascript:void(0);" data-sh-hide=".dynamic">Hide</a>

<div class="dynamic">This div will be visible (or not)</div>
```

When the user clicks any of the `<a>` tags above, if it has an `data-sh-show` data attribute, Showhide.js will search for all elements in the page that match the query informed as the value for the data attribute, then make them visible. Similarly, if the user clicks an element with a `data-sh-hide` attribute, Showhide.js will hide all elements that match that query.

Showhide.js also has built-in support to create toggle-based controls:

```html
<a href="javascript:void(0);" data-sh-toggle=".dynamic.red" data-sh-toggle-show=".toggle-show-red" data-sh-toggle-hide=".toggle-hide-red">
          
  <span class="toggle-show-red" style="display: none;">[on]</span>
  <span class="toggle-hide-red">[off]</span>
</a>
```

The query informed in `data-sh-show`, `data-sh-hide`, or any other data attributes supported by Showhide.js is based on jQuery selectors. It means you can do something like `data-sh-show="#elementId"` to show an element by its id.

## Limitations

Showhide.js was developed to quickly (and dirtly) show or hide elements on a page based on simple rules. It's biggest advantages are that is has no dependencies, e.g. jQuery, and is extremely simple to use. If you are looking for something more robust or powerful, check [Vue.js](https://vuejs.org/) or [React](https://reactjs.org/).

## License

Showhide.js is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) Open Source
license and is available for free.

## Changelog

See all changes in the [CHANGELOG](CHANGELOG.md) file.

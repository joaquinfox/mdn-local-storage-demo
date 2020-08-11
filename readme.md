# Web Storage Demo

## Overview and purpose

This is an exercise inspired by an MDN [article](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) on the Web Storage API. It also gave me an excuse to tool around with the excellent color picker API, [jscolors.com]{https://jscolor.com/}.

### Web Storage

Web storage provides a mechanism by which browsers can associate a client to a server. In comes in two flavors, localStorage and sessionStorage, discussed below. Traditionally cookies serve to identify clients to servers but because cookies are issued with each request, if a user is using different windows on the same application, multiple cookies can cause miss-identification. One possible consequence could be a purchase incorrectly being duplicated.

Web Storage solves this with sessionStorage, which links all open windows from a given machine to a single session. Values in sessionStorage will be cached as long as the browser is open, including page reloads and restores. It can be cleared from the console using

```
sessionStorage.clear()
```

In this demo the value entered for 'font' is stored to sessionStorage in populateStorage()

```
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  sessionStorage.setItem('font', document.getElementById('font').value);

```

For demonstration purposes, the user input for a background color is stored to localStorage which has all the properties of sessionStorage but the data will be cached _even when the browser is closed and reopened_. It can be cleared from the console with

```
localStorage.clear()
```

### Code features

The html input elements are selected and their value is captured and cached to storage.

```
<!-- html -->
 <input class="color" value="66ff00" id="bgcolor" />

<!-- populateStorage() -->
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
```

Those values are then applied to an html element

```
<!-- setStyles() -->
 let currentColor = localStorage.getItem('bgcolor');
  document.getElementById('bgcolor').value = currentColor;
    htmlElem.style.backgroundColor = '#' + currentColor;
```
Last, the onchange method is applied so that any changes to the input form trigger a change.

```
bgcolorForm.onchange = populateStorage;

```
### jscolors.com
This demo makes use of [jscolors.com]{https://jscolor.com/} to provide the color slider in the input form.
The documentation is good and the implementation is simple but it does require a "class='color'" be set on the input.
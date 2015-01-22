personal-landing-page
=====================

Personal website landing page

## You will need

1. [Grunt](http://gruntjs.com/)
1. [npm](https://www.npmjs.org/)
1. `npm install`

## Deployment

`grunt` to rebuild the dist folder.

## Development

Work out of js/script.js and css/script.css. `grunt dev` to continuously watch the js and css folders to changes and re-build on the fly.

## Background Video
Shoutout to [Dudley Storey](http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video) for this HTML5 background video walk through
Here is his [Codepen](http://codepen.io/dudleystorey/pen/knqyK) example

## AppCache
AppCache was used to cache the js, css and media for this page.

manifest.appcache:
```
CACHE MANIFEST
# v1 2015-01-21
index.html
dist/app.min.css
dist/app.min.js
media/background-img.jpg
media/background-video.mp4
media/background-video.webm
media/Resume_2015.pdf

# Use from network if available
NETWORK:
*

# Fallback content
#FALLBACK:
#/ fallback.html
```
https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
http://stackoverflow.com/questions/12476210/cant-get-html5-appcache-working-correctly
http://stackoverflow.com/questions/10566871/google-maps-appcache-but-not-offline
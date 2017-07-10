# plugin-ng-bundle
Plugin to help include lazy modules when bundling angular apps with systemjs builder

- The plugin is located at `lib/plugin.ts` and to build it, I use jspm like this, `jspm bundle-sfx lib dist/plugin.js`.
- This will create a file called `dist/plugin.js`, and this should be the full plugin.
- It can be used in your systemjs config by doing:

```js
SystemJS.config({
    map: {
        'ng-bundle': 'plugin/location/dist/plugin.js',
    },
    
    meta: {
        '*.module.js': {
            loader: 'ng-bundle'
        }
    }
});
```

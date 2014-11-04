# webpack-reload-plugin
> Adds the `webpack-dev-server` reload snippet to your entries.

## Usage

```js
var ReloadPlugin = require('webpack-reload-plugin');

config.plugins.push(new ReloadPlugin("localhost")); 
```

* You pass IP address to the constructor: `new ReloadPlugin("192.168.0.1")`.
* You can  use `webpack-dev-server --reload=192.168.0.1` to override the configured IP address.

When no IP address is given, `webpack-reload-plugin` does **NOT** add the snippet. This way you can include the plugin to your config, but only activate it using the commandline.

Like this:

```bash
  webpack   # creates a build without the reload snippet
  webpack-dev-server --reload=localhost # run the dev server with live reload
```

## Changelog

#### 0.1.2 (01/11/2014)

* Fixed bug: typo

#### 0.1.1 (31/10/2014)

* Fixed bug: Couldn't use `--reload` commandline and use IP from webpack config.

#### 0.1.0 (05/08/2014)

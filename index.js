var optimist = require('optimist');

function WebpackReloadPlugin(ip){
  var argv = optimist.string('reload').alias('reload','r').argv;
  
  this.ip = ip;
  if(typeof argv.reload === 'string' && argv.reload.length > 0) this.ip = argv.reload;
}

WebpackReloadPlugin.prototype.apply  = function(compiler){
    compiler.options.reload = this.ip; // for webpack-cordova-plugin
    if(!this.ip) return;

    var entry = compiler.options.entry;
    var reload = "webpack-dev-server/client?http://"+this.ip+":8080/";

    // string
    if(typeof entry === "string"){
      entry = [reload, entry];

    // array
    } else if(entry.unshift) {
      entry.unshift(reload);

    // object (multiple bundles)
    } else {
      // for every bundle
      for(var bundle in entry){
        // bundle is an array
        if(entry[bundle].unshift) {
          entry[bundle].unshift(reload);
        // bundle is a string
        } else {
          entry[bundle] = [ reload, entry[bundle] ];
        }
      }
    }
    compiler.options.entry = entry;
};

module.exports = WebpackReloadPlugin;

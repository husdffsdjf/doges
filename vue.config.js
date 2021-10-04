const path = require("path");
const vueSrc = "./src";
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        colors: path.resolve(
          __dirname,
          vueSrc,
          "styles/colors.css"
        ),
      },
      extensions: ['.js', '.vue', '.json', '.css']
    }
  }
};
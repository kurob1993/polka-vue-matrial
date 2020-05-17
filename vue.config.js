module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/polka-vue/" : "/",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@lib": "./src/lib",
            "@dtos": "./src/dtos",
            "@__tests__": "./__tests__",

          },
        },
      ],
    ],
  };
};
module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '5.0.6',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
  },
  mongoURLEnvName: 'MONGO_URI'
};

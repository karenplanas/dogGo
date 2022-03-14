/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.js"],
  verbose: true,
  forceExit: true,
  // clearMocks: ture
};
const { defaults: tsjPreset } = require('ts-jest/presets')

// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: '@shelf/jest-mongodb',
//   transform: tsjPreset.transform,
// };

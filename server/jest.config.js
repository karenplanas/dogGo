const { defaults: tsjPreset } = require('ts-jest/presets')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: '@shelf/jest-mongodb',
  transform: tsjPreset.transform,
};

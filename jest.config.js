// By default, Jest can run without any config files, but it will not compile .ts files.
// You can use Babel for pure Typescript transpilation, but Jest will not type-check your tests as they are run. If you want that, you can use ts-jest instead, or just run the TypeScript compiler tsc separately (or as part of your build process).
// ts-jest is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.
// To transpile TypeScript with ts-jest, there has to be a configuration file that will tell Jest to use a ts-jest preset.
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

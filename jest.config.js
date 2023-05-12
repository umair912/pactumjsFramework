module.exports = {
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    },
    reporters : [
      "default",
      ["jest-html-reporters", { publicPath: ".html-report", filename: "e2e.html" }],
      // ["jest-junit", { outputDirectory: ".xml-report", outputName: `e2e.xml` }],
    ]
  }
};
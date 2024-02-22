import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/evaluacion/*.ts", 
    "!src/evaluacion/*.steps.ts", 
  ],
  
  
  testMatch: [
    "**/src/evaluacion/validacionpregunta1.steps.ts",
    "**/src/evaluacion/validacionpregunta2.steps.ts",
    "**/src/evaluacion/validacion1.spect.ts",
  ],
  
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;

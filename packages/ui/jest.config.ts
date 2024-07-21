import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  rootDir: ".",
  testRegex: ".*\\.(test|spec)\\.(t|j)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)sx?", "!**/*.d.ts"],
  coverageDirectory: "../../coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;

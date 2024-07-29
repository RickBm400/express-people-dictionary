import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
};

export default config;

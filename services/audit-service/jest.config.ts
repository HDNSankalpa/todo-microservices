export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: { module: "CommonJS", moduleResolution: "Node", esModuleInterop: true, isolatedModules: true } }]
  },
  moduleNameMapper: {
    "^@todo/errors$": "<rootDir>/../../packages/errors/src/index.ts",
    "^@todo/logger$": "<rootDir>/../../packages/logger/src/index.ts",
    "^@todo/rabbitmq$": "<rootDir>/../../packages/rabbitmq/src/index.ts",
    "^@todo/validators$": "<rootDir>/../../packages/validators/src/index.ts",
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  testMatch: ["**/tests/**/*.test.ts"]
};
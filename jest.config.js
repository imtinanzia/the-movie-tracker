module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
};

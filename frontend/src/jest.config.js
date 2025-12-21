module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!react-router-dom|react-router)"
  ]
};

export default {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!react-router-dom|react-router)"
  ],
};
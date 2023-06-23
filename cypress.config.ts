import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  env: {
    API_URL: 'https://api.coingecko.com/api/v3/coins/markets',
  },
  
});

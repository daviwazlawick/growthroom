module.exports = {
  apps: [
    {
      name: "growthroom",
      script: "./dist/server/entry.mjs",
      cwd: "/opt/growthroom",
      env: {
        HOST: "127.0.0.1",
        PORT: "4321",
        NODE_ENV: "production",
      },
    },
  ],
};

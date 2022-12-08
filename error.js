setTimeout(() => {
  throw new Error("opa cupa");
}, 300);

process.on("uncaughtException", () => {});

process.on("unhandledRejection", () => {});

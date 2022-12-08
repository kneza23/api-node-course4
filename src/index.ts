require("dotenv").config();

import config from "./config";
import app from "./server";

app.listen(config.port, () => {
  console.log("slusan na: " + config.port);
});

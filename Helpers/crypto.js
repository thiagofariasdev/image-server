const crypto = require("crypto");
const config = require("./../config/crypto");

class Hash {
  make(str) {
    let data = crypto
      .createHash("sha256", config.HASH_SECRET)
      .update(str)
      .digest("hex");
    return data;
  }
}

module.exports = new Hash();

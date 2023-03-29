const { createHash } = require("crypto");

const hash = (data) => {
  return createHash("sha256").update(data).digest("hex");
};

const hariIni = new Date();
const tanggalHariIni = `${hariIni.getDate()}${hariIni.getMonth()}${hariIni.getFullYear()}`;
const namadepan = "Muhammad";

const hasilHash = hash(tanggalHariIni + namadepan + "pria" + "ifabula");

console.log(hasilHash);

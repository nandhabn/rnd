import fs from "fs";
import { createTunnel } from "tunnel-ssh";

import {
  sshHost,
  sshHostUser,
  sshPort,
  sshPrivateKeyPath,
} from "./environment.js";

const privateKey = fs.readFileSync(sshPrivateKeyPath);

const tunnelOptions = {
  autoClose: true,
};

const serverOptions = {
  port: sshPort,
};

const sshOptions = {
  host: sshHost,
  port: 22,
  username: sshHostUser,
  privateKey,
};

const forwardOptions = {
  srcAddr: "0.0.0.0",
  srcPort: sshPort,
  dstAddr: "127.0.0.1",
  dstPort: sshPort,
};

try {
  let [server, conn] = await createTunnel(
    tunnelOptions,
    serverOptions,
    sshOptions,
    forwardOptions
  );
  console.log("Tunnel created");
  console.log(`try connecting with http://localhost:${sshPort}`);

  // To log each connection details use connection object
  // server.on("connection", (connection) => {
  //   console.log("new connection");
  // });
} catch (e) {
  console.log(e);
}

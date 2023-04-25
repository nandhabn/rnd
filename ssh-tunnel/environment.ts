import { config } from "dotenv";

config();

const sshPort = +process.env.SSH_TUNNEL_SSH_PORT;

const sshHost = process.env.SSH_TUNNEL_SSH_HOST;

const sshPrivateKeyPath = process.env.SSH_TUNNEL_PRIVATEKEY_PATH;

const sshHostUser = process.env.SSH_TUNNEL_HOST_USER ?? "ubuntu";

export { sshPort, sshHost, sshPrivateKeyPath, sshHostUser };

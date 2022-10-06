import { Manager } from "socket.io-client";
const createNewSocket = () => {
    const manager = new Manager("http://localhost:3000")
    const socket = manager.socket("/");
}
export default createNewSocket
const PORT_LOCAL = "http://localhost:8000";
const PORT_PRODUCTON = null;

export const PORT = PORT_PRODUCTON ? PORT_PRODUCTON : PORT_LOCAL;
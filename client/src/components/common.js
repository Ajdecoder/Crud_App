const PORT_LOCAL = "http://localhost:8000";
const PORT_PRODUCTON = 'https://crud-app-backend-ha44.onrender.com';

export const PORT = PORT_PRODUCTON ? PORT_PRODUCTON : PORT_LOCAL;
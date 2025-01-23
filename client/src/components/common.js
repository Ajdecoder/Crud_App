// config.js or constants.js
export const PORT_LOCAL = "http://localhost:8000";
export const PORT_PRODUCTION = import.meta.env.VITE_PORT_PRODUCTION; // Fixed typo in PRODUCTION

// Better way to determine the API URL
export const PORT = import.meta.env.MODE === 'production' 
    ? import.meta.env.VITE_PORT_PRODUCTION 
    : PORT_LOCAL;
    
    console.log(import.meta.env.VITE_PORT_PRODUCTION)
    

// Add some debug logging
console.log('Current Environment:', import.meta.env.MODE);
console.log('API URL:', PORT);
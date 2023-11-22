const mongoose = require('mongoose');

// URI de conexión que incluye nombre de usuario, contraseña y otros detalles
const URI = 'mongodb://mongo:aDaCEAB-AAhcbAGhAFAh-5GD4ba61Haa@viaduct.proxy.rlwy.net:57389';


mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Puedes agregar otras opciones de configuración si es necesario
})
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => console.error('Error de conexión a la base de datos:', err));

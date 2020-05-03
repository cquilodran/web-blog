const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config');

mongoose.set("useFindAndModify", false);


mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/web-blog`, {
  useNewUrlParser: true, useUnifiedTopology: true
}, (err, res) => {
  if (err) {
    // throw err;
    cosole.log("Error al conectar con BD")
  } else {
    console.log("Conexion a BD correcta")
    app.listen(port, () => {
      console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`)
    })
  }
});
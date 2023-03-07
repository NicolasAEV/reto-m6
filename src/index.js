import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';
import { create } from 'express-handlebars';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//union de archivos staticos
app.use( express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

//importamos las rutas
import routerIndex from './router/index.js';
//principal
app.use('/',routerIndex)


//asignamos la union de los archivo views
//configuracion de motor hbs

const hbs = create({
  //se define la pagina principal la cual contendra todo
  defaultLayout: "main",
  //definimos y unimos los layouts y partials
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  //definimos la extencion a utilizar
  extname: ".handlebars",
});
app.engine(".handlebars", hbs.engine);
app.set("view engine", ".handlebars");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
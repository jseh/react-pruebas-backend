import * as md from './base/md.mjs'; 
import express from 'express';
import dotenv from 'dotenv';
import {BootstrapDBs} from './dbs/init.mjs';
import mongoose from 'mongoose';
import {router} from './routes/main.mjs'; 







// simple prueba de modulos es6
md.sendMessage();

// dotenv
// require('dotenv').config()
// para traer los datos solo llamar a process.env en cualquier parte sin importar ya nada
// por defecto el .env  debe ir afuera de /src
dotenv.config();


// inicializar bases de datos
BootstrapDBs.inicializar();



const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// en lugar de body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);


app.get('/', function (req, res) {
  res.send('Ok');
});


app.get('/capturados', async (req, res) => {

  let resp = await mongoose.connection.db.collection('capturados').find({}).toArray()
  // console.log(resp)
  // return res.send("ok");
  return res.json(resp);

});

app.get('/remover/:id', async (req, res) => {

  try {
    await mongoose.connection.db.collection('capturados').deleteOne({ "_id" : mongoose.Types.ObjectId(req.params.id )  })

  } catch (error) {
    console.log(error)
  }
  return res.send("ok");

});

app.post('/capturar', async (req, res) => {

  console.log(req.body);

  mongoose.connection.db.collection('capturados').insertOne({
    nombre: req.body.nombre,
    imagenURL: req.body.imagenURL, 
  });

  res.send('guardados correctamente');
});

app.listen(3000, function () {
  console.log('aplicacion funcionando correctamente en puerto 3000!');
});
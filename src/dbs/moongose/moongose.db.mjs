import mongoose from 'mongoose';

class ConexionMongooseDB{

    async conectar() {
        try {
            await mongoose.connect('mongodb://localhost:27017/mongodb', { useNewUrlParser: true, useUnifiedTopology: true  });
          } catch (error) {
              console.log("moongose ha fallado ");
              console.log(error);
          }
    }

}
export let db = new ConexionMongooseDB();






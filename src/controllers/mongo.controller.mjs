
class MongoController{

    async consulta(req, res) {
        return res.send("todo bien");
    }

    async agregarNuevo(req, res) {
        
        
        
        return res.send("");
    }

}

// const mongoController =  new MongoController();
// export { mongoController } 

const mongoController = new MongoController();
export default mongoController;

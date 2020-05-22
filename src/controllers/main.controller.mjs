
class IndexController{

    async index(req, res) {
        return res.send("todo bien");
    }

}
const indexController = new IndexController();

export { indexController, IndexController };
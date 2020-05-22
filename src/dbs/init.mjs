
import {db as db3} from './moongose/moongose.db.mjs';

export class BootstrapDBs{

    static async inicializar(){

        
        await db3.conectar();

    }
}
import type { NextApiRequest, NextApiResponse } from "next";
import { conectarMongoDB } from '../../middlewares/conectarMongoDB';
import type {RespostaPadraoMsg} from '../../types/RespostaPadraoMsg';

const endPointLogin = (
    req: NextApiRequest,
    res: NextApiResponse <RespostaPadraoMsg>
) => {
    if (req.method === 'POST'){
        const {login, senha} = req.body;

        if(login === 'admi@admin.com' &&
         senha === 'admin@123'){
            return res.status(200).json({msg : 'Usuario autenticado com sucesso'});
         }
         return res.status(400).json({erro : 'usuario ou senha não encontrados'});
    }
    return res.status(405).json({erro : 'Metodo informado não é válido'});
}

export default conectarMongoDB(endPointLogin);

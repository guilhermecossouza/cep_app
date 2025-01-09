import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

type Endereco = {
    "cep": string;
    "logradouro": string;
    "complemento": string;
    "unidade": string;
    "bairro": string;
    "localidade": string;
    "uf": string;
    "estado": string;
    "regiao": string;
    "ibge": string;
}

export default async function viaCepApi(req: NextApiRequest, res: NextApiResponse<Endereco | { error: string }>) {
    if(req.method === "GET") {
        const cep = req.query.cep;
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            return res.status(200).json(response.data);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao consultar o ViaCEP" });
        }
    }else {
        return res.status(405).json({ error: "Método não permitido" });
    }
}
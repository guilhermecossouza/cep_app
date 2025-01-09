import { useState } from "react";
import InputCep from "./InputCep";
import ResultadoBusca from "./ResultadoBusca";
import { toast } from 'react-toastify';

export default function Cep() {
    const [cep, setCep] = useState<string>("");
    const [endereco, setEndereco] = useState({});

    const buscarEndereco = async () => {
        const strCep = cep.replace(/[-]/g, "");
        if(strCep.length !== 8) {
            toast.error("CEP inválido!");
            return;
        }

        try {
            const response = await fetch(`/api/viaCep?cep=${strCep}`);
            const data = await response.json();

            if(data.error) {
                toast.error(data.error);
                return;
            }            
            setEndereco(data);

        } catch (error) {
            toast.error("Erro ao consultar o ViaCEP");
        }
    }

    return (
        <main className="container">
            <div className="row">
                <div className="col-6"><InputCep cep={cep} setCep={setCep} buscarEndereco={buscarEndereco}/></div>
                <div className="col-6"><ResultadoBusca endereco={endereco}/></div>
            </div>    
        </main>
    );
}
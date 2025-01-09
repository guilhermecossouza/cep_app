import { useEffect, useState } from "react"

interface ResultadoBuscaProps {
    "cep"?: string,
    "logradouro"?: string,
    "complemento"?: string,
    "unidade"?: string,
    "bairro"?: string,
    "localidade"?: string,
    "uf"?: string,
    "estado"?: string,
    "regiao"?: string,
    "ibge"?: string,
}

interface EnderecoPops {
    endereco: ResultadoBuscaProps
}

export default function ResuladoBusca(props: EnderecoPops) {
    const [viaCep, setViaCep] = useState<ResultadoBuscaProps>({});

    useEffect(() => {
        if(props.endereco && Object.keys(props.endereco).length > 0) {
            setViaCep(props.endereco);
        }
    }, [props.endereco])

    const mostraDadosEndereco = () => {
        return (
            <ul className="list-group">      
                <li className="list-group-item list-group-item-action active">Dados Endereço</li>
                <li className="list-group-item">{viaCep.logradouro || ""}</li>
                <li className="list-group-item">{viaCep.complemento || ""}</li>
                <li className="list-group-item">{viaCep.unidade || ""}</li>
                <li className="list-group-item">{viaCep.bairro || ""}</li>
                <li className="list-group-item">{viaCep.localidade || ""}</li>
                <li className="list-group-item">{viaCep.uf || ""}</li>
                <li className="list-group-item">{viaCep.estado || ""}</li>
                <li className="list-group-item">{viaCep.regiao || ""}</li>
                <li className="list-group-item">{viaCep.ibge || ""}</li>
            </ul>
        )
    }

    return (
        <div>
            {props.endereco && Object.keys(props.endereco).length > 0 && mostraDadosEndereco()}
        </div>
    );

    
}
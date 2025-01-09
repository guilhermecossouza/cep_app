import { InputMask } from '@react-input/mask';

interface InputCepProps {
    cep: string,
    setCep: (cep : string) => void,
    buscarEndereco: () => void,
}

export default function InputCep({cep, setCep, buscarEndereco} : InputCepProps) {
    return (
        <div className="input-group mb-3">
            
            <InputMask  
                type="text" 
                className="form-control" 
                placeholder="Informe o cep..." 
                aria-label="Informe o cep..." 
                aria-describedby="button-consultar" 
                id="id-cep"
                mask='_____-___'
                replacement={{ _: /\d/ }}
                value={cep}
                onChange={ (event) => setCep(event.target.value) }
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-consultar"
                onClick={buscarEndereco}
            >Consultar</button>
        </div> 
    );
}


import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddPiloto() {

    let navigate=useNavigate()

    const [piloto, setPiloto] = useState({
        pais:"",
        foto:"",
        nome:"",
        equipe:"",
        vitorias:""
    })

    const{pais,foto,nome,equipe,vitorias}=piloto;

    const onInputChange = (e) => {

        setPiloto({...piloto,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/piloto",piloto);
        navigate("/");
    };

  return <div className="container">
        <div className="row"> 
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Registrar Piloto</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Pais" className="form-label">
                        Pais
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder="Digite a URL da foto do país do piloto"
                    name="pais"
                    value={pais}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Foto" className="form-label">
                        Foto
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder="Digite a URL da foto do piloto"
                    name="foto"
                    value={foto}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Nome" className="form-label">
                        Nome
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder="Digite o nome do piloto"
                    name="nome"
                    value={nome}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Equipe" className="form-label">
                        Equipe
                    </label>
                    <input type={"text"} 
                    className="form-control" 
                    placeholder="Digite a equipe do piloto"
                    name="equipe"
                    value={equipe}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Vitorias" className="form-label">
                        Vitórias
                    </label>
                    <input type={"number"} 
                    className="form-control" 
                    placeholder="Digite a quantidade de vitórias do piloto"
                    name="vitorias"
                    value={vitorias}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark">Enviar</button>
                <Link className="btn btn-outline-danger mx-2 " to="/">Cancelar</Link>
                </form>
            </div>
        </div>
  </div>
}

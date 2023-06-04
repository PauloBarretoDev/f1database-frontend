import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPiloto() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [piloto, setPiloto] = useState({
        nome:"",
        equipe:"",
        vitorias:""
    })

    const{nome,equipe,vitorias}=piloto;

    const onInputChange = (e) => {

        setPiloto({...piloto,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        loadPiloto()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/piloto/${id}`,piloto);
        navigate("/");
    };

    const loadPiloto = async () =>{
        const result = await axios.get(`http://localhost:8080/piloto/${id}`)
        setPiloto(result.data);
    }

  return <div className="container">
        <div className="row"> 
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Editar Piloto</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
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

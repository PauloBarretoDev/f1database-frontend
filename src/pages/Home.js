import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [pilotos, setPilotos] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadPilotos();
    },[]);

    const loadPilotos = async () => {
        const result = await axios.get("http://localhost:8080/pilotos");
        setPilotos(result.data);
    }

    const deletePiloto = async (id) =>{
        await axios.delete(`http://localhost:8080/piloto/${id}`)
        loadPilotos();
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Equipe</th>
                    <th scope="col">Vitórias</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>

                {
                    pilotos.map((piloto,index) => (
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{piloto.nome}</td>
                            <td>{piloto.equipe}</td>
                            <td>{piloto.vitorias}</td>
                            <td>
                                <Link className='btn btn-dark mx-2'
                                to={`/viewpiloto/${piloto.id}`}
                                >Visualizar</Link>
                                <Link className='btn btn-outline-dark mx-2'
                                to={`/editpiloto/${piloto.id}`}
                                >Editar</Link>
                                <button className='btn btn-danger mx-2'
                                
                                onClick={()=>deletePiloto(piloto.id)}
                                >Deletar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

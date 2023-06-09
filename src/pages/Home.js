import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [pilotos, setPilotos] = useState([]);

    //Adicionada a fintragem de pilotos
    const [search, setSearch] = React.useState("");
    const searchLowerCase = search.toLowerCase();
    const pilotoFiltrado = pilotos.filter(piloto => piloto.nome.toLowerCase().includes(searchLowerCase) || piloto.equipe.toLowerCase().includes(searchLowerCase));

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
        <div>
        <div className="mb-3">
                    <br/>
                    <label htmlFor="Search" className="form-label" >
                        Filtrar por Nome ou Equipe
                    </label>
                    <input type={"search"} 
                    className="form-control" 
                    placeholder="Digite o nome do piloto ou da equipe"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
        </div>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                    <th scope="col">País</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Equipe</th>
                    <th scope="col">Vitórias</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>

                {
                    pilotoFiltrado.map((piloto,index) => (
                        <tr>
                            <td><img src={piloto.pais} style={{width: 45, border:"solid", borderWidth:0.1}}></img></td>
                            <td><img src={piloto.foto} style={{width: 45}}></img></td>
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

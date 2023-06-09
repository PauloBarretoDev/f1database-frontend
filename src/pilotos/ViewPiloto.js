import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPiloto() {

    const [piloto, setPiloto]=useState({
        foto:"",
        nome:"",
        equipe:"",
        vitorias:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadPiloto()
    },[])

    const loadPiloto = async () =>{
        const result = await axios.get(`http://localhost:8080/piloto/${id}`)
        setPiloto(result.data);
    }

    return(
        <div className="container">
            <div className="row"> 
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-dark">
                    <h2 className="text-center m-4" style={{color:"white"}}>Detalhes do Piloto</h2>

                    <div className="card" style={{border: "solid"}}>
                        <div className="card-header bg-transparent">
                            Detalhes do piloto com id : {piloto.id}
                            <ul className="list-group list-gropup-flush">
                            <li className="list-group-item">
                                    <img src={piloto.foto} style={{width: 250}}></img>
                                </li>
                                <li className="list-group-item">
                                    <b>Nome: </b>
                                    {piloto.nome}
                                </li>
                                <li className="list-group-item">
                                    <b>Equipe: </b>
                                    {piloto.equipe}
                                </li>
                                <li className="list-group-item">
                                    <b>Vitórias: </b>
                                    {piloto.vitorias}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-outline-light my-2" to={"/"}>Voltar para o Início</Link>
                </div>
            </div>
        </div>
    )
}
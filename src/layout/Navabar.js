import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src='./f1Logo.png' style={{width: 40}}></img> F1 Database</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="btn btn-outline-light" to="/addpiloto">
                    Adicionar Piloto
                </Link>
        </div>
        </nav>
    </div>
  )
}

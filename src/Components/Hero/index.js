import React from 'react'
import Lines from "./Tables"

export default function index() {
    return (
        <div className="hero_container" >
            <section className="container hero_wrapper">
             <div className="name_container">
                 <h1>Void Rizoma</h1>
             </div>
             <div className="lines_container">
                 <Lines />
             </div>
            </section>
            
        </div>
    )
}


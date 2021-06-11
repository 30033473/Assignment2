import React from 'react';
import barrierImage from "./images/barrier.png"

const Scp = ({scpinfo}) => {
    return(<div>
        {
            scpinfo.map(
                (scp) => (
                    <div className="album py-5 bg-dark">
                        <div className="container">
                            <div className="row row-cols-sm-2 cols-md-3 g-3"></div>
                                <div className="card shadow-lg bg-dark">
                                    <img className="mx-auto d-block w-50" alt="scp" src={scp.image} />
                                    <div className="col-md-12">
                                        <div className="card-body text-warning">
                                            <h1 className="card-title text-center">{scp.item}</h1>
                                            <h3 className="card-subtitle mb-2 text-center">CLASS: {scp.class}</h3>
                                            <hr />
                                            <br></br>
                                            <h3 className="card-subtitle mb-2 text-muted">DESCRIPTION :</h3>
                                            <p className="card-text">{scp.description}</p>
                                            <br></br>
                                            <h3 className="card-subtitle mb-2 text-muted">CONTAINMENT :</h3>
                                            <p className="card-text">{scp.containment}</p>  
                                            <br></br>                                            
                                            <img className="mx-auto d-block w-100 h-50" alt="scp" src={barrierImage} />                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                )
            )
        }
    </div>)
}

export default Scp
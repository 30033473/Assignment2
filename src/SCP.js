import React from 'react';

const Scp = ({scpinfo}) => {
    return(<div>
        {
            scpinfo.map(
                (scp) => (
                    <div className="album py-5 bg-dark">
                        <div className="container">
                            <div className="row row-cols-sm-2 cols-md-3 g-3"></div>
                                <div className="card shadow-lg bg-dark">
                                    <img className="mx-auto d-block w-50" src={scp.image} />
                                    <div className="col-md-12">
                                        <div className="card-body text-warning">
                                            <h1 className="card-title text-center">{scp.item}</h1>
                                            <hr />
                                            <h3 className="card-subtitle mb-2 text-muted">{scp.class}</h3>
                                            <p className="card-text">{scp.containment}</p>
                                            <p className="card-text">{scp.description}</p>
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
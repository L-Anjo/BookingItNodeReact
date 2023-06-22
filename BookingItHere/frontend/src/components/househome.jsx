import React from "react";

/**
 *
 * @author Luís Anjo
 * @param imageUrl
 * @param title
 * @param description
 * @param onViewClick
 * @param classifi
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({imageUrl, title, description, onViewClick, classifi, pro}) => {
    return (
        <div className="col" onClick={onViewClick}>
            <div className="card shadow-sm">
                <img src={imageUrl} className="card-img-top" style={{width: "auto", height: "200px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Preço Noite: {description}€</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary"
                                    onClick={onViewClick}>Ver
                            </button>
                        </div>
                        {pro === true ? <small className="text-body-secondary"
                                               style={{backgroundColor: 'lightblue'}}>DESTACADO</small> :
                            <small></small>}


                        <div className="d-flex align-items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                                style={{marginRight: "7px"}}
                            >
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            {classifi !== 0 && <small className="text-body-secondary">{classifi}</small>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
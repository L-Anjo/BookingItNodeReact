import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";
import {api} from "../../services/api";
import {AuthContext} from "../../middleware/auth";

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function CreateHouse() {
    const [house, setHouse] = useState({
        name: '',
        price: '',
        services: [{name: '', price: ''}],
    });
    const {refreshToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleHouseChange = (event) => {
        const {name, value} = event.target;

        if (name === "doorNumber" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Nº Porta deve conter apenas letras.',
            });
            return;
        }

        if (name === "floorNumber" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Andar deve conter apenas numeros.',
            });
            return;
        }

        if (name === "guestsNumber" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Número de pessoas deve conter apenas numeros.',
            });
            return;
        }
        if (name === "district" && !/^[a-zA-Z ]+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Distrito deve conter apenas letras.',
            });
            return;
        }
        if (name === "concelho" && !/^[a-zA-Z ]+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Concelho deve conter apenas letras.',
            });
            return;
        }
        if (name === "postalCode" && !/^\d+$/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'O campo Código Postal deve conter apenas letras.',
            });
            return;
        }
        setHouse((prevHouse) => ({...prevHouse, [name]: value}));
    };

    const handleServiceChange = (event, index) => {
        const {name, value} = event.target;
        const updatedServices = [...house.services];
        updatedServices[index] = {...updatedServices[index], [name]: value};
        setHouse((prevHouse) => ({...prevHouse, services: updatedServices}));
    };

    const addServiceField = () => {
        setHouse((prevHouse) => ({
            ...prevHouse,
            services: [...prevHouse.services, {name: '', price: ''}],
        }));
    };

    const removeServiceField = (index) => {
        setHouse((prevHouse) => {
            const updatedServices = [...prevHouse.services];
            updatedServices.splice(index, 1);
            return {...prevHouse, services: updatedServices};
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedServices = house.services.filter(
                (service) => service.name.trim() !== '' || service.price.trim() !== ''
            );
            const updatedHouse = {...house, services: updatedServices};
            const response = await api.post(`/houses`, updatedHouse);

            await refreshToken().then(() => {
                navigate(`/houses/${response.data.data.id}/upload`);
            });

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>

            <div className="wrapper">
                <form onSubmit={onSubmit} className="row g-3" encType="multipart/form-data">

                    <div className="col-12">
                        <label>Nome da Casa</label>
                        <input type="text" className="form-control" name="name" onChange={handleHouseChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label>Numero da Porta</label>
                        <input type="text" className="form-control" name="doorNumber" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="col-md-6">
                        <label>Andar</label>
                        <input type="text" className="form-control" name="floorNumber" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="col-12">
                        <label>Preço</label>
                        <input type="text" className="form-control" name="price" onChange={handleHouseChange} required/>
                    </div>
                    <div className="col-md-6">
                        <label>Num Maximo Pessoas</label>
                        <input type="text" className="form-control" name="guestsNumber" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="col-md-6">
                        <label>Artigo Matricial</label>
                        <input type="text" className="form-control" name="propertyAssessment"
                               onChange={handleHouseChange} required/>
                    </div>
                    <div className="col-md-4">
                        <label>District</label>
                        <input type="text" className="form-control" name="district" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="col-md-4">
                        <label>Concelho</label>
                        <input type="text" className="form-control" name="concelho" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="col-md-4">
                        <label>Codigo Postal</label>
                        <input type="text" className="form-control" name="postalCode" onChange={handleHouseChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Rua</label>
                        <input type="text" className="form-control" name="road" onChange={handleHouseChange} required/>
                    </div>


                    <label>Serviços</label>
                    {house.services.map((service, index) => (
                        <div className="row" key={index}>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Nome Serviço" name="name"
                                       value={service.name} onChange={(e) => handleServiceChange(e, index)}
                                       disabled={index !== house.services.length - 1}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Preço Serviço" name="price"
                                       value={service.price} onChange={(e) => handleServiceChange(e, index)}
                                       disabled={index !== house.services.length - 1}/>
                            </div>
                            <div className="col">
                                {index === house.services.length - 1 && (
                                    <button type="button" onClick={addServiceField}>Adicionar Serviço</button>
                                )}
                            </div>
                            <div className="col">
                                {index !== house.services.length - 1 && (
                                    <button type="button" onClick={() => removeServiceField(index)}>Remover</button>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-success btn-block"/>
                    </div>

                </form>
            </div>
        </div>
    );
}
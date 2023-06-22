import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {api} from "../../services/api";
import {AuthContext} from "../../middleware/auth";

export default function EditHouseUser() {
    const [inputs, setInputs] = useState([]);
    const [postalCode, setPostalCode] = useState([]);
    const [houseStatus, setHouseStatus] = useState([]);
    const [error, setError] = useState([]);
    const MySwal = withReactContent(Swal);
    const redirect = useNavigate();
    const {id} = useParams();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        getHouse(id);
        if (user.isAdmin) {
            getHouseStates();
        }
    }, [id]);

    const getHouse = async (id) => {
        await api
            .get(`/houses/${id}`)
            .then((res) => {
                setInputs(res.data.data);
                getPostalCodeInfo(res.data.data.postalCode);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getPostalCodeInfo = async (id) => {
        await api
            .get(`/postalcodes/${id}`)
            .then((res) => {
                setPostalCode(res.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getHouseStates = async (id) => {
        await api
            .get(`/statushouses`)
            .then((res) => {
                setHouseStatus(res.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((values) => ({...values, [name]: value}));
        setPostalCode((values) => ({...values, [name]: value}));
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        await api
            .put(`/houses/${id}`, inputs)
            .then(async (res) => {
                if (res.data.code === "houseUpdated") {
                    await api.put(`/postalCodes/${id}`, postalCode).then((resp) => {
                        if (resp.data.code == "postalCodeUpdated") {
                            redirect("/admin/houses");
                        }
                    });
                }
            })
            .catch((error) => {
                // Errors
                if (error.response.data.code) {
                    MySwal.fire({
                        title: "Ocorreu um erro ao atualizar!",
                    });
                }

                if (error.response.data.errors) {
                    error.response.data.errors.map((error, key) => {
                        setError((values) => ({
                            ...values,
                            [error.param]: error.msg,
                        }));
                    });
                }
            });
    };

    return (
        <Form noValidate onSubmit={onSubmit}>
            <Form.Group as={Col} md="6" controlId="validationCustomName">
                <Form.Label>Nome da casa</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={inputs.name ?? ""}
                    onChange={handleChange}
                    isValid={!error.name}
                    isInvalid={!!error.name}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomDoorNumber">
                <Form.Label>Número da Porta</Form.Label>
                <Form.Control
                    type="text"
                    name="doorNumber"
                    value={inputs.doorNumber ?? ""}
                    onChange={handleChange}
                    isValid={!error.doorNumber}
                    isInvalid={!!error.doorNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomfloorNumber">
                <Form.Label>Andar</Form.Label>
                <Form.Control
                    type="text"
                    name="floorNumber"
                    value={inputs.floorNumber ?? ""}
                    onChange={handleChange}
                    isValid={!error.floorNumber}
                    isInvalid={!!error.floorNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomprice">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    value={inputs.price ?? ""}
                    onChange={handleChange}
                    isValid={!error.price}
                    isInvalid={!!error.price}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomguestsNumber">
                <Form.Label>Número de hospedes</Form.Label>
                <Form.Control
                    type="text"
                    name="guestsNumber"
                    value={inputs.guestsNumber ?? ""}
                    onChange={handleChange}
                    isValid={!error.guestsNumber}
                    isInvalid={!!error.guestsNumber}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomdistrict">
                <Form.Label>Distrito</Form.Label>
                <Form.Control
                    type="text"
                    name="district"
                    value={postalCode.district ?? ""}
                    onChange={handleChange}
                    isValid={!error.district}
                    isInvalid={!!error.district}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomconcelho">
                <Form.Label>Concelho</Form.Label>
                <Form.Control
                    type="text"
                    name="concelho"
                    value={postalCode.concelho ?? ""}
                    onChange={handleChange}
                    isValid={!error.concelho}
                    isInvalid={!!error.concelho}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustompostalCode">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                    type="text"
                    name="postalCode"
                    value={inputs.postalCode ?? ""}
                    onChange={handleChange}
                    isValid={!error.postalCode}
                    isInvalid={!!error.postalCode}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomroad">
                <Form.Label>Rua</Form.Label>
                <Form.Control
                    type="text"
                    name="road"
                    value={inputs.road ?? ""}
                    onChange={handleChange}
                    isValid={!error.road}
                    isInvalid={!!error.road}
                    required
                />
            </Form.Group>

            <Form.Group
                as={Col}
                md="6"
                controlId="validationCustompropertyAssessment"
            >
                <Form.Label>Artigo Matricial</Form.Label>
                <Form.Control
                    type="text"
                    name="propertyAssessment"
                    value={inputs.propertyAssessment ?? ""}
                    onChange={handleChange}
                    isValid={!error.propertyAssessment}
                    isInvalid={!!error.propertyAssessment}
                    required
                />
            </Form.Group>

            {user.isAdmin ? (
                <Form.Group as={Col} md="6" controlId="validationCustomstatus">
                    <Form.Label>Estado da Casa</Form.Label>
                    <Form.Select
                        name="status"
                        defaultValue="1"
                        value={inputs.status}
                        onChange={handleChange}
                    >
                        {houseStatus.map((status, key) => {
                            return (
                                <option key={key} value={status.id}>
                                    {status.status}
                                </option>
                            );
                        })}
                    </Form.Select>
                </Form.Group>
            ) : (
                ""
            )}

            {/* <label>Serviços</label>
      {house.services.map((service, index) => (
        <div className="row" key={index}>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nome Serviço"
              name="name"
              value={service.name}
              onChange={(e) => handleServiceChange(e, index)}
              disabled={index !== house.services.length - 1}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Preço Serviço"
              name="price"
              value={service.price}
              onChange={(e) => handleServiceChange(e, index)}
              disabled={index !== house.services.length - 1}
            />
          </div>
          <div class="col">
            {index === house.services.length - 1 && (
              <button type="button" onClick={addServiceField}>
                Adicionar Serviço
              </button>
            )}
          </div>
          <div className="col">
            {index !== house.services.length - 1 && (
              <button type="button" onClick={() => removeServiceField(index)}>
                Remover
              </button>
            )}
          </div>
        </div>
      ))} */}

            <p/>

            <Button type="submit">Guardar</Button>
        </Form>
    );
}

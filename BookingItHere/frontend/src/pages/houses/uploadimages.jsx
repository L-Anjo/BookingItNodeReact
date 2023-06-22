import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import FilesUpload from "../../components/fileupload";

/**
 * @author Luís Anjo
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImgUpload() {
    const {id} = useParams();
    const [house, setHouse] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHouse = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/houses/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setHouse(response.data.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchHouse();
    }, [id]);

    return (
        <div>
            <FilesUpload id={id} houseid={house.id} navigate={navigate}/>
        </div>
    );
}
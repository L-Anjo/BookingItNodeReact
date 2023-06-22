import React, {Component} from 'react';
import {api} from "../services/api";

class FilesUpload extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedFile: null,
        imageUrls: [],
    };

    handleFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files,
        });
    };

    handleUpload = async (event) => {
        event.preventDefault();
        const {selectedFile} = this.state;
        const imageUrls = [];

        for (let i = 0; i < selectedFile.length; i++) {
            const formData = new FormData();
            formData.append('file', selectedFile[i], selectedFile[i].name);

            try {
                const response = await api.post('/uploads', formData);
                const imageUrl = response.data.url;
                imageUrls.push(imageUrl);
                console.log(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        try {

            await api.put(`/houses/${this.props.id}/images`, {imageUrls});
            this.setState({
                selectedFile: null,
                imageUrls: [],
            });

            console.log('Imagens atualizadas com sucesso na casa!');
            this.props.navigate(`/users/${this.props.houseid}/houses`);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleUpload} encType="multipart/form-data">
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input
                                className="inputfile"
                                id="file"
                                type="file"
                                name="file"
                                onChange={this.handleFileChange}
                                multiple
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.handleUpload}>
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FilesUpload;

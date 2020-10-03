import React from 'react';

class ImageFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURI: null
        }
    }

    buildImgPreviewTag = () => {
        let imgTag = null;
        if (this.state.imageURI !== null)
            imgTag = (<div className="row">
                <div className="small-9 small-centered columns">
                    <img className="thumbnail" src={this.state.imageURI} alt="no_image_file"></img>
                </div>
            </div>);
        return imgTag;
    }

    readURI = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (ev) {
                this.setState({ imageURI: ev.target.result });
            }.bind(this);
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    handleChange = (e) => {
        this.readURI(e); // maybe call this with webworker or async library?
    }

    render() {
        const imgTag = this.buildImgPreviewTag();

        return <div>
            <label
                // htmlFor={id}
                className="button">
                Upload an image
              </label>
            <input
                type="file"
                onChange={(e) => this.handleChange(e)}
                // onChange={this.handleChange.bind(this)}
                className="show-for-sr" />
            {imgTag}
        </div>;
    }
}

export default ImageFile;
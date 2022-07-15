import React, { Component } from "react";
import ImageBanner from './image/loader.gif';
import Image from 'react-bootstrap/Image'

class LoaderSpinner extends Component {
    render() {
        return (
            <Image src={ImageBanner} />
        );
    }
}
export default LoaderSpinner;
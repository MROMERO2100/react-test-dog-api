import { Component } from "react";
import { fetchImages } from "../helpers/fetchImage";

const styles = {
    layout: {
        display: 'flex',
        flex: 2,
    },
    container: {
        width: '1200px',
    },
    img: {
        width: '300px',
        height: '300px'
    }
}
let images = [''];

class Layout extends Component {

    state = {
        getUrl: [],
    }
    async componentDidMount() {
        const urls = await fetchImages()
            .then((data) => {
                let urlArr = [];
                urlArr.push(data)
                return urlArr
            })
        this.setState({ getUrl: urls })
        //console.log(urls);
    }

    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                {
                    images.map((image, index) =>{
                        return <img style={styles.img} key={index} alt={image} src={`https://images.dog.ceo/breeds/hound-afghan/n02088094_5939.jpg`}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Layout;
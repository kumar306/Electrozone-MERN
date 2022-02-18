import React,{Component} from "react"
import Navbar from "./navbar";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./../App.css";
import Product from "./product";
import {get_mobiles,get_laptops,get_cameras,get_audio} from "../actions/itemActions";

class Categories extends Component {

    componentDidMount() {
        let url=window.location.href;
        console.log(url);
        if(url.includes("mobile"))
            this.props.get_mobiles();
        else if(url.includes("laptop"))
            this.props.get_laptops();
        else if(url.includes("camera"))
            this.props.get_cameras();
        else if(url.includes("audi"))
            this.props.get_audio();
    }
    
    productList = () => {
        const {items} = this.props.items;
        return items.map((item,i) => {
             return <Product key={i} id={item._id} key={i} title={item.title} price={item.price} description={item.description} stars={item.stars} src={item.src} />; 
            });
        }

    
    render() {
        const {items} = this.props.items;
        console.log(items);
        return (
            <>
            <Navbar />
            <br></br>
            <div className="container">
            <div className="home-body"> 
            {this.productList()}
        </div>
        </div>
            </>
        );
    }
}

Categories.propTypes = {
    items:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    items:state.items,
    error:state.error
})

export default connect(mapStatetoProps,{get_mobiles,get_laptops,get_cameras,get_audio})(Categories);
import React,{Component} from "react"
import Navbar from "./navbar";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./../App.css";
import {Link} from "react-router-dom";
import {add_item} from "./../actions/itemActions";

class Dashboard extends Component {
    
    constructor() {
        super();
        this.state = {
            title:"",
            desc:"",
            price:0,
            stars:0,
            src:"",
            category:""
        }
    }
   
    
    add_product = () => {

        const title=this.state.title;
        const price=this.state.price;
        const desc=this.state.desc;
        const stars=this.state.stars;
        const src=this.state.src;
        const category=this.state.category;

        const item={title:title,price:price,description:desc,stars:stars,src:src,category:category};
        console.log(item);
        this.props.add_item(item);
    }
    

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    
    render() {
        return (
            <>
            <Navbar />
            <div style={{backgroundColor:'antiquewhite'}}>
            <br></br>
            <div className="container">

            <div className="row">
                    <div className="col-sm-2">
                    <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal">Add item to productlist</button>
                    </div>
                </div>
                <br></br>

            <div className="home-body">
            
            <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Add item</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                        <label htmlFor="title" className="form-label">Enter title:</label>
                        <input type="text" name="title" className="form-control" id="title" onChange={this.handleChange}></input><br></br>
                        <label htmlFor="price" className="form-label">Enter price:</label>
                        <input type="text" name="price" className="form-control" id="price" onChange={this.handleChange}></input><br></br>
                        <label htmlFor="stars" className="form-label">Enter number of stars:</label>
                        <input type="text" name="stars" className="form-control" id="stars" onChange={this.handleChange}></input><br></br>
                        <label htmlFor="desc" className="form-label">Enter description:</label>
                        <textarea type="text" name="desc" rows="8" cols="5" className="form-control" id="desc" onChange={this.handleChange}></textarea><br></br>
                        <label htmlFor="category" className="form-label">Select category:</label>
                        <select name="category" className="form-select" onChange={this.handleChange}>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Camera">Camera</option>
                            <option value="Audio">Audio</option>
                        </select><br></br>
                        <label htmlFor="src" className="form-label">Enter product image link: (Should be a URL)</label>
                        <input type="text" name="src" className="form-control" id="src" onChange={this.handleChange}></input><br></br>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" onClick={this.add_product} data-bs-dismiss="modal">Add product</button>
                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col-sm">
                <div className="card card-style">
                    <div className="card-body">
                    <h4 className="card-title">Mobiles</h4>
                    <p className="card-text">View our collection of slick mobile phones</p>
                    <Link to="/home/mobiles" className="btn btn-primary">Browse</Link>
                    </div>
                    <img className="card-img-bottom" src="https://www.cnet.com/a/img/SEtkPeF-QMfgzOf_BBXgPu9VUzA=/1200x675/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg" >
                    </img>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card card-style">
                    <div className="card-body">
                    <h4 className="card-title">Laptops</h4>
                    <p className="card-text">View our collection of gorgeous laptops</p>
                    <Link to="/home/laptops" className="btn btn-primary">Browse</Link>
                    </div>
                    <img className="card-img-bottom" src="https://www.pcworld.com/wp-content/uploads/2022/02/bf-laptop-deals-pcw-8.jpg?quality=50&strip=all" 
                    alt="Card image" style={{height:'90%'}}></img>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                <div className="card card-style">
                    <div className="card-body">
                    <h4 className="card-title">Cameras</h4>
                    <p className="card-text">View our collection of sharp matte black cameras</p>
                    <Link to="/home/cameras" className="btn btn-primary">Browse</Link>
                    </div>
                    <img className="card-img-bottom" src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/dslr-camera/desktop/DSLR_P1_900x420.jpg.img.jpg" 
                    alt="Card image"></img>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card card-style">
                    <div className="card-body">
                    <h4 className="card-title">Audio Accessories</h4>
                    <p className="card-text">View our collection of beautiful headphones and speakers</p>
                    <Link to="/home/audio" className="btn btn-primary">Browse</Link>
                    </div>
                    <img className="card-img-bottom" src="https://s3b.cashify.in/gpro/uploads/2020/12/21153108/Earphones-Best-5.jpg" 
                    alt="Card image" style={{height:'91%'}}></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
            </>
        );
    }
}

Dashboard.propTypes = {
    user:PropTypes.object.isRequired,
    items:PropTypes.object.isRequired,
    error:PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    user:state.user,
    items:state.items,
    error:state.error
})

export default connect(mapStatetoProps,{add_item})(Dashboard);
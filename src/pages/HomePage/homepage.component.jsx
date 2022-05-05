import React, {useEffect, }  from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.style.scss'
import {connect} from 'react-redux'
import axios from 'axios'
import { getProducts } from '../../redux/collections/collection.action'

// Maintaining the entire state for the home page with the
// sections array that contributes to give the categories 
// of products

const HomePage = (props) => {


    useEffect(() =>{
        const{sendCollections} = props
        axios.get('http://localhost:8080/get-products')
        .then(response => sendCollections(response.data))
        
    })
    const {sections} = props
        // From the this.state object destructuring sections
        return (
            
            <>
                <div className='homepage'>
                <h1>Welcome to my HomePage</h1>
                {/**sending sections array as a prop */}
                   <Directory sections = {sections}/>
                </div>
            </>
        )
    
}
const mapStateToProps = (state) => ({
    sections: state.directory.sections
})

const mapDispatchToProps = (dispatch) =>(
    {
        sendCollections: allproducts => dispatch(getProducts(allproducts))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
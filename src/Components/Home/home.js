import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/cg';
const Home = () =>{
    return<Fragment>
        <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>Find Ameszing Product below</h1>
            <a href='#conatiner'>
                <button>scroll<CgMouse/></button>
            </a>

        </div>
    </Fragment>;
}
export default Home;
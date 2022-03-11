import React from 'react'
import playStore from '../../images/playstore.jpg'


const Footer= () =>{
    return(
        <div className='footer' style={{marginTop:'10vmax',padding:'2vmax',backgroundColor:'rgb(34,33,33)',colir:'white',display:'flex',alignItems:'center'}}>
            <div className='leftfooter' style={{width:'20%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <p style={{textAlign:'center',fontFamily:'Arial, Helvetica, sans-serif'}}>download playStore</p>
                <img src={playStore} alt="playstore" style={{width:'30%', margin:'1px',cursor:'pointer'}} />
            </div>
            <div className='midfooter' style={{width:'30%', textAlign:'center'}}>
                <h3 style={{fontSize:'4vmax',fontFamily:'Arial, Helvetica, sans-serif',color:'GrayText'}}>Copyright</h3>
            </div>
            <div className='rightfooter' style={{width:'20%', display:'flex', flexDirection:'column', textAlign:'center'}}>
                <h4>follow us</h4>
                <a href=''>instagram</a>
                <a href=''>facebook</a>
                <a href=''>youtube</a>
            </div>
        </div>
    )
}
export default Footer;
import { connect } from "react-redux";
import { signupaction } from "../action/signupaction";


const Signup = (props) =>{
    return(
        <>
        <form>
        <div className="col col-md-8">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="text" className="from-control" placeholder="username" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="email" className="from-control" placeholder="email" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="password" className="from-control" placeholder="password" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="password" className="from-control" placeholder="password2" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="button" className="from-control btn btn-primary" placeholder="SIGNUP" />
                    </div>
                </div>
            </div>
        </div>
        </form>
        </>
    )
}

const mapStateToProps =(state)=>{
    console.log(state.signupreducer.signuperr)
    return{
        user:state.signupreducer.user,
        signuperr:state.signupreducer.err
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signupform:(username, email, password, password2)=>{
            dispatch(signupaction(username, email, password, password2))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
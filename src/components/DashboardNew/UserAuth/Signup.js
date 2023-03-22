import { Col, Form, Row,Alert } from "react-bootstrap";
// import Logo from '../../../assets/images/cbdc/Logo.png'
import LoginBg from '../../../assets/images/cbdc/p06.jpg'
import { Link,useHistory} from "react-router-dom";
import React,{ useState,useRef } from "react";
import { auth } from "../../../NFTFolder/firebase"
import axios from "axios";
//import {firebasess} from '../../../NFTFolder/firebase';
//import { useAuth } from "./contexts/AuthContext"

function HomePage() {
    // const [userName, setUserName] = useState();
    // const [emailRef, setEmailRef] = useState();
    // const [passwordRef, setPasswordRef] = useState();
    // const [passwordConfirmRef, setPasswordConfirmRef] = useState();
    // const [lastName, setlastName] = useState(true);
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
        const signup=(email, password)=> {
            console.log("SignupFunction")
            try{
                return auth.createUserWithEmailAndPassword(email, password)
            }catch(err){
                console.log("FireErr1")
            }            
        }

        // const ProfileStore=async(emails,passwords,firstNames,lastnames)=>{
        //     let ref2=firebasess.database().ref(`userprofileCBDC/${emails}`);                    
        //     let dateset=new Date().toDateString();
        //     ref2.set({            
        //     FirstName:firstNames,LastName:lastnames,TimeStamp:dateset,Email:emails,Password:passwords})
        //     .then(async()=>{             
        //         // handleHideLoad()                
        //         // toast.dismiss()
        //         // toast.success(`Updated Details of The Artist`,{autoClose:5000})
        //         // handleHideLoad()
        //         //await sleep(2000)
        //         //done()
        //     }).catch((err) => {                                    
        //         //handleHideLoad()
        //         //setshowTestLoading(false)                     
        //         // setissuesdisplay("your browser appearing issue")
        //         // setshowTestAlert(true)                      
        //         //console.log(err);
        //         // toast.error(`your browser appearing issue`,{autoClose:3000})
        //         // handleHideLoad()
        //         // done()
        //     });               

        // }
        // const SignUp = async (email, firstName, password) =>
        // {       
        // let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
        //   axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        //   //console.log("done1",response.data);
        //     // console.log("date",date);
        //     let userCreditAmount = 2000;
        //     const options2 = {
        //       method: 'POST',
        //       url: '/platform/v1/userinfo',
        //       headers: {
        //         'x-api-key': `${key}`    
        //       },
        //       data: {
        //         'userId'  :`${email}`,
        //         'userName':`${firstName}`,
        //         'password':`${password}`,
        //         'validuser':"Y",
        //         'role':"Admin",
        //         'userCredits':`${userCreditAmount}`
        //       }
        //     };
            
        //     axios.request(options2).then(function (response2) {
        //      console.log("response",response2);
        //      history.push('/login-cbdc');
        //     //  window.location.reload();
        //     }).catch(function (error) {
        //         console.error("done2",error);
        //     });
        // }
        
    // const signUpApi = async() =>
    // {
    //     try{
    //         if(passwordRef === passwordConfirmRef)
    //         {
    //             await SignUp(emailRef, userName, passwordRef)
    //         }
    //         else
    //         {
    //             console.error("password doesn't match")
    //         }
    //     }catch(err){
    //         console.error(err);
    //     }
    // }

    const SignupFirebase = async()=> {
        //e.preventDefault()    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          //await ProfileStore(emailRef.current.value,passwordRef.current.value,firstName,lastName)
          history.push("/login")
            
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
    }

    return ( 
        <div className="cbdc-columns text-dark">            
            <Row className="gx-0">
            <Col md={12} style={{backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className="cbdc-login px-sm-4 px-3 mx-auto d-flex flex-column">
                        {/* <img src={Logo} height="75px" width="75px" alt="logo" /><br/> */}
                        <div className="card bg-dark border-0 form-middle text-secondary pt-4 m-auto">
                            {/* <div style={{color: "white"}} className="mb-2 text-uppercase">
                                <h2></h2>
                            </div><br/><br/><br/><br/> */}
                            {error && <Alert variant="danger">{error}</Alert>}
                            {/* <Row>
                                <Col sm={6}>
                                    <div className="mb-3">
                                        <label>First name</label>
                                        <input type="text" className='form-control form-control-field border-0' placeholder='Enter your firstname' onChange={event => setfirstName( event.target.value)}/>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="mb-3">
                                        <label>Last name</label>
                                        <input type="text" className='form-control form-control-field border-0' placeholder='Enter your lastname' onChange={event => setlastName( event.target.value)}/>
                                    </div>
                                </Col>
                            </Row> */}
                            <div className="mb-3">
                                <label>Email address</label>
                                <input type="email" className='form-control form-control-field border-0' ref={emailRef} placeholder='Enter your email address' />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input type='password' className='form-control form-control-field border-0' ref={passwordRef} placeholder='Enter your password' /> 
                            </div>
                            <div className="mb-3">
                                <label>Retype password</label>
                                <input type='password' className='form-control form-control-field border-0' ref={passwordConfirmRef} placeholder='Repeat your password' /> 
                            </div><br />
                            <button type='submit' className='mb-4 btn-primary btn w-100' onClick={()=>{SignupFirebase()}}>Start application</button>
                            <p className="text-center">Don’t have an account? <Link to="/login" style={{color: "white"}}><strong style={{textDecorationLine: 'underline', textDecorationLineColor: 'white'}}>Log in</strong></Link></p>

                            {/* <p style={{color: "white"}}><small>By clicking "Start Application" I agree to Mercury's <Link to="/" ><strong style={{color: "white", textDecorationLine: 'underline', textDecorationLineColor: 'white'}}>Terms of Use</strong></Link>, <Link to="/" ><strong style={{color: "white", textDecorationLine: 'underline', textDecorationLineColor: 'white'}}>Privacy Policy</strong></Link> and to receive electronic communication about my accounts and services per Mercury's Electronic Communications Agreement.</small></p> */}
                        </div>
                    </div>
                </Col>
                {/* <Col md={6} className="d-flex cbdc-login-banner"> */}
                    {/* <Link to="/" className="btn btn-white">SAND BOX</Link> */}
                    {/* <img className="col-image img-fluid" src={LoginImage} alt="LeftImage" /> */}
                {/* </Col> */}
            </Row>
        </div>
     );
}

export default HomePage;
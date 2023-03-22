import { Col, Form, Row ,Alert } from "react-bootstrap";
import LoginBg from '../../../assets/images/cbdc/p06.jpg'
import { Link,useHistory,Redirect, useLocation } from "react-router-dom";
import React,{ useState,useRef, useEffect } from "react";
//import { auth } from "../../../NFTFolder/firebase"
import fireDb from "../../../NFTFolder/firebase";
//import firebase from 'firebase/compat/app';
//import firebase from "firebase/app";


const LoginOtp=()=> {
    const [isSubscribed, setIsSubscribed] = useState(true);    
    const [Logged, setLogged] = useState(false);        
    const [MobileNumber,setMobileNumber]= useState([""])  
    const [Confirmationcode,setConfirmationcode]= useState([""])  
    const [OtpCode,enterOtp]= useState([""])  
    const [Otpt, setOtpt] = useState(false);
    const [error, setError] = useState("")    
    const [error2, setError2] = useState("")    
    const history = useHistory()
    const handleChange = event => {
        if (event.target.checked) {
          console.log('Checkbox is checked');
          setIsSubscribed(true)
        } else {
          setIsSubscribed(false)
        }
        //setIsSubscribed(current => !current);
    };

    useEffect(()=>{
        const LoggedNot=async()=>{
            setLogged(localStorage.getItem("Login"))            
        }
        LoggedNot()
    },[])   
    const configureCaptcha = async() =>{
        try{        
        window.recaptchaVerifier = new fireDb.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            this.onSignInSubmit();
            console.log("Recaptca varified")
          },
          defaultCountry: "IN"
        });
        // window.recaptchaVerifier = await new fireDb.auth.RecaptchaVerifier('recaptcha-container', {
        //     'size': 'normal',
        //     'callback': function(response) {
        //         console.log("success", response);
        //     },
        //     'expired-callback': function() {
        //         console.log("expired-callback");
        //     }
        // });
        }catch(e){
            console.log("CaptchaE",e)
        }
    } 
    const login =async () => {  
        if (MobileNumber === "" || MobileNumber.length < 10){
            alert("Enter valid Number")
        }
        else{ 
            await configureCaptcha()           
            const phoneNumber = "+91" + MobileNumber
            console.log(phoneNumber)
            const appVerifier = window.recaptchaVerifier;
            //const appVerifier = await configureCaptcha()
            await fireDb.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setConfirmationcode(confirmationResult)
                setOtpt(true);
                // window.confirmationResult.confirm(code).then((result) => {
                //     // User signed in successfully.
                //     const user = result.user;
                //     console.log(JSON.stringify(user))
                //     alert("User is verified")
                //     // ...
                //   }).catch((error) => {
                //     // User couldn't sign in (bad verification code?)
                //     // ...
                //   });
                
                console.log("OTP has been sent")
                setError("")
                setError2("OTP has been sent")
                // localStorage.setItem("Login",true)
                // history.push("/home")
                // ...
                }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log("SMS not sent")
                setError2("")
                setError("SMS not sent,Failed to log in")
                });                

        }
            
    }

    const OtpCheck=()=>{
        Confirmationcode.confirm(OtpCode).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user))
        console.log("User is verified")
        localStorage.setItem("Login",true)
        setError("")
        setError2("User is verified")
        history.push("/home")
        // ...
        }).catch((error) => {
            console.log("OTPERR",error)
            setError2("")
            setError("OTP not match,Failed to log in")
        // User couldn't sign in (bad verification code?)
        // ...
        });

    }
    // const login=async()=>{
    //     console.log("LoginFunction")
    //     try{
    //         const phoneNumber = "+91" + MobileNumber
    //         console.log(phoneNumber)                        
    //         const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container-id', undefined, auth);
    //         await fireDb.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
    //             .then((confirmationResult) => {
    //             // SMS sent. Prompt user to type the code from the message, then sign the
    //             // user in with confirmationResult.confirm(code).
    //             window.confirmationResult = confirmationResult;
    //             console.log("OTP has been sent")
    //             localStorage.setItem("Login",true)
    //             history.push("/home")
    //             // ...
    //             }).catch((error) => {
    //             // Error; SMS not sent
    //             // ...
    //             console.log("SMS not sent")
    //             console.log("error",error)
    //             });
    //     }catch(err){
    //         console.log("FireErr1",err)
    //     }                    
    // }
    // const LoginNew=async()=>{
    //     //e.preventDefault()    
    //     try {
    //       setError("")
    //       setLoading(true)
    //       await login(emailRef.current.value)
    //       if(isSubscribed){
    //         localStorage.setItem("Login",true)
    //         history.push("/home")
    //       }else{
    //         history.push("/home")
    //       }                    
    //     } catch(e) {
    //         console.log("Error",e)
    //         setError("Failed to log in")
    //     }
    
    //     setLoading(false)
    // }  

      if(localStorage.getItem('Login') === false || localStorage.getItem('Login') === null || localStorage.getItem('Login') === undefined || localStorage.getItem('Login') === "" || localStorage.getItem('Login') === "false"){
        return ( 
            <div className="cbdc-columns text-dark">                        
            <div id="recaptcha-container"></div>          
                <Row className="gx-0">                    
                    <Col md={12} style={{backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <div className="cbdc-login px-sm-4 px-3 mx-auto d-flex flex-column">
                            {/* <img src={Logo} height="75px" width="75px" alt="logo" /> */}
                            <div className="card bg-dark border-0 form-middle text-secondary pt-4 m-auto">
                                {/* <div className="mb-2 text-uppercase" style={{color: "white"}}>
                                    <h2></h2>
                                </div> */}
                                {error && <Alert variant="danger">{error}</Alert>}
                                {error2 && <Alert variant="success">{error2}</Alert>}
                                {Otpt ? (
                                    <div className="mb-3">
                                        <label>OTP</label>
                                        <input type="text" className='form-control form-control-field border-0' value={OtpCode} placeholder='Enter OTP' onChange={event => enterOtp( event.target.value)}/>
                                        <br />
                                        <button type='submit' className='btn-secondary mb-4 btn w-100' onClick={()=>{OtpCheck()}}>Log In</button>                                    
                                    </div>                                                                    
                                ):(
                                    <div className="mb-3">
                                        <label>Mobile number</label>
                                        <input type="text" className='form-control form-control-field border-0' value={MobileNumber} placeholder='Enter your mobile number' onChange={event => setMobileNumber( event.target.value)}/>
                                        <br />
                                        <button type='submit' className='mb-4 btn btn-primary w-100' onClick={()=>{login()}}>Send OTP</button>
                                    </div>
                                )}
                                

                                
                                {/* <div className="mb-3">
                                    <label>Password</label>
                                    <div className="position-relative">
                                        <input type={pass ? 'password' : 'text'} className='form-control form-control-field border-0' ref={passwordRef} placeholder='Enter  password' />
                                        <span className="password-icon" onClick={() => setPass(!pass)}>
                                            {pass ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg>
                                            ):(
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                </div> */}                      
                                <div id="recaptcha-container"></div>          
                                {/* {Otpt ? (
                                    <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{OtpCheck()}}>Log In</button>                                    
                                ):(
                                    <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{login()}}>Send OTP</button>
                                )} */}
                                {/* <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{login()}}>Log In</button> */}
                                <p className="text-center">Or</p>                                
                                <p className="text-center">Don’t have an account? <Link to="/signup-cbdc" style={{color: "white"}}><strong style={{textDecorationLine: 'underline', textDecorationLineColor: 'white'}}>Sign up with mail</strong></Link></p>
                            </div>
                        </div>
                    </Col>
                    {/* <Col md={6} className="d-flex cbdc-login-banner"> */}
                        {/* <Link to="/" className="btn btn-white">SAND BOX</Link>
                        <img className="col-image img-fluid" src={LoginImage} alt="LeftImage" /> */}
                    {/* </Col> */}
                </Row>
            </div>
        );
      }    
      else if(localStorage.getItem('Login') === true || localStorage.getItem('Login') || localStorage.getItem('Login') ==="true" ){    
            return <Redirect to="/home" />;
      }
      else{
        return ( 
            <div className="cbdc-columns text-dark">                        
            <div id="recaptcha-container"></div>          
                <Row className="gx-0">                    
                    <Col md={12} style={{backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <div className="cbdc-login px-sm-4 px-3 mx-auto d-flex flex-column">
                            {/* <img src={Logo} height="75px" width="75px" alt="logo" /> */}
                            <div className="form-middle pt-5 pt-md-0 m-auto">
                                <div className="mb-2 text-uppercase" style={{color: "white"}}>
                                    <h2></h2>
                                </div>
                                {error && <Alert variant="danger">{error}</Alert>}
                                {error2 && <Alert variant="success">{error2}</Alert>}
                                {Otpt ? (
                                    <div className="mb-3">
                                        <label style={{color: "white"}}>OTP</label>
                                        <input type="text" className='form-control form-control-field border-0' value={OtpCode} placeholder='Enter OTP' onChange={event => enterOtp( event.target.value)}/>
                                        <br></br>
                                        <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{OtpCheck()}}>Log In</button>                                    
                                    </div>                                                                    
                                ):(
                                    <div className="mb-3">
                                        <label style={{color: "white"}}>Mobile number</label>
                                        <input type="text" className='form-control form-control-field border-0' value={MobileNumber} placeholder='Enter your mobile number' onChange={event => setMobileNumber( event.target.value)}/>
                                        <br></br>
                                        <button type='submit' className='mb-4 btn btn-white w-100' onClick={()=>{login()}}>Send OTP</button>
                                    </div>
                                )}
                                

                                
                                {/* <div className="mb-3">
                                    <label>Password</label>
                                    <div className="position-relative">
                                        <input type={pass ? 'password' : 'text'} className='form-control form-control-field border-0' ref={passwordRef} placeholder='Enter  password' />
                                        <span className="password-icon" onClick={() => setPass(!pass)}>
                                            {pass ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg>
                                            ):(
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                </div> */}                      
                                <div id="recaptcha-container"></div>          
                                {/* {Otpt ? (
                                    <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{OtpCheck()}}>Log In</button>                                    
                                ):(
                                    <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{login()}}>Send OTP</button>
                                )} */}
                                {/* <button type='submit' className='btn-dark mb-4 btn w-100' onClick={()=>{login()}}>Log In</button> */}
                                <p style={{color: "white"}} className="text-center">Or</p>                                
                                <p style={{color: "white"}} className="text-center">Don’t have an account? <Link to="/signup-cbdc" style={{color: "white"}}><strong style={{textDecorationLine: 'underline', textDecorationLineColor: 'white'}}>Sign up with mail</strong></Link></p>
                            </div>
                        </div>
                    </Col>
                    {/* <Col md={6} className="d-flex cbdc-login-banner"> */}
                        {/* <Link to="/" className="btn btn-white">SAND BOX</Link>
                        <img className="col-image img-fluid" src={LoginImage} alt="LeftImage" /> */}
                    {/* </Col> */}
                </Row>
            </div>
        );
      }
}

export default LoginOtp;
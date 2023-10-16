import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import axios from 'axios'

function Otp(){

    const INITIAL_REGISTER_OBJ = {
        fname : "",
        lname : "",
        password : "",
        emailId : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = async (e) =>{
        e.preventDefault()
        setErrorMessage("")

        // if(registerObj.fname.trim() === "")return setErrorMessage("First Name is required!")
        // if(registerObj.lname.trim() === "")return setErrorMessage("Last Name is reqired!")
        // if(registerObj.password.trim() === "")return setErrorMessage("Password is required!")
        // if(registerObj.fname.trim() === "")return setErrorMessage("Name is required! (use any value)")
        // if(registerObj.emailId.trim() === "")return setErrorMessage("Email Id is required! (use any value)")
        // if(registerObj.password.trim() === "")return setErrorMessage("Password is required! (use any value)")
        // else{
            setLoading(true)
            await fetch("http://localhost:3001/user/createUser", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    firstname: registerObj.fname,
                    lastname: registerObj.lname,
                    password: registerObj.password,
                    emailId: registerObj.emailId
                })
            }).then((data) => { 
                const res = data.json()        
                console.log(res)
            })
          
            setLoading(false)
          
        // }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setRegisterObj({...registerObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText defaultValue={registerObj.fname} updateType="fname" containerStyle="mt-4" labelTitle="First Name" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.lname} updateType="lnam" containerStyle="mt-4" labelTitle="Last Name" updateFormValue={updateFormValue}/>
                            
                            <InputText defaultValue={registerObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>

                        <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Otp
import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function EditCustomerProfile(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Edit Details" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="First Name" defaultValue="Juan" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Middle Name" defaultValue="Reyes" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Last Name" defaultValue="Dela Cruz" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Email Address" defaultValue="juandelacruz@gmail.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Shipping Address" defaultValue="Espana Blvd., Sampaloc, Manila, Philippines 1008." updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Mobile Number" defaultValue="09123456789" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default EditCustomerProfile
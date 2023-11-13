import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import { useNavigate } from "react-router-dom"

function EditAppointments(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateAppointment = () => {
        dispatch(showNotification({message : "Appointment Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        updateAppointment();
        navigate("/app/appointments");
        // Do something else
      };

    return(
        <>
            
            <TitleCard title="Edit Details" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Customer Name" defaultValue="Juan" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Service Name" defaultValue="Reyes" updateFormValue={updateFormValue}/>

                <div className="font-openSans pl-3 pb-6 py-3">
                            Select Date and Time <br></br>    
                <div>
                <form class="text-start  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <label for="datetime"></label>
                    <input
                        id="datetime"
                        type="datetime-local"
                        name="partydate"
                        min="2024-06-01T08:30"
                        max="2028-06-30T16:30" />
                    </form>
                </div>
                </div>
                </div>
                <div className="divider" ></div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => handleButtonClick()}>Update Appointment</button></div>
            </TitleCard>
        </>
    )
}


export default EditAppointments
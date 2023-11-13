import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import { RECENT_STATUS } from "../../../utils/dummyData"
import { useNavigate } from "react-router-dom"

function AddNewAppointments(){

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const statusFilters = ["In Stock", "Out of Stock"]
    const productFilters = ["Tires", "Battery", "Tire Mags", "Oils", "Filters"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    const [trans, setTrans] = useState(RECENT_STATUS)

    const removeFilter = () => {
        setTrans(RECENT_STATUS)
    }

    const applyFilter = (params) => {
        let filteredStatus = RECENT_STATUS.filter((t) => {return t.category == params})
        setTrans(filteredStatus)
    }

    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const addNewAppointments = () => {
        dispatch(showNotification({message : "New Appointment Added", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        addNewAppointments();
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

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => handleButtonClick()}>Add New Appointment</button></div>
            </TitleCard>
        </>
    )
}


export default AddNewAppointments
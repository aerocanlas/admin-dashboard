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
import DatePicker from 'react-datetime';
import { useNavigate } from "react-router-dom"

function AddNewService(){

    const [date, setDate] = useState(new Date('2022-02-02 00:00:00'));

  const handleChange = (newDate) => {
    setDate(newDate);
  };
    
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
    const addNewService = () => {
        dispatch(showNotification({message : "New Service Added", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        addNewService();
        navigate("/app/services");
        // Do something else
      };
    
    const App = () => {
        const [selectedDate, setSelectedDate] = useState(new Date());
      
        const handleChange = (date) => {
          setSelectedDate(date);
        };
    }

    let maskPlaceholderValue;
    maskPlaceholderValue = { day: 'Choose Day', month: 'Choose Month', year: 'Choose Year', hour: 'h', minute: 'm', second: 's' };


    return(
        <>
            
            <TitleCard title="Edit Details" topMargin="mt-2">
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <InputText labelTitle="Service Name" placeholder="Input service name" updateFormValue={updateFormValue}/>
                    
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
                    

                    <form >
                        <div>
                        <label for="quantity" class="block mb-2 text-sm text-gray-900 dark:text-white">Product Description</label>
                        <input type="text" id="quantity" class="text-start placeholder:-translate-y-6 w-100 h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Insert description here" required></input>
                        </div>                 
                    </form>

                    </div>
                <div className="divider" ></div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => handleButtonClick()}>Add New Service</button></div>
                
            </TitleCard>
        </>
    )
}


export default AddNewService
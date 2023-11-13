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

function AddNewProducts(){

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
    const AddNewProducts = () => {
        dispatch(showNotification({message : "New Product Added", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        AddNewProducts();
        navigate("/app/products");
        // Do something else
      };

    return(
        <>
            
            <TitleCard title="Edit Details" topMargin="mt-2">
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <InputText labelTitle="Product Name" placeholder="Input product name" updateFormValue={updateFormValue}/>
                    
                        <div className="pl-3 pb-6">
                            Product Status <br></br> 

                            <div className="dropdown dropdown-bottom dropdown-end pt-3">
                                <label tabIndex={0} className="btn btn-sm btn-outline">Choose Product Status<ChevronDownIcon className="pl-2 w-4 mr-1"/></label>
                                <ul tabIndex={0} className="dropdown-content menu p-1 text-sm shadow bg-base-100 rounded-box w-52">
                            {
                                statusFilters.map((l, k) => {
                                    return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                                })
                            }
                                <div className="divider mt-0 mb-0"></div>
                                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                                        </ul>
                        </div>


                            </div>
                    

                    <div className="pl-3 pb-6">
                        Product Category <br></br> 

                            <div className="dropdown dropdown-bottom dropdown-end pt-3">
                                <label tabIndex={0} className="btn btn-sm btn-outline">Choose Product Category<ChevronDownIcon className="pl-2 w-4 mr-1"/></label>
                                <ul tabIndex={0} className="dropdown-content menu p-1 text-sm shadow bg-base-100 rounded-box w-52">
                            {
                                productFilters.map((l, k) => {
                                    return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                                })
                            }
                                 <div className="divider mt-0 mb-0"></div>
                                        <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                                            </ul>
                    </div>

                            </div>
                    

                    <InputText labelTitle="Price" placeholder="Input product price" updateFormValue={updateFormValue}/>

                    <form >
                        <div>
                        <label for="quantity" class="block mb-2 text-sm text-gray-900 dark:text-white">Product Description</label>
                        <input type="text" id="quantity" class="text-start placeholder:-translate-y-6 w-100 h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Insert description here" required></input>
                        </div>                 
                    </form>

                    </div>
                <div className="divider" ></div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => handleButtonClick()}>Add New Product</button></div>
                
            </TitleCard>
        </>
    )
}


export default AddNewProducts
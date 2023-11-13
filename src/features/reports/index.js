import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import { RECENT_TYPE } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import InputText from '../../components/Input/InputText'
import { useNavigate } from "react-router-dom";


const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const productFilters = ["Daily", "Weekly", "Monthly"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if(searchText == ""){
            removeAppliedFilter()
        }else{
            applySearch(searchText)
        }
    }, [searchText])

    return(
        <div className="inline-block float-right">

            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
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
    )
}


function Transactions(){

    const navigate = useNavigate();

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const typeFilters = ["Sales Report"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    const [trans, setTrans] = useState(RECENT_TYPE)

    const removeFilter = () => {
        setTrans(RECENT_TYPE)
    }

    const applyFilter = (params) => {
        let filteredType = RECENT_TYPE.filter((t) => {return t.category == params})
        setTrans(filteredType)
    }


    // Search according to name
    const applySearch = (value) => {
        let filteredType = RECENT_TYPE.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredType)
    }
    
    const dispatch = useDispatch()

     // Call API to update profile settings changes
     const generateReport = () => {
        dispatch(showNotification({message : "Report Generated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const handleButtonClick = () => {
        generateReport();
        // Do something else
      };

    return(
        <>
            
            <TitleCard title="Generate Reports" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="pl-3 pb-6">
                        Choose Report <br></br> 

                    <div className="dropdown dropdown-bottom dropdown-end pt-3">
                        <label tabIndex={0} className="btn btn-sm btn-outline">Choose Report Type<ChevronDownIcon className="pl-2 w-4 mr-1"/></label>
                        <ul tabIndex={0} className="dropdown-content menu p-1 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                        typeFilters.map((l, k) => {
                            return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Selection</a></li>
                </ul>
            </div>


                    </div>

                    


                {/* Team Member list in table format loaded constant
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Status</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            trans.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.productID}</td>
                                    <td>{l.productName}</td>
                                    <td>{l.productStatus}</td>
                                    <td>{l.category}</td>
                                    <td>{l.price}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" ><PencilSquareIcon className="w-5"/></button>
                                        <button className="btn btn-square btn-ghost" ><TrashIcon className="w-5"/></button>
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> */}
            </div>

            <div className="divider" ></div>

            <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => handleButtonClick()}>Generate Report</button></div>

            </TitleCard>
        </>
    )
}


export default Transactions
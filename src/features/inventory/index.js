import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon'
import MinusCircleIcon from '@heroicons/react/24/outline/MinusCircleIcon'
import InputText from '../../components/Input/InputText'



const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const productFilters = ["Car Battery", "Tires", "Tire Mags", "Brake Fluid", "Engine Oil"]

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


function Inventory(){


    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.category == params})
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    const getInventoryStatus = (productStatus) => {
        if(productStatus  === "In Stock - Available")return <div className="badge badge-success">{productStatus}</div>
        if(productStatus=== "In Stock - Critical")return <div className="badge badge-warning">{productStatus}</div>
        else return <div className="badge badge-ghost">{productStatus}</div>
    }

    return(
        <>
            
            <TitleCard title="Product List" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Status</th>
                        <th>Category</th>
                        <th className="pl-10">Actions</th>
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
                                    <td>#{l.productID}</td>
                                    <td>{l.productName}</td>
                                    <td>{getInventoryStatus(l.productStatus)}</td>
                                    <td>{l.category}</td>
                
                                    <td>
                                        <div class="flex align-items-center">
                                    <button className=" btn btn-square btn-ghost" ><MinusCircleIcon className="w-5"/></button>
                                        <form >
                                            <div>
                                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                            <input type="text" id="quantity" class=" w-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required></input>
                                            </div>
                                            
                                        </form>
                                        <button className=" btn btn-square btn-ghost" ><PlusCircleIcon className="w-5"/></button>
                                        </div>  
                                    </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Inventory
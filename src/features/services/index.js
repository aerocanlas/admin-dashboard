import moment from "moment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"

import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import { openModal } from "../common/modalSlice"
import { deleteService, getLeadsContent } from "./leadSlice"

const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const navigate = useNavigate();

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

    const dispatch = useDispatch()

    const openAddNewLeadModal = () => {
        dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => navigate("/app/add-new-service")}>Add New Service</button>
        </div>
    )
    
}


function Transactions(){
    const dispatch = useDispatch()
    const navigate = useNavigate();

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
    const deleteService = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this user?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }

    return(
        <>
            
            <TitleCard title="Services List" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Service ID</th>
                        <th>Service Name</th>
                        <th>Service Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            trans.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>#{l.productID}</td>
                                    <td>Preventive Maintenance</td>
                                    <td>Available</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => navigate("/app/edit-service-details")}><PencilSquareIcon className="w-5"/></button>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteService(k)}><TrashIcon className="w-5"/></button>
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


export default Transactions
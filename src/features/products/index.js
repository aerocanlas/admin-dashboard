import moment from "moment"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../common/modalSlice"
import { deleteLead, getProductsContent } from "./leadSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'


const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {
    const dispatch = useDispatch()

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const productFilters = ["Car Battery", "Tires", "Tire Mags", "Brake Fluid", "Engine Oil"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const openAddNewProductModal = () => {
        dispatch(openModal({title : "Add New Product", bodyType : MODAL_BODY_TYPES.PRODUCT_ADD_NEW}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewProductModal()}>Add New Product</button>
        </div>
    )

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
            
        <div className="inline-block float-right pl-5">
            <button className="btn px-6 btn-sm normal-case btn-primary">Add New</button>
        </div>

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

const STATUS = [
    {status : "Pending"},

    {status : "Pending"},

    {status : "Pending"},

]

function Transactions(){

    const [status, setStatus] = useState(STATUS)

    const {leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsContent())
    }, [])

    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.category == params})
        setTrans(filteredTransactions)
    }
    
    const deleteCurrentLead = (index) => {
        dispatch(openModal({title : "Confirmation", bodyType : MODAL_BODY_TYPES.CONFIRMATION, 
        extraObject : { message : `Are you sure you want to delete this product?`, type : CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index}}))
    }

    const navigate = useNavigate();

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    const getPaymentStatus = (status) => {
        if(status  === "Paid")return <div className="badge badge-success">{status}</div>
        if(status  === "Pending")return <div className="badge badge-primary">{status}</div>
        else return <div className="badge badge-ghost">{status}</div>
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
                                                    <img src={`https://www.motolite.ph/images/bat3.webp`} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>#{l.productID}</td>
                                    <td>{l.productName}</td>
                                    <td>In Stock</td>
                                    <td>{l.category}</td>
                                    <td>{l.price}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => navigate("/app/edit-product-details")}><PencilSquareIcon className="w-5"/></button>
                                        <button className="btn btn-square btn-ghost" ><TrashIcon className="w-5"/></button>
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
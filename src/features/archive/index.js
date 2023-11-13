import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from '../common/headerSlice'
import { deleteLead, getLeadsContent } from "./leadSlice"
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import { openModal } from "../common/modalSlice"


const BILLS = [
    {invoiceNo : "#4567", amount : "23,989", description : "Product Usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*1, 'days').format("DD MMM YYYY"),  paidOn : "-"},

    {invoiceNo : "#4523", amount : "34,989", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*2, 'days').format("DD MMM YYYY"), paidOn : "-"},

    {invoiceNo : "#4453", amount : "39,989", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*3, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*2, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#4359", amount : "28,927", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*4, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*3, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3359", amount : "28,927", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*5, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*4, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3367", amount : "28,927", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*6, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*5, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#3359", amount : "28,927", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*7, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*6, 'days').format("DD MMM YYYY")},

    {invoiceNo : "#2359", amount : "28,927", description : "Product usages", action : "Generated Report", generatedOn : moment(new Date()).add(-30*8, 'days').format("DD MMM YYYY"), paidOn : moment(new Date()).add(-24*7, 'days').format("DD MMM YYYY")},


]

function Archive(){

    const dispatch = useDispatch()


    const [bills, setBills] = useState(BILLS)

    const getAction = (action) => {
        if(action  === "Generated Report")return <div className="badge badge-success">{action}</div>
        if(action === "Added New Product")return <div className="badge badge-primary">{action}</div>
        else return <div className="badge badge-ghost">{action}</div>
    }

    return(
        <>
            
            <TitleCard title="Report Archive" topMargin="mt-2">

                {/* Invoice list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Archive ID</th>
                        <th>Administrator Name</th>
                        <th>Date Created</th>
                        <th>Action</th>
                        <th>View Report</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bills.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>{l.invoiceNo}</td>
                                    <td>Juan Dela Cruz</td>
                                    <td>{l.generatedOn}</td>
                                    <td>{getAction(l.action)}</td>
                                    <td>Insert Viewable File Here</td>
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


export default Archive
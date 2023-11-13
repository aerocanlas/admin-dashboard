import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

import AddNewAppointments from '../../features/settings/addnewappointments'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add New Appointments"}))
      }, [])


    return(
        <AddNewAppointments />
    )
}

export default InternalPage
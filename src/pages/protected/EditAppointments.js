import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import EditAppointments from '../../features/settings/editappointments'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Edit Appointments"}))
      }, [])


    return(
        <EditAppointments />
    )
}

export default InternalPage
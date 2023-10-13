import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import EditCustomerProfile from '../../features/settings/editcustomerprofile'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer Profile Settings"}))
      }, [])


    return(
        <EditCustomerProfile />
    )
}

export default InternalPage
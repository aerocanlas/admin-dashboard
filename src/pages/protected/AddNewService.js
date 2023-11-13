import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AddNewService from '../../features/settings/addnewservice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add New Service"}))
      }, [])


    return(
        <AddNewService />
    )
}

export default InternalPage
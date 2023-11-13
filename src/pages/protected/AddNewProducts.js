import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AddNewProducts from '../../features/settings/addnewproducts'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add New Service"}))
      }, [])


    return(
        <AddNewProducts />
    )
}

export default InternalPage
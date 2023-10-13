import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import EditProductDetails from '../../features/settings/editproductdetails'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Edit Product Details"}))
      }, [])


    return(
        <EditProductDetails />
    )
}

export default InternalPage
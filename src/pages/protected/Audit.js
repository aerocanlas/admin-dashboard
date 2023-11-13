import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

import Audit from '../../features//audit'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Audit Logs"}))
      }, [])


    return(
        <Audit />
    )
}

export default InternalPage
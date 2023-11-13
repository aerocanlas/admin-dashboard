import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

import Archive from '../../features/archive'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Report Archive"}))
      }, [])


    return(
        <Archive />
    )
}

export default InternalPage
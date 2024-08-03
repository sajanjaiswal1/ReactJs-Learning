import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    // let countStore = useSelector(store=>store)
    // let count = countStore.count

    // let count = useSelector(store=>store.count)

    let {count} =useSelector (store=>store.counterStore)
    let dispatch = useDispatch()
  return (
    <>

    <div>
        <h1>
            ReduxCounter: {count}
        </h1>
        <button onClick={()=>
        dispatch({type: "INCREASE"})}>
            Increase Count
        </button>
        <button onClick={()=>
        dispatch({type: "DECREASE"})}>
            Deccrease Count
        </button>
        <button onClick={()=>
        dispatch({type: "RESET"})}>
            Reset
        </button>
    </div>




    {/* <div>
        ReduxCounter: {count}
    </div>
     */}
    </>
  )
}

export default ReduxCounter
import React,{useContext} from 'react'
import {FirstName, LastName} from '../App'

const UseContextHooks = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <div>
            My Name is {fname} {lname}
        </div>
    )
}

export default UseContextHooks

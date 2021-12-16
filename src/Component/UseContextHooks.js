import React, { useContext } from 'react'
import { FirstName, LastName } from '../App'

const UseContextHooks = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        // <div>
        //     My Name is {fname} {lname}
        // </div>
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                        <div>
                                             My Name is {fname} {lname}
                                        </div>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }
                }
            </FirstName.Consumer>
        </>
    )
}

export default UseContextHooks

import React,{useEffect, useState} from 'react'

const ArrayHooks = () => {

    let arrayObject = [
        {name: 'Rahul', age: '30'},
        {name: 'Priyanka', age: '28'},
        {name: 'Darshan', age: '28'},
        {name: 'Pranali', age: '26'},
        {name: 'Ganesh', age: '28'},
        {name: 'Deepali', age: '26'},
        {name: 'Arvind', age: '40'},
        {name: 'Arpita', age: '38'}
    ]

   

    const [data , setName] = useState(arrayObject)

    useEffect(()=>{
        alert("hey there")
    },[])

    //event

    const ClearData = () => {
        setName([{name:'NA', age:'NA'}])
    }
        
     return (
        <> 
        {
           data.map((bioData, key) => <h5>My Name is {bioData.name} and Age is {bioData.age}</h5>)
        } 
        <button onClick={ClearData}>Clear Data</button> 
        </>
    
    )
}

export default ArrayHooks

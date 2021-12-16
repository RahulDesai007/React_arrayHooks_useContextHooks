import React,{createContext} from 'react'
import './App.css';
import ArrayHooks from './Component/ArrayHooks';
import ContextHooks from './Component/UseContextHooks';
import RefComponent from './Component/RefComponent';


const FirstName = createContext()
const LastName = createContext()

function App() {
  return (
    <div className="App">
      {/* <ArrayHooks/> */}
      <FirstName.Provider value={"Rahul"}>
        <LastName.Provider value={"Dravid"}>
        <RefComponent/>
        </LastName.Provider>
      </FirstName.Provider>

    </div>
  );
}

export default App;
export{FirstName, LastName}

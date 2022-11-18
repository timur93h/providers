import React, {useEffect} from 'react';
import './App.css';
import {useBaseProvider} from "../providers/Base.provider";
import { DummyComponentNoRerender} from "./dummy/Dummy.component";
import {DummyRerenderComponent} from "./dummy/DummyRerender.component";
import {DummyNavComponent} from "./dummy/DummyNav.component";

function App() {

    const {name, setName} = useBaseProvider()

    useEffect(()=>{
        // reset provider name to check rerender if any
        setTimeout(()=>setName('Unknown'),5000)
    },[setName])

      return (
        <div className="App">
          <header className="App-header">
            <p>
              Just a quick provider test for my team mate {name}
            </p>
              <DummyComponentNoRerender/>
              <DummyRerenderComponent/>
              <p> For Nav Provider </p>
              <DummyNavComponent/>
          </header>
        </div>
      );
}

export default App;

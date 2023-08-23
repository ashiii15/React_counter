import './App.css';
import React from 'react'
import ClassCounter from './Components/ClassCounter'
import HookCounter from './Components/HookCounter'
import HookcounterTwo from './Components/HookcounterTwo';
import HookcounterThree from './Components/HookcounterThree';
import HokcounterFour from './Components/HokcounterFour';
import ClasscomponentOne from './Components/ClasscomponentOne';
import HookCounterfive from './Components/HookCounterfive';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import Mousecontainer from './Components/Mousecontainer';
import ClassCounterone from './Components/ClassCounterone';
import HookcounterOne from './Components/HookcounterOne';
import Datafetching from './Components/Datafetching';
import ComponentC from './ComponentC';
import ReducerCounter from './Components/ReducerCounter';
 export const UseContex = React.createContext()



function App() {

  return (
    <div className="App">
      <ReducerCounter></ReducerCounter>
      {/* <UseContex.Provider value={"Ashikpa"}>
        <ComponentC></ComponentC>
      </UseContex.Provider> */}
    
      
    {/* //   <Datafetching></Datafetching> */}
      {/* <ClassCounterone></ClassCounterone>
      <HookcounterOne></HookcounterOne> */}
      {/* <Mousecontainer></Mousecontainer> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookCounterfive></HookCounterfive> */}
      {/* <ClasscomponentOne></ClasscomponentOne> */}
      {/* <HokcounterFour></HokcounterFour> */}
      {/* <HookcounterThree></HookcounterThree> */}
      {/* <HookcounterTwo></HookcounterTwo> */}
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}
    </div>
  );
}

export default App;

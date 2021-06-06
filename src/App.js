import React from "react";
import ProfilePhoto from "./components/Profile/ProfilePhoto"
import FullName from "./components/Profile/FullName"
import Address from "./components/Profile/Address"
import './App.css';


function App() {
 return (
   <>
   <div className="App">


     <h2 className="title"> Hello from my first component Checkpoint</h2>

     <ProfilePhoto/>
     <br/>
     <FullName/>
     <br/>
     <Address/>

     </div>
   </>
 );
};
export default App;
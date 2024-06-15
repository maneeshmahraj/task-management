
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import EmptotalData from "./EmptotalData";

const App=()=> {

  
 return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="insert" element={<Insert/>}/>
         <Route path="display" element={<Display/>}/>
         <Route path="record" element={<EmptotalData/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
 ) 

}

export default App;

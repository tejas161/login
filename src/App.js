import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import {Routes,Route} from 'react-router-dom';


const App = () => {

return(
<Routes>
<Route path='/' element={<Login/>} />
<Route path='/signup' element={<Signup/>}/>
</Routes>
)


}


export default App;
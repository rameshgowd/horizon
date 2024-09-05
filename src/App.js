
import {useState} from 'react'
import Settings from "./components/Settings"
import Menu from "./components/Menu" 

import './App.css'


const App = () => {
    const [language, setLanguage] = useState("en");
    
    const handleLanguageChange =(newLanguage) => {
        setLanguage(newLanguage)
    }
    
    return(

        <div className='app'>
            <Settings onLanguageChange ={handleLanguageChange}/>
            <Menu language ={language}/>

        </div>
        

    )
} 
export default App
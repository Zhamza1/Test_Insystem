import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Error from "./components/Error"
import GlobalStyle from "./utils/style/GlobalStyle"
import { ThemeProvider } from "./utils/context"


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle/>
                <Header/> 
                <Routes>
                        <Route path="*" element={<Error/>} />   
                        <Route exact path="/" element={<Home/>}/>
                </Routes>
            </ThemeProvider>
        </Router>
    
    </React.StrictMode>,
)
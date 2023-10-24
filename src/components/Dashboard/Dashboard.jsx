import React from "react";
import { useNavigate } from "react-router-dom";
import './estilo.scss'
import ClienteLogado from "./ClienteLogado";


const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
            <ClienteLogado cliente={cliente} />
            
        </div>
    )
}


export default Dashboard;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Adicionado aqui

function Dashboard() {
    const [hover, setHover] = useState(false);
    const navegar = useNavigate(); // ⬅️ Hook para navegação

    const fundoInicio = {
        backgroundColor: '#CDD5C6',
        minHeight: '100vh',
    };
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;

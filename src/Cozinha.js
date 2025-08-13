import { useEffect, useState } from "react";

export default function Cozinha() {
    const [ambiente, setAmbiente] = useState(null);

    useEffect(() => {
        fetch("/dadosResidencia.json")
            .then(res => res.json())
            .then(data => {
                setAmbiente(data.residencia.cozinha);
            });
    }, []);

    if (!ambiente) return <p>Carregando...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{ambiente.nome}</h1>

            {ambiente.dispositivos.map(dispositivo => (
                <div key={dispositivo.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h2>{dispositivo.nome}</h2>
                    <p><strong>Tipo:</strong> {dispositivo.tipo}</p>

                    <h3>Estado:</h3>
                    <ul>
                        {Object.entries(dispositivo.estado).map(([chave, valor]) => (
                            <li key={chave}>
                                <strong>{chave}:</strong> {String(valor)}
                            </li>
                        ))}
                    </ul>

                    {dispositivo.config && (
                        <>
                            <h3>Configurações:</h3>
                            <ul>
                                {Object.entries(dispositivo.config).map(([chave, valor]) => (
                                    <li key={chave}>
                                        <strong>{chave}:</strong> {Array.isArray(valor) ? valor.join(", ") : String(valor)}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

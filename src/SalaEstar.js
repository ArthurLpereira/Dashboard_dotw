import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import voltar from './assets/volte (1).png';
import lampada from './assets/lampada-incandescente.png';
export default function SalaEstar() {
    const navigate = useNavigate();

    // 1. Estados para armazenar os dados
    const [dadosSala, setDadosSala] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // 2. useEffect para fazer a requisição quando o componente é montado
    useEffect(() => {
        const buscarDados = async () => {
            try {
                const resposta = await fetch('/dadosResidencia.json');
                const dadosJson = await resposta.json();

                // Armazena apenas os dados da sala de estar
                setDadosSala(dadosJson.residencia.sala_de_estar);
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            } finally {
                setCarregando(false);
            }
        };
        buscarDados();
    }, []);

    const handleVoltar = () => {
        navigate(-1);
    };

    const fundo = {
        backgroundColor: '#CDD5C6',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Questrial',
    }
    const titulo = {
        color: 'white',
    }
    const header = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '60px',
    }
    const voltarcss = {
        width: '40px',
        cursor: 'pointer',
        position: 'absolute',
        left: '20px',
    }
    const main = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        height: '80vh'
    }

    const luzcss = {
        backgroundColor: '#FBF2ED',
        border: '5px solid #D8C2B5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '180px',
        width: '320px',
        borderRadius: '10px',
        gap: '10px',
        padding: '15px'
    }

    const lampadacss = {
        width: '150px',
    }

    const tituloscards = {
        color: '#FFCFB3',
        fontSize: '30px'
    }

    const txtcards = {
        color: '#A2A3A2',
        fontSize: '20px'
    }

    const sectioncss = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
    }
    const card1 = {
        backgroundColor: '#FBF2ED',
        border: '5px solid #D8C2B5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '180px',
        width: '500px',
        padding: '15px'
    }

    const card3 = {
        backgroundColor: '#FBF2ED',
        border: '5px solid #D8C2B5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '180px',
        width: '220px',
        padding: '15px'
    }

    const card4 = {
        backgroundColor: '#FBF2ED',
        border: '5px solid #D8C2B5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '180px',
        width: '600px',
        padding: '15px'
    }
    // Renderização condicional enquanto os dados estão carregando
    if (carregando) {
        return <div style={fundo}>Carregando...</div>;
    }

    // Encontra o dispositivo de luz no array de dispositivos
    const luz = dadosSala?.dispositivos?.find(d => d.tipo === 'luz');

    return (
        <div style={fundo}>
            <header style={header}>
                <img
                    src={voltar}
                    alt="Voltar"
                    onClick={handleVoltar}
                    style={voltarcss}
                />
                {/* 3. Acessa o nome do cômodo do estado */}
                <h1 style={titulo}>{dadosSala?.nome}</h1>
            </header>

            <main style={main}>
                <section style={sectioncss}>
                    <div style={card1}>
                        <h2>Alguma coisa</h2>
                    </div>
                    <div style={luzcss}>
                        {/* 3. Acessa os dados do dispositivo de luz */}
                        <div>
                            {luz && (
                                <>
                                    <h2 style={tituloscards}>{luz.nome}</h2>
                                    <p style={txtcards}>Intensidade: {luz.estado.intensidade}</p>
                                    <p style={txtcards}>Cor: {luz.estado.cor}</p>
                                    <input
                                        type="checkbox"
                                        checked={luz.estado.ligado}
                                        readOnly
                                    />
                                    <span> {luz.estado.ligado ? 'Ligado' : 'Desligado'}</span>
                                </>
                            )}
                        </div>
                        <img src={lampada} style={lampadacss} />
                    </div>
                </section>

                <section style={sectioncss}>
                    <div style={card3}>
                        <h2>Alguma coisa 2</h2>
                    </div>
                    <div style={card4}>
                        <h2>Alguma coisa 3</h2>
                    </div>
                </section>
            </main>
        </div>
    );
}
// export default function SalaEstar() {
//     const [ambiente, setAmbiente] = useState(null);

//     useEffect(() => {
//         fetch("/dadosResidencia.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 setAmbiente(data.residencia.sala_de_estar);
//             });
//     }, []);

//     if (!ambiente) return <p>Carregando...</p>;

//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//             <h1 style={{ color: "#333" }}>{ambiente.nome}</h1>
//             <h2 style={{ color: "#555", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
//                 Dispositivos
//             </h2>

//             {ambiente.dispositivos.map((dispositivo) => (
//                 <div
//                     key={dispositivo.id}
//                     style={{
//                         border: "1px solid #ddd",
//                         borderRadius: "8px",
//                         padding: "15px",
//                         marginBottom: "15px",
//                         backgroundColor: "#f9f9f9",
//                     }}
//                 >
//                     <h3 style={{ color: "#007BFF", margin: "0 0 10px 0" }}>
//                         {dispositivo.nome} ({dispositivo.tipo})
//                     </h3>

//                     {/* Renderiza as propriedades do estado */}
//                     {dispositivo.estado && (
//                         <div style={{ marginBottom: "10px" }}>
//                             <h4 style={{ color: "#333", margin: "0 0 5px 0" }}>Estado:</h4>
//                             <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//                                 {Object.entries(dispositivo.estado).map(([chave, valor]) => (
//                                     <li key={chave} style={{ marginBottom: "5px" }}>
//                                         <strong style={{ textTransform: "capitalize" }}>{chave}:</strong>{" "}
//                                         {
//                                             // Trata a exibição de booleanos de forma mais amigável
//                                             typeof valor === "boolean" ? (valor ? "Ligado" : "Desligado") : valor
//                                         }
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}

//                     {/* Renderiza as propriedades de configuração, se existirem */}
//                     {dispositivo.config && (
//                         <div>
//                             <h4 style={{ color: "#333", margin: "0 0 5px 0" }}>Configurações:</h4>
//                             <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//                                 {Object.entries(dispositivo.config).map(([chave, valor]) => (
//                                     <li key={chave} style={{ marginBottom: "5px" }}>
//                                         <strong style={{ textTransform: "capitalize" }}>{chave}:</strong>{" "}
//                                         {
//                                             // Verifica se o valor é um array para exibi-lo corretamente
//                                             Array.isArray(valor) ? valor.join(", ") : String(valor)
//                                         }
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }
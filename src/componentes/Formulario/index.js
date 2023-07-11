import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [id, setid] = useState(uuidv4())
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')
 

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id,
            favorito: false
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setid(uuidv4())
      
    }

   

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Fill in the data to create the employee card</h2>
                <Campo
                    obrigatorio
                    label="Name"
                    type = "text"
                    placeholder="Type your name" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label="Job Title"
                    type = "text"
                    placeholder="Enter your position"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Image"
                    type = "text"
                    placeholder="Enter your image" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Team"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({nome: nameTeam, cor:colorTeam});
            }}>
                <h2>Fill in the data to create the employee's team.</h2>
                <Campo
                    obrigatorio
                    label="Name"
                    type = "text"
                    placeholder="Type the name's team" 
                    valor={nameTeam}
                    aoAlterado={valor => setNameTeam(valor)}
                />
                <Campo
                    obrigatorio
                    label="Color type"
                    type = "color"
                    placeholder="Type the color's team" 
                    valor={colorTeam}
                    aoAlterado={valor => setColorTeam(valor)}
                />
                <Botao>
                    Create a new team
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
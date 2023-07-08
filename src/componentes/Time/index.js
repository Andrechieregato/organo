import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6') }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input type="color" className="type-cor" value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.idTime)}/>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                {
                   return (
                <Colaborador
                   idColaborador = {colaborador.id} 
                   corDeFundo={props.cor} 
                   key={colaborador.nome} 
                   nome={colaborador.nome} 
                   cargo={colaborador.cargo} 
                   imagem={colaborador.imagem}
                   favorito ={colaborador.favorito}
                   aoDeletar={props.aoDeletar}
                   aoFavoritar={props.aoFavoritar}
                /> )})}
            </div>
        </section> 
        : ''
    )
}

export default Time
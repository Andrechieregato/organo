import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar, idColaborador, favorito}) => {

    function favoritar(){
        aoFavoritar(idColaborador);       
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className='colaborador'>
     
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(idColaborador)}   
        />
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito
                    ? <AiFillHeart color='#ff0000'{...propsfavorito}/> 
                    : <AiOutlineHeart {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador
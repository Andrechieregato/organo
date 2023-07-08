import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },

    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },

    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },

    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },

    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },

    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },

    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  const deletarColaborador = (idColaborador) =>{ 
    console.log(idColaborador);
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== idColaborador))
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id)
        time.cor = cor;
      return time;
  }))}

  function cadastrarTime (novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito (id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))

  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime = {cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => 
      <Time
        aoFavoritar = {resolverFavorito}
        idTime = {time.id} 
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor = {mudarCorDoTime}
      />)}   

    </div>
  );
}

export default App;

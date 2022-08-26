import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Display from './views/Display';
import DisplayType from './views/DisplayType';
import SingleDisplay from './views/SingleDisplay';
import CardDetails from './views/CardDetails';
import PokeDex from './views/PokeDex';
import Apron from './components/Apron';
import MainPage from './views/MainPage';
import MyCards from './views/MyCards';

function App() {

  return (
    <div id='container'>
      <BrowserRouter>
      <Form/>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/myCards' element={<MyCards/>}/>
          <Route path='/card/:pokemon' element={<SingleDisplay/>}/>
          <Route path='/pokedex/:lowerName' element={<PokeDex/>}/>
          <Route path='/:pokeSet' element={<Display/>}/>
          <Route path='/type/:type' element={<DisplayType/>}/>
          <Route path='/:pokeSet/:cardId' element={<CardDetails/>}/>
        </Routes>
      </BrowserRouter>
      <Apron/>
    </div>
  );
}

export default App;

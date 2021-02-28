import Encabezado from './Components/Encabezado';
import Register from './Components/Register';
import Social from './Components/Social';

function App() {
  return (
    <div className="App">
    <div className='contenedor'>
      <Encabezado/>
      <Register/>
    </div>
      <Social/>
    </div>
  );
}

export default App;

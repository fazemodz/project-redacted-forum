import { useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Registeruser from './modules/registeruser'; 
const App: React.FC = () => {
  useEffect(() => {
		document.title = 'Homepage';
	  });
  return (
    <div className="App">
   
    </div>
  );
}

export default App;

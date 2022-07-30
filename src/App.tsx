import { useEffect} from 'react';
import './App.css'; 
import Navbar from './modules/Navbar';
const App: React.FC = () => {
  useEffect(() => {
		document.title = 'Homepage';
	  });
  return (
    <div className="App">
      <Navbar />
      
    </div>
  );
}

export default App;

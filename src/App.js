import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div className="App">
      < className="App-header">
    <Home/>
      <AppRouter/>
    </div>
  );
}

export default App;

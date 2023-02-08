import './App.css'
import ContentPage from './components/ContentPage';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/main.css'


function App() {
  return (
    <div className="container">
        <Header/>
        <Nav />
        <ContentPage/>
    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header'
import Hello from './components/Hello'





const Content = () => {
  return <p>
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore
    Selamat pagi, selamat siang, selamat sore

  </p>
}

function App() {
  return (
  <>
    <Header/>
    <Hello/>
    <Content/>
    </>
  );
}

export default App;

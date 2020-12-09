
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

// import Counter from './components/Counter';
// import Card from './components/Card';
// import {person} from "./utils/person";


// function App() {
//   return (
//       <>
//       {/* {person.map((item) => {
//           return (
//               <Card 
//               name={item.name}
//               institution={item.institution}
//               address={item.address}
//               phoneNumber={item.phoneNumber}
//               />
//           );
//       })} */}
//       <Counter title = "Counter Component"/>
//       </>

//   );
// }

export default App;

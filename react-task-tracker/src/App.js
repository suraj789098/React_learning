import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Student from './Components/Student';
import Student1 from './Components/Student1';
import Counter from './Components/Counter';
import Wish from './Components/Wish';
function App() {
  return (
    <>
      <div className="App">
          <Header />  
      </div>
      <div>
        <Card />
        <Student name="Suraj" age="23"/>
        <Student name="Niranjan" age="32"/>
        <Student1 />
        <Wish />
        <Counter />
      </div>
   
    </>
  );
}

export default App;

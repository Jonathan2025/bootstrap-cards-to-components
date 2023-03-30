import logo from './logo.svg';
import './App.css';

// 7 import the components
import Card1 from './components/Card1';
import Card2 from './components/Card2';



//1 Add in the starter code for app.js
function App() {
  return (
    <div className="App">
      <h1>Bootcamp Cards to Component Example</h1>
      <section className="cards">
        <Card1 /> 
        <Card2 />
      </section>
    </div>
  );
}

export default App;

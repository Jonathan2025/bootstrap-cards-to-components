import logo from './logo.svg';
import './App.css';

// 7 import the components
import Card1 from './components/Card1';
import Card2 from './components/Card2';

//15 import the data, now its not named cardsArray in the file but here we are naming it 
import cardsArray from "./data.js"


console.log("this is cardsArray", cardsArray)





//1 Add in the starter code for app.js
function App() {



  // 16 now we will create a cards variable that MAPs to the cardArray Data
  // 17 dont forget to pass in parameters element and index 
  const cards = cardsArray.map((Element, index) => {
    return (


      // 18 now we create a card1 with the following props img,title, etc
      <Card1
        img={Element.img}
        title={Element.title}
        text={Element.text}
        url={Element.url}


        // normally when we try to access a unique element in an array we usually do so by id OR symbol 
        // something will be needed to distinguish it as unique 
        // react does so by assigning a unique key 
        // any components created within a .map MUST be assigned a unique key 
        
        //26 so now we need to add in the key property and then giving it a value, key={index}
        key={index}


      /> 

    )
  })






  return (
    <div className="App">
      <h1>Bootcamp Cards to Component Example</h1>
      <section className="cards">

        {/* 25 instead of putting card1 and card2 we are going to put in the map function that we were using */}
        {/* <Card1 /> 
        <Card2 /> */}

        {cards}


      </section>
    </div>
  );
}

export default App;

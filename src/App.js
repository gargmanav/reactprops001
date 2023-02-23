
import './App.css';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App" style={{display:"flex" ,flexWrap:"wrap" ,margin:"50px 50px"}}>
     <Cards color="#ff6663" code="#ff6663" name="pink" />
     <Cards color="#333333" code="#333333" name="Gray" />
     <Cards color="#000000" code="#000000" name="black" />
     <Cards color="#38bb14" code="#38bb14" name="green" />
     <Cards color="#C90B0B" code="#C90B0B" name="Red" />
     <Cards color="#FF8000" code="#FF8000" name="Orange" />
     <Cards color="#FFF500" code="#FFF500" name="yellow" />
     <Cards color="#CCCCCC" code="#CCCCCC" name="LIght grey" />
     <Cards color="#7E41A2" code="#7E41A2" name="Purple" />
     <Cards color="#C14911" code="#C14911" name="Brown" />
    </div>
  );
}

export default App;

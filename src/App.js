import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Services from './pages/Services/Services';
// import IncrementDecrement from './IncrementDecrement';
// import ShowInfo from './ShowName';
// import RandomName from './RandomName';
import NavbarRouting from './NavbarRouting';
import Cards from './components/Cards/Cards'
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Todos from './components/TODO/Todo';
import TabButton from './components/TabButton/TabButton';

const App = () =>{
  function handleSelect(selectedButton){

    console.log(selectedButton);
  }
  return (
    <div className="App">
      <NavbarRouting/>
      {/* <Users/> */}
      {/* <Posts/> */}
      <Todos/>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
       <button>Component</button>
        </menu> 
      </section>
      <div id="app">
      <h1>Available Experts</h1>
      <Cards name="Henri Baruti">
        <p>
          Henri is a student at Polythecnic University of Tirana.
        </p>
        <p>
          <a href="mailto:henribaruti@example.com">Email Henri</a>
        </p>
      </Cards>

     
    </div> 
    </div>
  );
}

export default App;

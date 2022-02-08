import logo from './logo.svg';
import './App.css';
import AuthorPrint from './AuthorPrint';
import Prime from './Prime';
import Even from './Even';
import Counter from './Counter';
import Hobbies from './Hobbies';
import Login from './Login';
import Native from './Native';
import Registration from './Regstration';
import Menu from './Menu';
import Footer from './Footer';
import Greet from './Greet';
function App() {
  return (
    <div className="App">
     <Registration></Registration>
    <Native></Native>
    <Menu></Menu>
    <Login></Login>
    <Hobbies></Hobbies>
    <Counter></Counter>
    <Footer></Footer> 
    <AuthorPrint></AuthorPrint>
    <Prime></Prime>
    <Even></Even> 
    {/* <h1>Welcome to react</h1>
    <Greet
    message="Lets Learn About props"
    date={new Date().toString()}
    no={18}>

    </Greet> */}
    </div>
  );
}
export default App;
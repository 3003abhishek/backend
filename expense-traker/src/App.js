import './App.css';
import Balance from './components/Balance';
import Details from './components/Details';
import Header from './components/Header';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import TransactionButton from './components/TransactionButton';
function App() {

  let data=[{cause:"Daru",amount:500},{cause:"book",amount:200}]
  return (
    <div className="container">
    <Header/>
    <div className='main_box'>
         <Balance/>
         <Details/>
         <History data={data}/>
         <AddTransaction/>
         <TransactionButton/>

    </div>
    </div>
  );
}

export default App;

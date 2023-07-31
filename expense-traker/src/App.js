import './App.css';
import Balance from './components/Balance';
import Details from './components/Details';
import Header from './components/Header';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import TransactionButton from './components/TransactionButton';

import { useState } from 'react';
function App() {

  let [history, setHistory] = useState([]);
  let [text, setText] = useState("");

  let [amount, setAmount] = useState(0);
  let [income,setIncome]=useState(0);
  let [expense,setExpense]=useState(0);
  let [balance,setBalance]=useState(0);

  let madeTransaction = () => {

    setHistory([...history, { cause: text, amount }]);
    // console.log(history);
     setBalance(balance+Number(amount));
    if(amount>0){
      setIncome(income+Math.abs(Number(amount)))
    }
    else{
     setExpense(expense+Math.abs(Number(amount)));
    }

  }

  let handleText = (x) => {
    setText(x);
    //  console.log(text);
  }

  let handleAmount = (y) => {
    setAmount(y);
    // console.log(y);
  }


  let handleOnDelete=(id)=>{
    // console.log(id);
       let filterhistory=history.filter((el,index)=>{
        return index!=id;
       });

       console.log(filterhistory);

       setHistory(filterhistory);
  }

  

  return (
    <div className="container">
      <Header />
      <div className='main_box'>
        <Balance balance={balance} />
        <Details income={income} expense={expense} />
        <History history={history} handleOnDelete={handleOnDelete} />
        <AddTransaction handleText={handleText} handleAmount={handleAmount} />
        <TransactionButton handleClick={madeTransaction} />

      </div>
    </div>
  );
}

export default App;

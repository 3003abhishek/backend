import logo from './logo.svg';
import './App.css';
import CreditCardForm from './component/CreditCardForm';
import ResultMessage from './component/ResultMessage';
import { ValidateCard } from './api/CardApi';
function App() {

  


  let handleOnClick=(val)=>{
    ValidateCard(val).then((res)=>{
      console.log(res);
    });
  }
 
  return (
    <div className="App">
      <CreditCardForm handleOnClick={handleOnClick}/>
      {/* <ResultMessage/> */}
    </div>
  );
}

export default App;

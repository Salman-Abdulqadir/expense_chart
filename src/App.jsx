import { useEffect, useState } from "react";
import "./App.css";

//importing data
import balanceData from "./fetchData";

//importing components
import Balance from "./components/balance";
import ExpenseChart from "./components/bar_chart";

import Footer from "./components/footer";

function App() {
  //data and balance states
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(0);

  //getting the total balance from the data provided
  const getBalance = (data) => {
    let amount = 0;
    for (let element of data) {
      amount += element.amount;
    }
    setBalance(amount);
  };

  //calling the fetchData function when the page loads, and calculate the balance
  useEffect(() => {
    setData(balanceData());
    getBalance(balanceData());
  }, []);

  return (
    <div className="App">
      <Balance balance={balance} />
      <ExpenseChart data={data}/>
      <Footer />
    </div>
  );
}

export default App;

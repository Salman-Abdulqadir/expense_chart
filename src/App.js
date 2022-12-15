import { useEffect, useState } from "react";
import "./App.css";

//importing components
import Footer from "./components/footer";
import Balance from "./components/balance";
import ExpenseChart from "./components/bar_chart";

function App() {
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(0);

  const getBalance = (data) => {
    let amount = 0;
    for (let element of data) {
      amount += element.amount;
    }
    setBalance(amount);
  };
  const fetchData = async () => {
    const data = await (await fetch("./data/data.json")).json();
    const result = data.result;
    console.log(result);
    setData(result);
    getBalance(result);
  };
  useEffect(() => {
    fetchData();
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

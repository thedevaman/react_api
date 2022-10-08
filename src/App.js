
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{ fetch("https://mlm.samesameindia.com/api/package").then((result)=>{
    result.json().then((resp)=>{
      setData(resp)
    })
  })
},[])
// console.warn(data);
const [name,setName]=useState("");
const [price,setPrice]=useState("");
const [percentage,setPercentage]=useState("");
const [income,setIncome]=useState("");

function saveUser(){
  console.warn(name,price,percentage,income);
}

function setdataname(e){
  setName(e.target.value);
}

  return (
    <div className="App">
    <h1>Get Api</h1>
    <table border={1}>
      <thead>
      <tr>
        <td>id</td>
        <td>Package Name</td>
        <td>Price</td>
        <td>Percentage</td>
        <td>Direct Income</td>
      </tr>
      </thead>
      <tbody>
    {
    data.map((item,index)=>
    <tr key={index}>
       <td>{item.id}</td>
        <td>{item.package_name}</td>
        <td>{item.price}</td>
        <td>{item.percentage}</td>
        <td>{item.direct_Income}</td>
    </tr> 
    )}
    </tbody>
    </table>
  <hr />

  <h1>Post Api</h1>
  <input type="text" name="" id="" onChange={setdataname} value={name} /><br/>
  <input type="text" name="" id=""  onChange={(e)=>{setPrice(e.target.value)}} value={price} /><br/>
  <input type="text" name="" id=""  onChange={(e)=>{setPercentage(e.target.value)}} value={percentage} /><br/>
  <input type="text" name="" id=""  onChange={(e)=>{setIncome(e.target.value)}} value={income} /><br/>
  <button type="button" onClick={saveUser}  name="" id="">Save</button><br/>

    </div>
  );
}

export default App;

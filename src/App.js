
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=> { fetch("https://mlm.samesameindia.com/api/package").then((result)=>{
    result.json().then((resp)=>{
      setData(resp)

    })
  })
},[])
console.warn(data);
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
    data.map((item)=>
    <tr>
       <td>{item.id}</td>
        <td>{item.package_name}</td>
        <td>{item.price}</td>
        <td>{item.percentage}</td>
        <td>{item.direct_Income}</td>
    </tr>
    
    
    )}
    </tbody>
    </table>
    </div>
  );
}

export default App;

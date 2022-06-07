import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import ReactTimer from "./ReacTimer";
import Clock from "./Clock";



function App() {
  return (
<div>
<ReactTimer/>
<Clock />

</div>
  
 
  );
}

export default App;
 
/*

<div>Текст</div>
<div>{text}</div>
<div>{textP}</div>
<div>
 {text1}
 <p>!!!</p>
 {text2}
</div>
<div className={str} id={attr}>Текст</div>
<div style={{background: 'green', borderRadius :'30px', height:'100px', border:'solid black 5px'}}></div>
<div>{show===true ? 'Текст1' : 'Текст2'}</div>
<div>
<ul>
 {arr.map((item) =>(
   <li key={item}>{item}</li>
 ))}
</ul>
</div>
<div>{getText()}</div>
<div>{getNum1()+getNum2()}</div>

    <Book name="JS for beginners" year="2018" price="1000" />
    <Book name="React for beginners" year="2019" price="1200" />
    <Book name="Vue for beginners" year="2021" price="1500" />
 */

    /*
const text='Текст';
const textP='<p>текст</p>';
const text1='<p>текст1</p>';
const text2='<p>текст2</p>';
const attr='block';
const str='block';
const show=true;
const arr=['a', 'b', 'c', 'd', 'e'];
const getText=()=>{
  return '<p>текст</p>'
};
const getNum1=()=>{
  return 1
};
const getNum2=()=>{
  return 2
};

const Book = (props) => {
 <div>
   <h2>{props.name}</h2>
   <p>{props.year}</p>
   <p>{props.price}</p>
 </div>
};

*/
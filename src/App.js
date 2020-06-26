import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './composant/ProductTable';
const tableau =[
{ categorie:"electronique",prix:1000,nom:"HP"}
,{categorie:"maillot",prix:300,nom:"Tommy"},
{ categorie:"electronique",prix:1000,nom:"HP"}]

function App() {
  return (
    <div className="App">
      <center>
  <ProductTable data={tableau} />
  </center>
    </div>
  );
}

export default App;

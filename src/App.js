import './App.css';
import React, { useState } from "react";

function App() {

  const [panjang, setPanjang] = useState("")
  const [lebar, setLebar] = useState("")
  const [hasil, setHasil] = useState(panjang * lebar)
    
    console.log(`panjang : ${panjang}`)
    console.log(`lebar : ${lebar}`)
  
    function luasPersegiPanjang() {
      setHasil(panjang * lebar)
    }
  
    return (
    <div class="App">
      <h2> Rumus Persegi Panjang </h2>
      <p> Masukkan Panjang : </p> 
      <input class="input"
        type="number" 
        placeholder="0" 
        value={panjang}
        onChange={e => setPanjang(+e.target.value)}>
      </input>

      <p> Masukkan Lebar : </p>
      <input class="input"
        type="number" 
        placeholder="0" 
        value={lebar}
        onChange={e => setLebar(+e.target.value)}>
      </input>
      
      <p><button class="button" onClick={luasPersegiPanjang}>Lihat Hasil</button></p>

      <p> Luas Persegi Panjang adalah </p> 

      <h2>{hasil}</h2>

    </div>
  );
}

export default App;
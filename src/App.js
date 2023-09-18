import React, { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, } from '@mui/material';
import BilgileriEkle from './components/BilgileriEkle';
import { Veri } from './components/Veri';
import axios from 'axios';

function App() {
  const [veriler, setVeriler] = useState([]);
  const [kisiler, setKisiler] = useState([])
  const handleVeriEkle = () => {
    getData();

  };

  const handleVeriSil = () => {
    getData();
  }

  useEffect(() => {

    getData();
  }, [])


  const getData = () => {
    fetch("https://localhost:44387/api/Kayıt/Kayıt")
      .then(response => response.json())
      .then(data => setKisiler(data))
      .catch(error => console.log(error))
  }


  return (
    <Container>
      <div  >
        <AppBar   >
          <Toolbar sx={{ fontSize: 20 }}>KAYIT EKRANI</Toolbar></AppBar>
        <div >
          <BilgileriEkle onVeriEkle={handleVeriEkle} veriler={veriler} />
        </div>
        <div >
          <Veri
            //veriler={veriler} 
            onVeriSil={handleVeriSil}
            veriler={kisiler}
            setVeriler={setVeriler} kisiler={kisiler}>

          </Veri>
        </div>
      </div>
    </Container>
  );
}

export default App;

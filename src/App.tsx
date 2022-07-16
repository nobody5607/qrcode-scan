import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateQrcode from './components/GenerateQrcode';
import DemoOneOffScanning from './components/DemoOneOffScanning';


function App() {
  return (
    <div>
      {/* <GenerateQrcode /> */}

      <DemoOneOffScanning />
    </div>
  );
}

export default App;

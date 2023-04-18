// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShipmentRequest from './Component/ShipmentRequest';
import PaymentCards from './Component/PaymentCards';
import PaymentList from './Component/PaymentList';
import PayBill from './Component/PayBill';
import Payment from './Component/Payment';
import PdfViewer from './Component/PdfViewer';
function App() {
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<ShipmentRequest />} />
        <Route path="/PaymentCards" element={<PaymentCards />} />
        <Route path="/PaymentList" element={<PaymentList />} />
        <Route path="/Payment" element={<Payment />} />

        <Route path="/PayBill" element={<PayBill />} />
        <Route path="/PdfViewer" element={<PdfViewer />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;

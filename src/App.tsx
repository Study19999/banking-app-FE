import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Account } from './components/accounts/get/all/index';
import { AddAccount } from './components/accounts/post';
import { Customer } from './components/customers/get/all';
import { CreateCustomer } from './components/customers/post';
import Header from './components/header';
import HomePage from './pages/home';


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <BrowserRouter>
          <nav>
            <Link style={{ margin: '5px', padding: '5px 10px', backgroundColor: 'red', borderRadius: '5px' }} to="/">Home</Link> {"||"}

            <Link style={{ margin: '5px', padding: '5px 10px', backgroundColor: 'red', borderRadius: '5px' }} to="/accounts">Accounts</Link> {"||"}

            <Link style={{ margin: '5px', padding: '5px 10px', backgroundColor: 'red', borderRadius: '5px' }} to="/customers">Customers</Link>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/accounts' element={<Account />} />
            <Route path='/customers' element={<Customer />} />
            <Route path='/customers/create' element={<CreateCustomer />} />
            <Route path='/accounts/create' element={<AddAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

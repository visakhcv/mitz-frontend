import './App.css';
import Customerpref from './components/Customerpref';
import Orderstable from './components/Orderstable';
import Products from './components/Products';



function App() {

  return (
    <div className="App">
      {/* products table */}
      <div className="row table-container mt-4">
        <div className="col-lg-8 table-main">
          <Products />
        </div>
      </div>

      {/* customer preference */}
      <div className="row table-container">
        <div className="col-lg-6 table-main">
          <Customerpref />
        </div>
      </div>

      {/* order */}

      <div className="row table-container">
        <div className="col-lg-8 table-main">
          <Orderstable />
        </div>
      </div>

      <div className="row table-container">
        <div className="col-lg-8 table-main">
          
        </div>
      </div>

      <div className="row question-container">
        <div className="col question">
          <h4>1. Find Most popular product among customer</h4>
          <h4>2. Find customers who have ordered all products</h4>
          <h4>3. Find customer who have bought inexpensive items</h4>
        </div>
      </div>

    </div>
  );
}

export default App;

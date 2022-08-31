
import './App.scss';
import Form from './components/Form';
import Graph from './components/Graph';
import ProductForm from './components/ProductForm';
import PieChart from './components/PieChart';



function App() {
  return (
    <div className="App">
      <h1 className='bg-grey'>
        Banking Chart APP
      </h1>

    <div className='grupComponent'>
      <Graph></Graph>
      <PieChart></PieChart>
      <Form></Form>
    </div>
      <ProductForm></ProductForm>
    </div>
  );
}

export default App;

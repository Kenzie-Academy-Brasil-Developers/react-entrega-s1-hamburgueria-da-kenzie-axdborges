import Header from './components/header';
import ProductList from './components/productList/indec';
import Carrinho from './components/carrinho';
import { GlobalStyle } from './styles';
import {useEffect, useState} from 'react'


function App() {

const [produtos, setProdutos] = useState([])
const [produtosFiltrados, setProdutosFiltrados] = useState([]);
const [carrinhoTotal, setCarrinhoTotal] = useState(0)
const [quantidade, setQuantidade] = useState([])
const [inputValue, setInputValue] = useState("")

  useEffect(() => {
      fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProdutos(response))
      .catch((err) => console.log(err))
  } , [])

  function filtra (input) {
    const filtrado = produtos.filter((elem) => {

        return elem.category.toUpperCase() === input.toUpperCase() || elem.name.toUpperCase() === input.toUpperCase()
    })
      return filtrado
  }
  return (
    <div className="App-header">
      <GlobalStyle/>
      <Header
      inputValue={inputValue}
      setInputValue={setInputValue}/>
      <main className="principal">
        {/* <h3>Resultados por: </h3> */}
        <ProductList 
        produtos={inputValue === "" ? produtos : filtra(inputValue) }
        setCarrinhoTotal={setCarrinhoTotal}
        carrinhoTotal={carrinhoTotal}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        >
    
        </ProductList>
        <Carrinho carrinhoTotal={carrinhoTotal}
        setCarrinhoTotal={setCarrinhoTotal}
        quantidade={quantidade}
        setQuantidade={setQuantidade}/>
      </main>
    
    </div>
  );
}

export default App;

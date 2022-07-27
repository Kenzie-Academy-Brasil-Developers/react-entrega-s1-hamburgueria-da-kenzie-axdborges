import Header from './components/header';
import ProductList from './components/productList/indec';
import Carrinho from './components/carrinho';
import { GlobalStyle } from './styles';
import {useEffect, useState} from 'react'


function App() {

const [produtos, setProdutos] = useState([])
const [produtosFiltrados, setProdutosFiltrados] = useState([]);
const [carrinho, setCarrinho] = useState([0,0,0,0,0,0])
const [carrinhoTotal, setCarrinhoTotal] = useState(0)
const [quantidade, setQuantidade] = useState([])

  useEffect(() => {
      fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProdutos(response))
      .catch((err) => console.log(err))
  } , [])

  return (
    <div className="App-header">
      <GlobalStyle/>
      <Header/>
      <main className="principal">
        <ProductList produtos={produtos} 
        setCarrinhoTotal={setCarrinhoTotal}
        carrinhoTotal={carrinhoTotal}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        quantidade={quantidade}
        setQuantidade={setQuantidade}
        />
        <Carrinho carrinhoTotal={carrinhoTotal}
        setCarrinhoTotal={setCarrinhoTotal}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        quantidade={quantidade}
        setQuantidade={setQuantidade}/>
      </main>
    
    </div>
  );
}

export default App;

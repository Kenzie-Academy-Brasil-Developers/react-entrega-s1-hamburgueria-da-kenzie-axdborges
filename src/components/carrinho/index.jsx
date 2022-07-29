import { useState  } from "react";
import ItemCarrinho from "../itemCarrinho/itemCarrinho";
import { StCarrinho } from "../../styled/styledCarrinho/styledCarrinho";

function Carrinho ({carrinhoTotal, setCarrinhoTotal, quantidade, setQuantidade}) {

    const removeTodos = () => {
        setCarrinhoTotal(0)
        setQuantidade([])
    }
    return (
        <StCarrinho>
            <div className="carrinho-header">Carrinho de compras</div>
            {   
               
                quantidade.length ? 
                <>
                    {
                        quantidade.map((item, index) => {
                            return (<ItemCarrinho produto={item} key={index} 
                                quantidade={quantidade}
                                setQuantidade={setQuantidade}
                                carrinhoTotal={carrinhoTotal}
                                setCarrinhoTotal={setCarrinhoTotal}/> )
                        })
                    }
                    
                    <div className="carrinho-total">
                        <div className="organizar-total">
                            <p className="carrinho-p">Total</p>
                            <p className="carrinho-preco">R$ {carrinhoTotal.toFixed(2)}</p>
                        </div>
                        <button className="carrinho-remover"
                        onClick={() => {return removeTodos()}}>Remover todos</button>
                    </div>
                </>

                : 
                <div className="carrinho-vazio">Sua sacola está vazia <small>Adicione itens</small></div>
            }
            
        </StCarrinho>
    )
}

export default Carrinho 
import { useState  } from "react";
import { CardSt } from "../../styled/styledCard/styledCard";

function Card ({produto, carrinhoTotal, setCarrinhoTotal, carrinho, setCarrinho, quantidade, setQuantidade}) {
    
    const addCart = (prod) => {
        setCarrinhoTotal(carrinhoTotal + prod.price)
        // const muda = [...carrinho]
        // muda[prod.id - 1] += 1
        // setCarrinho(muda)
        const achar = quantidade.find(elem => {
            return elem.id === prod.id
        })
        if(achar) {
            const newArray = quantidade.map((item) => {
                if(item.id === achar.id) {
                    return {
                        ...item, qtd: item.qtd + 1
                    }
                }
                return item 
            })

            return setQuantidade(newArray)
        }
        setQuantidade([...quantidade, {
            ...prod, qtd: 1
        }])
    }

    return (
        <CardSt>
            <figure>
                <img src={produto.img} alt="" />
            </figure>
            <div className="lista-desc">
                <h4 className="produto">{produto.name}</h4>
                <p className="categoria">{produto.category}</p>
                <p className="preco">R$ {produto.price}</p>
                <button className="lista-btnCart" id={produto.id} 
                onClick={() => {return addCart(produto)} }>Adicionar</button>
            </div>
        </CardSt>
    )
}

export default Card
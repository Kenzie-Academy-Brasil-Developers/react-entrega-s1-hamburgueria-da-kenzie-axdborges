import { useState } from "react";
import { StItemCarrinho } from "../../styled/styledItemCarrinho/styledItemCarrinho";

function ItemCarrinho ({produto, quantidade, setQuantidade, carrinhoTotal, setCarrinhoTotal}) {

    const removeCart = (prod) => {
        setCarrinhoTotal(carrinhoTotal - prod.price)
        const achar = quantidade.find(elem => {
            return elem.id === prod.id
        })
        if(achar.qtd === 1){
            return setQuantidade(quantidade.filter((el) => el.id !== prod.id))
        }
        if(achar) {
            const newArray = quantidade.map((item) => {
                if(item.id === achar.id) {
                    return {
                        ...item, qtd: item.qtd - 1
                    }
                }
                return item 
            })

            return setQuantidade(newArray)
        }
        setQuantidade([...quantidade])
        
    }
    // 

    return (
        <StItemCarrinho>
            <figure>
                <img src={produto.img} alt="" className="item-img" />
            </figure>
            <div className="item-textos">
                <h4 className="item-titulo">{produto.name.length > 16 ? 
                produto.name.slice(0, 16)+"..." 
                : produto.name }</h4>
                <p className="item-categoria">{produto.category}</p>
            </div>
            <p>qtd: {produto.qtd}</p>
            <button className="item-button"
            id={produto.id}
            onClick={() => removeCart(produto)}>Remover</button>
        </StItemCarrinho>
    )
}

export default ItemCarrinho
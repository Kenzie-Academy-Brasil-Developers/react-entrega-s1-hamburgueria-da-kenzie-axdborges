import { useState } from "react";
import { StItemCarrinho } from "../../styled/styledItemCarrinho/styledItemCarrinho";

function ItemCarrinho ({produto}) {

    return (
        <StItemCarrinho>
            <figure>
                <img src={produto.img} alt="" className="item-img" />
            </figure>
            <div className="item-textos">
                <h4 className="item-titulo">{produto.name}</h4>
                <p className="item-categoria">{produto.category}</p>
            </div>
            <p>qtd: {produto.qtd}</p>
            <button className="item-button">Remover</button>
        </StItemCarrinho>
    )
}

export default ItemCarrinho
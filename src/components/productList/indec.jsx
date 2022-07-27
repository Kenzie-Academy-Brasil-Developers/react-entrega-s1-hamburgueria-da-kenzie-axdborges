import { useEffect , useState } from "react";
import Card from "../cardList";
import { StContainer } from "../../styled/styledProductList/styledProductList";

function ProductList ({produtos, carrinhoTotal, setCarrinhoTotal, carrinho, setCarrinho, quantidade, setQuantidade}) {

    return (
        <StContainer>
            {   
                produtos.map((produto) => {
                    return (
                        <Card key={produto.id} produto={produto}
                        carrinhoTotal={carrinhoTotal}
                        setCarrinhoTotal={setCarrinhoTotal}
                        carrinho={carrinho}
                        setCarrinho={setCarrinho}
                        quantidade={quantidade}
                        setQuantidade={setQuantidade}/>
                    )
                })
            }
        </StContainer>
    )
}

export default ProductList
import { useEffect , useState } from "react";
import Card from "../cardList";
import { StContainer } from "../../styled/styledProductList/styledProductList";

function ProductList ({children, produtos, carrinhoTotal, setCarrinhoTotal, quantidade, setQuantidade}) {

    return (
        <StContainer>
            {children}
            {   
                produtos.map((produto) => {
                    return (
                        <Card key={produto.id} produto={produto}
                        carrinhoTotal={carrinhoTotal}
                        setCarrinhoTotal={setCarrinhoTotal}
                        quantidade={quantidade}
                        setQuantidade={setQuantidade}/>
                    )
                })
            }
        </StContainer>        
    )
}

export default ProductList
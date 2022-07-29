import { useState } from "react";
import { HeaderSt } from "../../styled/styledHeader/styledHeader";

function Header ({inputValue, setInputValue}) {
    
    const pesquisaT = {
        margin: "20px"
    }

    const pesquisaS = {
        color: "#828282"
    }

    return (
        <>
            <HeaderSt>
                <div className="header-titulos">
                    <h3>Burguer</h3>
                    <small>Kenzie</small>
                </div>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Digitar pesquisa" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                    <button>Pesquisar</button>
                </form>
            </HeaderSt>
            {
                inputValue !== "" && 
                <>
                    <h3 style={pesquisaT}>
                        Você pesquisou por: <span style={pesquisaS}>{inputValue}</span>
                    </h3>
                </>
            }
        </>

    )
}

export default Header 
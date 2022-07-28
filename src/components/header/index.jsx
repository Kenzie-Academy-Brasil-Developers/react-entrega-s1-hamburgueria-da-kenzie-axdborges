import { useState } from "react";
import { HeaderSt } from "../../styled/styledHeader/styledHeader";

function Header ({inputValue, setInputValue}) {
    


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
                    <h3>
                        Você pesquisou por: <span>{inputValue}</span>
                    </h3>
                </>
            }
        </>

    )
}

export default Header 
import { useState } from "react";
import { HeaderSt } from "../../styled/styledHeader/styledHeader";

function Header () {

    return (
        <HeaderSt>
            <div className="header-titulos">
                <h3>Burguer</h3>
                <small>Kenzie</small>
            </div>
            <form action="">
                <input type="text" placeholder="Digitar pesquisa" />
                <button>Pesquisar</button>
            </form>
           
        </HeaderSt>
        
    )
}

export default Header 
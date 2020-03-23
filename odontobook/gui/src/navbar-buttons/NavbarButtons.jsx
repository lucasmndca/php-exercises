import React from 'react'

function NavbarButtons() {

    const background = '#ee0000'
    const border = '#cc0000'
    
    return (
        <div className="navbar-buttons">
            <button>Clientes</button>
            <button>Consultas</button>
            <button style={{
                backgroundColor: background,
                borderColor: border
            }}>Sair</button>
        </div>
    )
}

export default NavbarButtons
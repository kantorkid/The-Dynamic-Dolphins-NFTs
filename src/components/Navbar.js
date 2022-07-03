import logo from '../images/logo.png'

const Navbar = ({ web3Handler, account, explorerURL }) => {
    return ( <
        nav className = "navbar fixed-top mx-20" >
        <
        a className = "navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
        href = "http://www.jake-kantor.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        Jake Kantor - Blockchain Developer & Crypto Consultant <
        /a>

        {
            account ? ( <
                a href = { `${explorerURL}/address/${account}` }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "button nav-button btn-sm mx-4" > { account.slice(0, 5) + '...' + account.slice(38, 42) } <
                /a>
            ) : ( <
                button onClick = { web3Handler }
                className = "button nav-button btn-sm mx-4" > Connect Wallet < /button>
            )
        } <
        /nav>
    )
}

export default Navbar;
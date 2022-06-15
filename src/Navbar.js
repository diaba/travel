import logo from "./logo.png";

export default function Navbar(){
return( 
<nav className="navbar">
    <img src={logo} className="App-logo" alt="logo" />
    <span>My travel journal.</span>
</nav>
)
}
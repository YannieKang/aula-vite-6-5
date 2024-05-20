import Navbar from "../Navbar/Navbar"

function Header() {
    return(
      <header className="flex justify-around bg-black text-white p-4">
        <span>Olá, Visitante!</span>
        <h1>Bem-vindo ao MovieApp</h1>
        <Navbar/>
      </header>
    )
}
export default Header
import logoImg from "../../../assets/logo.svg";
// import homeImg from "../../../assets/"
import Img from "./Img";
function Header() {
  return (
    <header className=" container p-4 m-auto bg-semiDarkBlue">
      <nav className="flex sm:justify-between sm:items-center">
        <img src={logoImg} alt="logo Image" />
        <div className=" flex gap-3 ">
          <Img />
          <Img />
          <Img />
          <Img />
        </div>
      </nav>
    </header>
  );
}
export default Header;

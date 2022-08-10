import { Fragment } from "react";


const Layout = (props) => {
  return (
    <>
      <header>
        <nav className="navBar">
        <h3 className="navH1">Home</h3>
        </nav>
      </header>

      {props.children}
    </>
  );
};

export default Layout;

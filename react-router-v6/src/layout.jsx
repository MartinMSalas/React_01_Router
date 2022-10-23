import React from "react"
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | {""}
        <Link to="/users">Users</Link> | {""}
        <Link to="/about">About</Link> | {""}
      </nav>
      <section>
        <Outlet>

        </Outlet>
      </section>
    </main>
  )
};

export default Layout;











/*

const Layout = (props) => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </nav>
      <section>
        <Outlet>

        </Outlet>
      </section>
    </main>
  )
};

export default Layout;
*/

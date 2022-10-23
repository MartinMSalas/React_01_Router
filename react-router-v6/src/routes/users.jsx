import { NavLink, useSearchParams, Outlet } from "react-router-dom";
import { getAllUsers } from "../users";

export function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const users = getAllUsers();
  const filter = searchParams.get("filter") ?? "";

  const handleFilter = (e) => {
    setSearchParams ({filter: e.target.value});
  }

  return (
    <div>
      <h1>Users</h1>
      <input value={filter} onChange={handleFilter} type="text" placeholder="filter"></input>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <ul>
          {users.filter(user => {
            if(!filter) return true;
            const name = user.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          }).map((user) => (
            <li key={user.id}>
              <h2>
                {/*                
                <Link to={"/users/" + user.id}>
                */}
              <NavLink to={user.id.toString()}>
                  {user.name}
                </NavLink>
              </h2>
            </li>
          ))}
        </ul>
        <article>
          <Outlet></Outlet>
        </article>
      </div>
    </div>
  );
}

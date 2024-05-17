import Location from "./Location";
import Search from "./Search";
import Theme from "./Theme";

function Header({data}) {
  return (
    <div className="container">
      <div>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <Location data={data}/>
          </div>
        </div>
        <div className="navbar-center">
        <Search />
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle"></button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Theme />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

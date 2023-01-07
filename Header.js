import { PersonCircle } from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="main-header">
      <div className="row">
        <div className="col-sm">
          <img className="logoImg"/>
        </div>
        <div className="col-sm">
          <input className="w-100 form-control" placeholder="Search here" />
        </div>
        <div className="col-sm align-right">
            <PersonCircle height={35} width={35} title='payal sharma' />
        </div>
      </div>
    </div>
  );
};

export default Header;

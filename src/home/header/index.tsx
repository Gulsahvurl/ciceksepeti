import * as React from "react";
import BottomHeader from "./bottom-header";
import CustomNavbar from "./navbar";
import "./style.scss";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <React.Fragment>
      <CustomNavbar></CustomNavbar>
      <BottomHeader></BottomHeader>
    </React.Fragment>
  );
};

export default React.memo(Header);

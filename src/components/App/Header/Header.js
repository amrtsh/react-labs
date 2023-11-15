import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {Image, LinkingWrapper} from "./Header.styles";
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog"
import logo from "../../../img/logo.png";
import ItemPage from "./../../ItemPage/ItemPage";
import {ship} from "../../Util/UtilShip";

const Header = () => {
    return (
        <Router>
            <LinkingWrapper>
                <div id="navbar">
                    <Image><img src={logo} alt="Logo"/></Image>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                <Route exact path={"/itempage/:id"} component={ItemPage}/>
                <Route exact path="/catalog" component={Catalog}>
                    <Catalog ship = {ship}/>
                </Route>
                <Route path="/cart">
                    <div>:(</div>
                </Route>
                <Route exact path="/" component={Home}>
                    <Home ship = {ship}/>
                </Route>
            </Switch>
        </LinkingWrapper>
        </Router>
)};

export default Header;
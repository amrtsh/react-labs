import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {Image, LinkingWrapper} from "../Header/Header.styles";
import Home from "../../Home/Home";
import logo from "../../../img/logo.png";

const Header = () => (
                <Router>
                    <LinkingWrapper>
                        <div id="navbar">
                            <Image><img src={logo} alt="Logo"/></Image>
                            <ul>
                                <li>
                                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/shop" activeClassName="selected">Catalog</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route path="/shop">
                                <div>:(</div>
                            </Route>
                            <Route path="/cart">
                                <div>:(</div>
                            </Route>
                            <Route exact path="/" component = {Home}>
                                <Home />
                            </Route>
                        </Switch>
                    </LinkingWrapper>
                </Router>
);

export default Header;
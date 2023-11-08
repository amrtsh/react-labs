import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {Image, LinkingWrapper} from "../Header/Header.styles";
import Home from "../../Home/Home";
import Catalog from "../../Catalog/Catalog"
import logo from "../../../img/logo.png";

const Header = () => {
    let shipsData = [
        {id: 1, name: 'Ship 1', tonnage: 1000.50, number_of_passengers: 150, tonnage_price: 12.50},
        {id: 2, name: 'Ship 2', tonnage: 850.25, number_of_passengers: 120, tonnage_price: 10.75},
        {id: 3, name: 'Ship 3', tonnage: 1200.75, number_of_passengers: 180, tonnage_price: 14.25},
        {id: 4, name: 'Ship 4', tonnage: 950.00, number_of_passengers: 140, tonnage_price: 11.75},
        {id: 5, name: 'Ship 5', tonnage: 750.80, number_of_passengers: 110, tonnage_price: 9.20},
        {id: 6, name: 'Ship 6', tonnage: 1050.25, number_of_passengers: 160, tonnage_price: 12.90},
        {id: 7, name: 'Ship 7', tonnage: 900.75, number_of_passengers: 130, tonnage_price: 11.00},
    ];
    return (<Router>
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
                    <Route path="/catalog">
                        <Catalog ship={shipsData}/>
                    </Route>
                    <Route path="/cart">
                        <div>:(</div>
                    </Route>
                    <Route exact path="/" component={Home}>
                        <Home/>
                    </Route>
                </Switch>
            </LinkingWrapper>
        </Router>
    )
};

export default Header;
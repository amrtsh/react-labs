import React, {useState} from "react";
import "./FilterForm.css";
import {ship} from "../../Util/UtilShip";
import HeroCatalog from "../../Catalog/HeroCatalog/HeroCatalog"

const Filter = () => {

    let [shipRender, setShipRender] = useState(ship);

    return (
        <div className="FilterContainer">
            <div className="inputmenu">
            <div className="filterBlock">
                <div className="dropDownMenu">
            <span className="dropdown">
            <button className="filterBut">Filter by</button>
                <label>
                    <input type="checkbox"/>
                        <ul>
                          <li onClick={() => filterByPassengers()}>Passengers</li>
                          <li onClick={() => filterByTonnagePrice()}>Tonnage price</li>
                        </ul>
                </label>
            </span>
                </div>
            </div>
            <div className="searchBlock">
                    <input id="search__input" className="header__search__input" type="text"
                           placeholder="Type something..."/>
                <button type="button" className="searchBut" onClick={()=>SearchImpl()}>Search</button>
                <button type="button" className="searchBut" onClick={()=>handleReset()}>Clear</button>
            </div>
            </div>
            <div>
                <HeroCatalog ship={shipRender}/>
            </div>
        </div>
    )

    function filterByPassengers(){
        let sortedShip = Array.from(ship);
        sortedShip.sort((conf1, conf2) => conf2.number_of_passengers - conf1.number_of_passengers);
        setShipRender(sortedShip);
    }

    function filterByTonnagePrice(){
        let sortedShip = Array.from(ship);
        sortedShip.sort((conf1, conf2) => conf1.tonnage_price - conf2.tonnage_price);
        setShipRender(sortedShip);
    }

    function SearchImpl() {
        const title = document.getElementById('search__input');
        const lowerCaseTitle = title.value.toLowerCase();

        let temp = ship.filter(conf => conf.name.toLowerCase().includes(lowerCaseTitle));
        setShipRender(temp);
    }


    function handleReset() {
        document.getElementById('search__input').value = " ";
        setShipRender(ship);
    }
}

export default Filter;
import React, {useEffect, useState} from "react";
import "./FilterForm.css";
import HeroCatalog from "../../Catalog/HeroCatalog/HeroCatalog"
import axios from "axios";
import Loading from "../../Loading/Loading";
import shipApi from "../../../utils/Api/Api";

const Filter = () => {

    const [ship, setShip] = useState(null);
    const [shipRender, setShipRender] = useState(ship);

    useEffect(() => {
        shipApi.getAll('http://localhost:5000/get_ships')
            .then((result) => {
                setShip(result.data);
                setShipRender(result.data);
            })
    }, []);
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
                    <button type="button" className="searchBut" onClick={() => SearchImpl()}>Search</button>
                    <button type="button" className="searchBut" onClick={() => handleReset()}>Clear</button>
                </div>
            </div>

            <div>
                {ship ? <HeroCatalog ship={shipRender}/> : <Loading/>}
            </div>

        </div>
    );

    function filterByPassengers() {
        axios.get('http://localhost:5000/get_ships?sort_by=number_of_passengers')
            .then((result) => {
                setShipRender(result.data);
            });
    }

    function filterByTonnagePrice() {
        axios.get('http://localhost:5000/get_ships?sort_by=tonnage_price')
            .then((result) => {
                setShipRender(result.data);
            });
    }

    function SearchImpl() {
        const title = document.getElementById('search__input').value;
        axios.get(`http://localhost:5000/search_ships?search_term=${title}`)
            .then((result) => {
                setShipRender(result.data);
            });
    }


    function handleReset() {
        document.getElementById('search__input').value = " ";
        setShipRender(ship);
    }
}

export default Filter;

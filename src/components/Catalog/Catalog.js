import React from "react";
import Filter from "./FilterForm/FilterForm";
import HeroCatalog from "./HeroCatalog/HeroCatalog";
import "./HeroCatalog/HeroContainer.css";


const Catalog = (props) => {
    return (
        <div>
            <Filter/>
            <HeroCatalog ship={props.ship}/>
        </div>
    );
};

export default Catalog;
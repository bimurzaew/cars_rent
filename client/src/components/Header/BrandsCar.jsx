import React from 'react';
import {useSelector} from "react-redux";

function BrandsCar(props) {
    const { brands } = useSelector((state) => state.brands);

    return (
        <div></div>
    );
}

export default BrandsCar;
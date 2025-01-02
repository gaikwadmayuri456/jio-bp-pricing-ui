import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import useInterval from "../useInterval";
import { setMetalData } from "../Redux/Actions/MetalDataActions"
const Apicalling = () => {
    const dispatch = useDispatch();
    function getMetalData() {
        axios
            .get("/goldrate")
            .then((res) => {
                dispatch(setMetalData(res.data))
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    useEffect(() => {
        getMetalData();
    },[])
    useInterval(
        () => {
            getMetalData();
        },
        900000
    )

}
export default Apicalling
import React, {useEffect} from 'react';
import Header from "../components/UI/header/Header";
import CarRentList from "../components/CarRentList";
import {getRentCars} from "../store/cars/carsSlice";
import {useDispatch} from "react-redux";

const About = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getRentCars())
    }, [dispatch])

    return (
        <div>
            <Header/>
            <CarRentList />
        </div>
    );
};

export default About;
import React, {useEffect} from "react";
import CatalogList from "../components/CatalogList";
import Footer from "../components/UI/footer/Footer";
import Section from "../components/UI/section/Section";
import Header from "../components/UI/header/Header";
import {useDispatch} from "react-redux";
import {getCars} from "../store/cars/carsSlice";

function Catalog() {
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getCars())
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <Section h={"Прокат машин"} p={"Аренда дорогих машин по низким ценам."}/>
            <CatalogList />
            <Footer/>
        </div>
    );
}

export default Catalog;
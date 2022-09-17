import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../components/UI/header/Header";
import CarForm from "../components/CarForm";
import {ICar} from "../models/models";
import axios, {AxiosError} from "axios";

const CarPage = () => {
    const params = useParams()

    const [cars, setCars] = useState<ICar[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function getOne(id: string) {
        try {
            setLoading(true)
            const response = await axios.get<ICar[]>(`http://localhost:5000/api/cars/${id}`)
            setCars(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        getOne(params.id ?? '').then()
    }, [params.id])

    console.log(cars)
    console.log('fsafa')

    return (
        <div>
            <Header/>
            {error
                ? <h1 style={{textAlign: 'center'}}>Возникла ошибка... {error}</h1>
                : loading
                    ? <h1 className="container" style={{textAlign: "center"}}>Загрузка...</h1>
                    : <CarForm car={cars} />
            }
        </div>
    );
};

export default CarPage;
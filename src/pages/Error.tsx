import React from 'react';
import Header from "../components/UI/header/Header";

const Error = () => {
    return (
        <div>
            <Header/>
            <h1 style={{color: "red", textAlign: "center"}}> Ошибка 404: Страницы не существует!</h1>
        </div>
    );
};

export default Error;
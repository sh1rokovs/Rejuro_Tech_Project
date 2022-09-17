import React from 'react';
import Header from "../components/UI/header/Header";
import Section from "../components/UI/section/Section";

const About = () => {
    return (
        <div>
            <Header/>
            <Section bg={"grey_bg"} h={"Контакты"} p={[<p>Телефон:+7999999999</p>,
                <p>Email: test@test.com</p>,
                <p>Адрес: г. Москва</p>]}/>
        </div>
    );
};

export default About;
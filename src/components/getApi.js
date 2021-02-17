import React from 'react';
import RenderPerson from './RenderPerson'

async function getApi() {

    let url10 = 'https://swapi.dev/api/people/10/';
    let response10 = await fetch(url10);
    let person10 = await response10.json();

    let url5 = 'https://swapi.dev/api/people/5/';
    let response5 = await fetch(url5);
    let person5 = await response5.json();

    let url11 = 'https://swapi.dev/api/people/11/';
    let response11 = await fetch(url11);
    let person11 = await response11.json();

    let personArr = [person10, person5, person11];

    // console.log(personArr);
    // console.log(personArr[0]);

    let jsxArr = [];

    for (let i = 0; i < personArr.length; i++) {

        let perName = <h1 className='perName'>Name: {personArr[i].name}</h1>;
        let perHeight = <h2 className='perHeight'>Height: {personArr[i].height}</h2>;
        let perMass = <h2 className='perMass'>Mass: {personArr[i].mass}</h2>;
        let perHair = <h2 className='perHair'>Hair_color: {personArr[i].hair_color}</h2>;

        jsxArr[i] = <div className='jsxArr'>{perName}{perHeight}{perMass}{perHair}</div>;

    }

    RenderPerson(jsxArr[0], jsxArr[1], jsxArr[2]);

}

export default getApi
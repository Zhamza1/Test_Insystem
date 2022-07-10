import styled from "styled-components"
import React from "react"

const CardWrapper=styled.div`
    width:275px;
    height:180px;
    background-color:white;
    border-radius:5px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    margin-top:50px;
`
const Texte=styled.div`
    margin:20px 20px;
`

function Card ({heure_mesure_temp,date_mesure_temp,resultat}) {
    
    return(
        <React.Fragment>
            <CardWrapper id="Card">
                            <Texte>
                                <p>Date de mesure de la  température : {date_mesure_temp} </p>
                                <p>Heure de mesure de la température: {heure_mesure_temp} </p>
                                <p>Température : {resultat} °C </p>
                            </Texte>
            </CardWrapper>
        </React.Fragment>            
    )} 

export default Card
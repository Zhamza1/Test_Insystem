import styled from "styled-components"
import { useState,useEffect,useRef } from "react"
import React from "react"
import Card from "../../components/Card"
import { MediaQueries } from "../../utils/style/MediaQueries"

const Body=styled.div`
    margin:0px 70px;
`
const AllCard=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;  
    ${MediaQueries("table")`
    justify-content:center;
    `}
`

const H1=styled.h1`
    text-align:center;
`

function Home() {

//déclaration des constantes 
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [temperature, setTemperature] = useState([])
    const noTemperature= temperature.status || temperature.message

//fonction pour afficher l'API
    useEffect(() => {
        try {
            fetchData()
        }
        catch(error) {
            return(error)
        }
      }, [])
      
      const fetchData=async () => {
          const response = await fetch("https://hubeau.eaufrance.fr/api/v1/temperature/chronique")
          const data = await response.json();

          setTemperature(data.data)
      }
    return(
        <React.Fragment>
            <Body>

                <H1>À L'HOGNEAU À GUSSIGNIES (59)</H1>
                    <AllCard>
                        {!noTemperature ? (
                            temperature.map((temperature) => (
                                        
                                <Card 
                                    key={temperature.name}
                                    resultat={temperature.resultat}
                                    date_mesure_temp={temperature.date_mesure_temp}
                                    heure_mesure_temp={temperature.heure_mesure_temp}
                                />
                                
                        ))):(
                            <p>No countries found... </p>
                        )}
                    </AllCard>                  
            </Body>
        </React.Fragment>
        
    )
}

export default Home
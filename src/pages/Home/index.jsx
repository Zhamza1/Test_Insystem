import styled from "styled-components"
import { useState,useEffect,useRef } from "react"
import React from "react"
import Card from "../../components/Card"
import { MediaQueries } from "../../utils/style/MediaQueries"

const Body=styled.div`
    margin:0px 70px;
`

const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    margin:50px 0px; 
    ${MediaQueries("tablet")`
    flex-wrap:wrap;
    `}
`
const SearchBar=styled.input`
    width:400px;
    height:50px;
    border-radius:5px;
    border:none;
    outline:none;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    padding:0 30px;
    ${MediaQueries("mobile")`
    width:300px;
    `}
    ${MediaQueries("mobil")`
    width:200px;
    `}
    

`
const Filter=styled.select`
    height:50px;
    width:150px;
    border:none;
    outline:none;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius:5px;
    padding-left:10px;
    ${MediaQueries("tablet")`
    margin-top:20px;
    `}
`
const AllCard=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;  
    ${MediaQueries("table")`
    justify-content:center;
    `}
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
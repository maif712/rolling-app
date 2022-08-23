
import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

export default function App() {

    const [mainArray, setMainArray] = useState([])
    const [myInput, setMyInput] = useState("")
    const [finalResult, setFinalResult] = useState([])

    const handleAddClick = () => {
        setMainArray(x => [...x, myInput])
    }
    
    const rolling = () => {
        const rndNumber = Math.floor(Math.random() * mainArray.length)     
        setFinalResult(mainArray[rndNumber])
        mainArray.splice(rndNumber, 1)
        setMainArray(x => [...x])
    }

    const deleting = (e) => {
        const target = mainArray.indexOf(e.target.innerHTML)
        mainArray.splice(target, 1)
        setMainArray(x => [...x])
    }

    return(
        <main className="container">
            <div className="wrapper">
                <input onChange={(e) => setMyInput(x => e.target.value)} value={myInput} type="text" className="txt" placeholder="Type Here..."/>
                <div className="show-names">
                    {mainArray.map((x, index) => {
                        return (
                            <div key={index} className="para-wrapper">
                                <p onClick={deleting} className="show-names__para">{x}</p>
                                <FontAwesomeIcon className="del" icon={faTrashCan} />
                            </div>
                            
                        )
                    })}
                    
                </div>
                <p className="show-names__final-result">{finalResult}</p>
                <div className="buttons-wrapper">
                    <button onClick={handleAddClick} className="btn-add">Add</button>
                    <button onClick={rolling} className="btn-roll">Roll</button>
                </div>
            </div>
        </main>
    )
}
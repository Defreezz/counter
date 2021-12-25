import React, {ChangeEvent, useEffect, useState} from "react";
import {Display} from "./Tablo/Display";
import {Button} from "./Buttons/Button/Button";

export function CounterV1() {
    //BLL
    const [counter, setCounter] = useState<number>(0)
    const inc = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }
    const reset = () => {setCounter(startValue)}

    const [startValue, setStartValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(0)
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    //  localstorage
    const setLocalStorage = () => {
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))
    }
    useEffect(() => { getLocalStorageHandler()}, [])

    const getLocalStorageHandler = () => {
        let max = localStorage.getItem("MaxValue")
        let min = localStorage.getItem("StartValue")
        setMaxValue(max && JSON.parse(max))
        setStartValue(min && JSON.parse(min))
        setCounter(min && JSON.parse(min))
        max === null && setCounter(0)
        max === null && setStartValue(0)
        max === null && setMaxValue(0)
    }

    const saveSettings = () => {
        setLocalStorage()
        setCounter(startValue)
    }



    //UI
    return (
        <div className={"v1"}>
            <div className={"wrapper"}>
                <div className={"display"}>
                    <span className={maxValue <= startValue || maxValue<=0 ? "spanError" : "spanDefault"}>Max Value </span>
                    <input
                        value={maxValue}
                        className={maxValue <= startValue || maxValue<=0 ? "inputSetError" : "inputSet"}
                        type={"number"}
                        onChange={maxValueHandler}
                    />
                    <br/>
                    <span className={maxValue <= startValue || maxValue<=0 ? "spanError" : "spanDefault"}>Start Value</span>
                    <input
                        value={startValue}
                        className={maxValue <= startValue || startValue < 0 ? "inputSetError" : "inputSet"}
                        type={"number"}
                        onChange={(e) => {
                            setStartValue(Number(e.currentTarget.value));
                            setCounter(Number(e.currentTarget.value))
                        }}
                    />
                </div>
                <span className={"buttContainerSet"}>
                    <Button
                        disabled={startValue >= maxValue || startValue < 0}
                        name={"SAVE"}
                        callback={saveSettings}
                    />
                </span>
            </div>
            <div>
                <div className={"wrapper"}>
                    {startValue >= maxValue || startValue < 0
                        ?<div className={"display"}>
                            <div className={"error"}>{"invalid input"}</div>
                        </div>
                        :<Display value={counter} maxValue={maxValue}/>}
                    <span className={"buttContainer"}>
                    <Button name={"INC"} callback={inc} disabled={counter >= maxValue || startValue < 0}/>
                    <Button name={"RESET"} callback={reset} disabled={counter === startValue}/>
                </span>
                </div>
            </div>
        </div>

    )

}
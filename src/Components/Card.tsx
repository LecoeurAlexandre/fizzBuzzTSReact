import { useEffect, useState } from "react"

interface Props {

}

const Card = (props: Props) => {

    const [myValue, setValue] = useState<number>(0)

    const increaseValue = () => {
        setValue(myValue+1)
    }

    const decreaseValue = () => {
        setValue(myValue-1)
    }

    let fizzBuzz = "";
    if (myValue % 3 === 0 ) {
        if (myValue % 5 === 0) {fizzBuzz = "fizzBuzz"} else {fizzBuzz = "fizz"}
    } else if (myValue % 5 === 0 ){
        {fizzBuzz = "buzz"}
    } else {
        fizzBuzz = myValue.toString()
    }

    useEffect (()=> {
        console.log(myValue);
        return () => {
            console.log("return de useEffect:", myValue)
        }
    })
    
    
    return (
        <div className="card col-4 mx-auto my-3 bg-dark text-light">
            <div className="card-body">
                <h2 className="card-title">FizzBuzz</h2>
                <hr/>
                <div className="rounded-circle mx-auto bg-primary" style={{width: "15rem", height: "15rem"}}>
                    <p className="p-5 fs-1">{fizzBuzz}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={decreaseValue}type="button" className="btn btn-info fs-1 rounded-circle" style={{width: "5rem", height: "5rem"}}>-</button>
                    <button onClick={increaseValue} type="button" className="btn btn-info fs-1 rounded-circle" style={{width: "5rem", height: "5rem"}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Card
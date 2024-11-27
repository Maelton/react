import { MouseEvent, useState } from "react";

export default function App() {

    let [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            
            <br/>
            
            <button onClick={ () => setCounter(counter + 1) }>
                ADD
            </button>

            <button onClick={ () => setCounter(counter - 1) }>
                SUBTRACT
            </button>
        </div>
    );
}
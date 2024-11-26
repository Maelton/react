import { MouseEvent } from "react";

export default function App() {
    return (
        <Button />
    );
}

const Button = () => {
    let counter: number = 0;

    const iRecieveAMouseEvent = (e: MouseEvent<HTMLButtonElement>) => console.log(e.target);

    return (
        <>  
            <button onClick={
                (eventObject: MouseEvent<HTMLButtonElement>) => {
                counter++;
                alert(counter);
                console.log(`Im button add and my event is: ${eventObject.target}`);
            }}>
                Add
            </button>
            <button onClick={
                (e) => {
                counter--;
                alert(counter);

                //React automatically identifies I expect a MouseEvent and provides it to me
                iRecieveAMouseEvent(e);
            }}>
                Subtract
            </button>
        </>
    );
};
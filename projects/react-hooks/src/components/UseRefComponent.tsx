import { useRef } from "react";

function UseRefComponent() {
    let content = useRef<HTMLInputElement | null>(null);
    const printInputContent = () => {
        console.log(content.current?.value);
        content.current?.focus();
        content.current!.value = '';
    }

    return (
        <div>
            <input ref={content} placeholder="Type and print" />
            <button onClick={printInputContent}>console.log()</button>
        </div>
    );
}

export default UseRefComponent;
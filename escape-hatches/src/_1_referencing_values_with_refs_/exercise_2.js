import {useRef} from "react";

let timeoutID;

function DebouncedButton({ onClick, children }) {
    const timeoutRef = useRef()
    return (
        <button onClick={() => {
            // clearTimeout(timeoutID);
            // timeoutID = setTimeout(() => {
            //     onClick();
            // }, 1000);

            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                onClick();
            }, 1000);
        }}>
            {children}
        </button>
    );
}

export default function Dashboard() {
    return (
        <>
            <DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Lullaby sung!')}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
}

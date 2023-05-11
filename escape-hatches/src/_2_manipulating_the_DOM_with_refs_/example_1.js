import { useRef } from 'react';

export default function Cat() {
    const firstPic = useRef(null);
    const secondPic = useRef(null);
    const thirdPic = useRef(null);

    function handleFirst() {
        firstPic.current.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "center"
        });
    }

    function handleSecond() {
        secondPic.current.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "center"
        });
    }

    function handleThird() {
        thirdPic.current.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "center"
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleFirst}>1</button>
                <button onClick={handleSecond}>2</button>
                <button onClick={handleThird}>3</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                            ref={firstPic}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                            ref={secondPic}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                            ref={thirdPic}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}
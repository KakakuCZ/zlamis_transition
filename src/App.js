import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useRef, useState} from "react";

let dataBar = [
    {
        name: "prvni",
    },
    {
        name: "druhy",
    },
    {
        name: "treti",
    },
    {
        name: "ctvrty",
    },
    {
        name: "paty",
    }
]

const delay = 500;

function SecondApp(){

    const [currentElementIndex, setCurrentElementIndex] = useState(0);
    const [lastElementIndex, setLastElementIndex] = useState(undefined);

    const handleNext = () => {
        setLastElementIndex(currentElementIndex)
        const newValue = currentElementIndex + 1 > dataBar.length - 1
            ? 0
            : currentElementIndex + 1;

        setCurrentElementIndex(newValue);
    }

    const handlePrev = () => {
        setLastElementIndex(currentElementIndex)
        const newValue = currentElementIndex - 1 < 0
            ? dataBar.length - 1
            : currentElementIndex - 1;

        setCurrentElementIndex(newValue);
    }

    const getStyleByElementAtIndex = (index) => {
        if (index === currentElementIndex) {
            return {
                transition: `${delay}ms`,
                transitionDelay: `${delay}ms`,
                opacity: 1,
            }
        }

        if (index === lastElementIndex) {
            return {
                transition: `${delay}ms`,
                opacity: 0,
            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <div>
                        <button
                            onClick={handlePrev}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </p>
                <div className="container">
                    <div className="containerList" id="list">
                        {dataBar.map((element, index) => (
                            <div
                                className={`
                                    item
                                `}
                                style={getStyleByElementAtIndex(index)}
                            >
                                {element.name}
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SecondApp;

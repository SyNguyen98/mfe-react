import React from 'react';
import ReactDOM from "react-dom/client";

function ReactComponent() {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        const counterChannel = new BroadcastChannel('counter');
        counterChannel.postMessage(counter + 1);
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2 style={{color: "#2196F3", margin: "8px 0"}}>
                React Component
            </h2>
            <div>
                <img style={{width: "200px", height: "auto"}} alt="react-logo"
                     src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png"/>
            </div>
            <button onClick={handleClick}
                    style={{
                        backgroundColor: "#1976D2",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}>
                Counter
            </button>
            <div style={{marginTop: "16px"}}>
                Counter: {counter}
            </div>
        </div>
    );
}

export default ReactComponent;

export const mountReactComponent = (container: HTMLElement) => {
    ReactDOM.createRoot(container).render(<ReactComponent/>)
}
import React from 'react';
import ReactDOM from "react-dom/client";

function ReactComponent() {
    return (
        <div>
            This is a React component
        </div>
    );
}

export default ReactComponent;

export const mountReactComponent = (container: HTMLElement) => {
    const root = ReactDOM.createRoot(container)

    root.render(<ReactComponent/>)
}
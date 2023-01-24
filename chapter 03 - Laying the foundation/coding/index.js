import React from "react"
import ReactDOM from "react-dom/client"

// const heading1 =  React.createElement("h1",{id:"heading1"},"heading 1")
const heading1 =  (
    <h1 id="heading1">heading 1</h1>
)
    const heading2 =  React.createElement("h1",{id:"heading2", style:{color:"red",backgroundColor:"black"}},"heading 2")
    const Container =  ()=>{
        return <div>
            {heading1}
            <div>Namaste React</div>
        </div>
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(Container())
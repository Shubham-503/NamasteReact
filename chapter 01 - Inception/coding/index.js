const heading1 =  React.createElement("h1",{id:"heading1"},"heading 1")
    const heading2 =  React.createElement("h1",{id:"heading2", style:{color:"red",backgroundColor:"black"}},"heading 2")
    const container =  React.createElement("div",{class:"container"},[heading1,heading2])

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(container)
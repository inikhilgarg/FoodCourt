import React from "react"
import ReactDOM from "react-dom/client"

const headerJSX=React.createElement('div',{className:"title"},
[React.createElement('h1',{},"h1"),
React.createElement('h2',{},"h2"),
React.createElement('h3',{},"h3")])

const header=(
    <div className="title">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
    </div>
)

const Header=()=>{
    return(
        <div className="title">
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
        </div>
    )
}


// const h1=React.createElement('h1',{},"hello world using react")
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(headerJSX)
// root.render(header)
root.render(<Header/>)
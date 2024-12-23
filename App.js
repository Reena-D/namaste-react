const heading=React.createElement("div",{},[
    React.createElement("div",{},[
        React.createElement("h1",{},"m h1 tag"),
        React.createElement("h2",{},"m h2 tag")
    ]),
    React.createElement("div",{},[
        React.createElement("h1",{},"m h1 from child 2"),
        React.createElement("h2",{},"m h2 from child 2")
    ])
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
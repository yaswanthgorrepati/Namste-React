/*
<div id = "parent">
    <div id = "child">
        <h1>I am h1</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "test" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);

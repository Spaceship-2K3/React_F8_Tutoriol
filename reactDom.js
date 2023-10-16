const postItem = React.createElement(
    "div",
    {
        className: "post-item",
    },
    React.createElement(
        "h2",
        {
            title: "Hoc ReactJS tai F8",
        },
        "Hoc ReactJS"
    ),
    React.createElement("p", {}, "Hoc ReactJS tu co ban toi nang cao")
);
// get root element
const rootElement = document.querySelector("#root");

// React-DOM -> render UI
ReactDOM.render(postItem, rootElement);
console.log(ReactDOM);

// ! BT
/*
<ul class="list">
    <li class="item">HTML</li>
    <li class="item">CSS</li>
    <li class="item">JS</li>
</ul>
*/
const list = React.createElement(
    "ul",
    {
        className: "list",
    },
    React.createElement(
        "li",
        {
            className: "item",
            style: { color: "red" },
        },
        "HTML"
    ),
    React.createElement(
        "li",
        {
            className: "item",
            style: { color: "blue" },
        },
        "CSS"
    ),
    React.createElement(
        "li",
        {
            className: "item",
            style: { color: "orange" },
        },
        "JS"
    )
);

ReactDOM.render(list, rootElement);

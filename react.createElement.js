// ! 1 element
// Dom
const h1Dom = document.createElement("h1");
h1Dom.title = "Hello";
h1Dom.className = "heading";
h1Dom.innerHTML = "Hello guys";
document.body.appendChild(h1Dom);

// React -> React-DOM
// React.createElement(type, props, children, n)
const h1React = React.createElement(
    "h1",
    {
        title: "hello",
        className: "heading",
    },
    "Hello Guys"
);

// mul elements
// DOM
const ulDOM = document.createElement("ul");
ulDOM.id = "list1";
ulDOM.style = "color : red";
const liDOM1 = document.createElement("li");
liDOM1.id = "liDom-1";
liDOM1.style = "color:green";
const liDOM2 = document.createElement("li");
liDOM1.innerHTML = "item1";
liDOM2.innerHTML = "item2";
ulDOM.append(liDOM1, liDOM2);
document.body.appendChild(ulDOM);

// React
const ulReact = React.createElement(
    "ul",
    {
        id: "list2",
        style: "color :blue",
    },
    React.createElement(
        "li",
        {
            id: "liReact-1",
            style: "color : black",
        },
        "item1"
    ),
    React.createElement("li", null, "item2")
);

console.log(ulReact);

//<!-- ! BT -->
<div class="post-item">
    <h2 title="Hoc React tai F8">Hoc ReactJS</h2>
    <p>Hoc ReactJS tu co ban den nang cao</p>
</div>;

// Dom
const postDom = document.createElement("div");
postDom.classList.add("post-item");
const h2Dom = document.createElement("h2");
const pDom = document.createElement("p");
h2Dom.title = "Hoc React tai F8";
h2Dom.innerHTML = "Hoc Reactjs";
pDom.innerHTML = "Hoc Reactjs tu co ban toi nang cao";
postDom.append(h2Dom, pDom);
document.body.append(postDom);

// React js
const postReact =
    ("div",
    {
        className: "post-item",
    },
    React.createElement(
        "h2",
        {
            title: "Hoc React tai F8",
        },
        'Hoc React tai F8">Hoc ReactJS'
    ),
    React.createElement(
        "p",
        {
            className: "Hoc   F8",
        },
        "Hoc ReactJS tu co ban den nang cao"
    ));

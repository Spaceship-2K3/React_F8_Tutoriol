const reactCourse = "ReactJS F8";
const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
    {
        id: 2,
        name: "JS",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];
const ul = (
    <ul>
        {courses.map((item) => {
            return (
                <li id={item.id} key={item.id}>
                    {item.name}
                </li>
            );
        })}
    </ul>
);

ReactDOM.render(ul, document.querySelector("#root"));

function App() {
    return (
        <div id="wrapper">
            <button
                type="button"
                onClick={(event) => {
                    console.log(event.target);
                    console.log(Math.random());
                }}
            >
                Click me!
            </button>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));

// ! UI Component
const CourseItem = function ({ course, onHandleClick }) {
    return (
        <li className="course-item">
            <h2 onClick={() => onHandleClick(course)} className="course-title">
                {course.title}
            </h2>

            <img src={course.icon_url} alt="" className="course-icon" />
            <img src={course.image_url} alt="" className="course-img" />
            <p className="course-desc">{course.description}</p>
            <p className="course-member">{course.students_count}</p>
        </li>
    );
};

// ! Container
function CoursesList() {
    // todo : useCallback
    const handleClick = (course) => {
        console.log(course.title);
    };

    return (
        <ul className="course-list">
            {courses.map((course) => {
                return (
                    <CourseItem
                        key={course.id}
                        course={course}
                        onHandleClick={handleClick}
                    />
                );
            })}
        </ul>
    );
}

ReactDOM.render(<CoursesList />, document.querySelector("#root"));

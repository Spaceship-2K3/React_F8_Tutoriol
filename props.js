function PostItem({ image, title, desc, publishedAt, callback = () => {} }) {
    callback();
    return (
        <div className="post-item">
            <img src={image} alt="" className="post-img" />
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{desc}</p>
            <p className="post-published"> {publishedAt}</p>
        </div>
    );
}

const postList = (
    <div className="post-list">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />

        <PostItem
            title="   C#(.Net) - Tương tác với phần mềm"
            image="https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            desc="Bạn có kiến thức về C# không"
            publishedAt="1 tháng trước - 5 phút đọc"
            data={[{ a: 1 }, { b: 2 }]}
            callback={() => {}}
        />
    </div>
);

ReactDOM.render(postList, document.querySelector("#root"));

// ! BT

const CourseItem = function ({ title, icon, image, desc, member }) {
    return (
        <li className="course-item">
            <h2 className="course-title">
                {title}
                <img src={icon} alt="" className="course-icon" />
            </h2>
            <img src={image} alt="" className="course-img" />
            <p className="course-desc">{desc}</p>
            <p className="course-member">{"Số thành viên : " + member}</p>
        </li>
    );
};

const coursesList = (
    <ul className="course-list">
        {courses.map((course) => {
            return (
                <CourseItem
                    key={course.id}
                    title={course.title}
                    icon={course.icon_url}
                    image={course.image_url}
                    desc={course.description}
                    member={course.students_count}
                />
            );
        })}
    </ul>
);

ReactDOM.render(coursesList, document.querySelector("#root"));

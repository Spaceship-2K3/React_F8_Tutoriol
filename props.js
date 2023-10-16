function PostItem({ image, title, desc, publishedAt, callback = () => {} }) {
    callback();
    return (
        <div className="post-item">
            <img src={image} alt="" className="post-img" />
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{desc}</p>
            <p className="post-published">{publishedAt}</p>
        </div>
    );
}

const postList = (
    <div className="post-list">
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />

        <PostItem
            key={123}
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
const courses = [
    {
        id: 7,
        title: "Kiến Thức Nhập Môn IT",
        slug: "lessons-for-newbie",
        description:
            "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
        image: "courses/7.png",
        icon: "courses/7/6200b81f52d83.png",
        video_type: "youtube",
        video: "M62l1xA5Eu8",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 118146,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: true,
        user_progress: 18,
        last_completed_at: "2023-07-21 15:06:31",
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
        video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8",
        landing_page_url: "/courses/lessons-for-newbie",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 15,
        title: "HTML CSS Pro",
        slug: "htmlcss",
        description:
            "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        image: "courses/15/62f13d2424a47.png",
        icon: "courses/15/62385d6c63dfa.png",
        video_type: "upload",
        video: null,
        old_price: 2500000,
        price: 1299000,
        pre_order_price: 699000,
        students_count: 3837,
        is_pro: true,
        is_coming_soon: false,
        is_selling: true,
        published_at: "2022-08-18T17:00:00.000000Z",
        is_registered: true,
        user_progress: 68,
        last_completed_at: "2023-10-02 13:05:01",
        image_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        video_url: "",
        landing_page_url: "/landing/htmlcss",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 3,
        title: "Responsive Với Grid System",
        slug: "responsive-web-design",
        description:
            "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
        image: "courses/3.png",
        icon: "courses/3/6200afe1240bb.png",
        video_type: "youtube",
        video: "uz5LIP85J5Y",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 40184,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png",
        video_url: "https://www.youtube.com/watch?v=uz5LIP85J5Y",
        landing_page_url: "/courses/responsive-web-design",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 1,
        title: "Lập Trình JavaScript Cơ Bản",
        slug: "javascript-co-ban",
        description:
            "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
        image: "courses/1.png",
        icon: "courses/1/6200ad9d8a2d8.png",
        video_type: "youtube",
        video: "0SJE9dYdpps",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 119653,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: true,
        user_progress: 93,
        last_completed_at: "2023-06-23 03:01:02",
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png",
        video_url: "https://www.youtube.com/watch?v=0SJE9dYdpps",
        landing_page_url: "/courses/javascript-co-ban",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 12,
        title: "Lập Trình JavaScript Nâng Cao",
        slug: "javascript-nang-cao",
        description:
            "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
        image: "courses/12.png",
        icon: "courses/12/6200af2620118.png",
        video_type: "youtube",
        video: "MGhw6XliFgo",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 32490,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png",
        video_url: "https://www.youtube.com/watch?v=MGhw6XliFgo",
        landing_page_url: "/courses/javascript-nang-cao",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 14,
        title: "Làm việc với Terminal & Ubuntu",
        slug: "windows-terminal-wsl",
        description:
            "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
        image: "courses/14/624faac11d109.png",
        icon: "courses/14/624faac2ee23d.png",
        video_type: "youtube",
        video: "7ppRSaGT1uw",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 14879,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png",
        video_url: "https://www.youtube.com/watch?v=7ppRSaGT1uw",
        landing_page_url: "/courses/windows-terminal-wsl",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 13,
        title: "Xây Dựng Website với ReactJS",
        slug: "reactjs",
        description:
            "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
        image: "courses/13/13.png",
        icon: "courses/13/6200af9262b30.png",
        video_type: "youtube",
        video: "x0fSBAgBrOQ",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 54794,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png",
        video_url: "https://www.youtube.com/watch?v=x0fSBAgBrOQ",
        landing_page_url: "/courses/reactjs",
        is_pre_order: false,
        is_published: true,
    },
];

const CourseItem = function ({ title, icon, image, desc, member }) {
    return (
        <li className="course-item">
            <h2 className="course-title">{title}</h2>
            <img src={icon} alt="" className="course-icon" />
            <img src={image} alt="" className="course-img" />
            <p className="course-desc">{desc}</p>
            <p className="course-member">{member}</p>
        </li>
    );
};

const coursesList = (
    <ul className="course-list">
        {courses.map((course) => {
            return (
                <CourseItem
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

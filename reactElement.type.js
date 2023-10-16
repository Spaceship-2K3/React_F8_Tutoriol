function Header() {
    return <div className="header">New Header</div>;
}

class Content extends React.Component {
    render() {
        return <div className="content">New Content</div>;
    }
}

const app = (
    <div className="wrapper">
        <Header />
        <Content />
        <div className="footer">Footer</div>
    </div>
);

ReactDOM.render(app, document.querySelector("#root"));

// ! BT
/*
<div class="post-list">
    <div class="post-item">
        <img
            src="https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
            class="post-img"
        />
        <h2 class="post-title">C#(.Net) - Tương tác với phần mềm</h2>
        <p class="post-desc">Bạn có kiến thức về C# không</p>
        <p class="post-published">1 tháng trước - 5 phút đọc</p>
    </div>
</div>
*/

function PostItem() {
    return (
        <div className="post-item">
            <img
                src="https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="post-img"
            />
            <h2 className="post-title">C#(.Net) - Tương tác với phần mềm</h2>
            <p className="post-desc">Bạn có kiến thức về C# không</p>
            <p className="post-published">1 tháng trước - 5 phút đọc</p>
        </div>
    );
}

const postList = (
    <div className="post-list">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
);

ReactDOM.render(postList, document.querySelector("#root"));

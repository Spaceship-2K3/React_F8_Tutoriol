/**
 * ! Phần  1 :
 *  todo :  - Xử lý Dom Event
 *  todo :  - Component do chúng ta định nghĩa phải viết in hoa kí tự đầu
 *  todo :  VD : không được đặt tên component <app/>
 *  todo :  - Chọn component trong 1 object
 *  todo :  - Booleans , Null & Undefined không được render
 *  todo :  - Kết hợp toán tử logic để render theo điều kiện
 */

const Form = {
    Input() {
        return <input />;
    },
    Checkbox() {
        return <input type="checkbox" />;
    },
};

function Button({ title, href, onClick }) {
    let Component = "button";
    const props = {};
    if (href) {
        Component = "a";
        props.href = href;
    }

    if (onClick) {
        props.onClick = onClick;
    }

    return <Component {...props}>{title}</Component>;
}

function App({ title, content }) {
    // const type = "Input";
    // const Component = Form[type];
    let firstAccess = false;
    return (
        <div id="wrapper">
            {/* <Form.Input /> */
            /* <Component /> */}

            {/* <Button
                    title="Click me!"
                    href="https://github.com/Spaceship-2K3"
                    onClick={() => console.log(Math.random())}
                /> */}

            {null}
            {undefined}
            {false}
            {/* {firstAccess && <h1>Welcome to F8</h1>} */}
            {<h1>{title || content || "Chao mung tro lai "}</h1>}
        </div>
    );
}

ReactDOM.render(
    <App title="Welcome to F8" content="Content" />,
    document.querySelector("#root")
);

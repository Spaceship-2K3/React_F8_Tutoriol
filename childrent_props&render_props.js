/**
 * ! Phần 2 : Props trong JSX
 * todo:    - <YourComponent 
                propName1 ="String literals"
                propName2 ={expression}
            />
 * todo :   - Props default to "true"
 * todo :   - Spread/Rest props 
 * todo :   - Children prop
                + <YourComponent >String literals<YourComponent/>
                + <YourComponent >{expression}<YourComponent/>
 * todo :   - Render props 
 */

function Button({ children, isPrimary }) {
    // console.log(isPrimary); // true; , isPrimary ,  <button>{title}</button>
    return <button>{children}</button>;
}

function Input({ children, label, ...inputProps }) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input {...inputProps} />
        </div>
    );
}

function List({ data, children }) {
    return <ul>{data.map((item, index) => children(item, index))}</ul>;
}

// ! Children se tro thanh prop
function App() {
    const title = "hello moi ng";
    const cars = ["honda", "bwm", "mazda"];
    return (
        <div id="wrapper">
            {/* <Button title="Click me" />  */}
            {/* <Button isPrimary title={title} /> Mac dinh  isPrimary = true */}
            {/* <Input
                label="Full name"
                type="text"
                placeholder="Enter name..."
                title="Day la input"
                onFocus={() => {
                    console.log(Math.random());
                }}
            /> */}
            {/* <Button>Click me !</Button>
            <Button>{false || "Click me !"}</Button> */}

            <List data={cars}>
                {/*  {(item, index) => <li key={index}>{item}</li>} => children */}
                {(item, index) => <li key={index}>{item}</li>}
            </List>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));

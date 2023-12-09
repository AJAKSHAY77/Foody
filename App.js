import react from "react";
import reactDOM from "react-dom/client";

const heading = react.createElement("h1", { id: "heading" }, "akshay jain");

const heading2 = <h1>hello all</h1>;
const Compo = () => {
    return (
        <p>hello all public</p>
    )
}


const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Compo/>);

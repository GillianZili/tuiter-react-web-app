import { Link }
    from "react-router-dom";
import Nav from "../nav";

function Tuiter() {
    return (
        <div>
            <Nav />
            <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter
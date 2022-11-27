import { Link } from "react-router-dom";
import "./AddButton.css";

export default function AddButton({action, to}) {
    return (
        <button className="add-btn">
            <Link className="icon-decor" to={to}>{"+"}</Link>
        </button>
    );
}
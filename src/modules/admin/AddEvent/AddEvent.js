import "./AddEvent.css";
import CustomInput from "../../../utils/components/CustomInput/CustomInput";
import { Link } from "react-router-dom";

export default function AddEvent() {
    return (
        <div className="main-view">
            <CustomInput
                type="text"
                placeholder="Descrição"
                maxLength={35}
                onChange={null}
            />
            <CustomInput
                type="text"
                placeholder="Responsável"
                maxLength={35}
                onChange={null}
            />
            <CustomInput
                type="text"
                placeholder="ATA"
                maxLength={35}
                onChange={null}
            />
            <button className="add-btn">
                <Link className="btn-text" to={"/eventos"}>ADICIONAR</Link>
            </button>
        </div>
    );
}
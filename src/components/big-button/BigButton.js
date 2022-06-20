import {
  Link
} from "react-router-dom";
export default function BigButton({icon, title, link}) {
    return (
        <Link to={link} className="w-96 h-96 flex flex-col justify-center items-center">
            {icon}
            <p>{title}</p>
        </Link>
    );
}
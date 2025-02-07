
// import PropTypes from "prop-types";
import {MdExpandMore ,MdDownload} from "react-icons/md";
const ButtonPrimary = () =>{
    return (
        <div>
            <a href="" className="btn btn-primary">
                Download CV <MdDownload />
            </a>
        </div>
    )
}

const ButtonOutline = () => {
    return (
        <div>
            <a href="" className="btn btn-outline">
                Scroll Down<MdExpandMore />
            </a>
        </div>
    )
}

// ButtonPrimary.PropTypes = {
//     label : PropTypes.string.isRequired,
//     href : PropTypes.string,
//     target : PropTypes.string,
//     icon : PropTypes.string,
//     classes : PropTypes.string,
// }

export{
    ButtonPrimary , ButtonOutline
} ;
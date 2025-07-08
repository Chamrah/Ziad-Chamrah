
// import PropTypes from "prop-types";
import {MdExpandMore ,MdDownload} from "react-icons/md";
// import { MdDownload } from "react-icons/md";

const ButtonPrimary = () => {
  return (
    <div>
      <a
        href="/ziad-chamrah-CV.pdf"
        download="ziad-chamrah-CV.pdf"
        className="btn btn-primary flex items-center gap-2"
      >
        Download CV <MdDownload />
      </a>
    </div>
  );
};

export default ButtonPrimary;


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
    ButtonPrimary
} ;
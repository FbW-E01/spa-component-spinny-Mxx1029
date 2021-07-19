// import { FaSpinner } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import './Spinner.css';


export default function Spinner(){
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} spin />
            {/* with propoerty spin it will just spin by itself, no CSS animation needed */}
            {/* <FaSpinner icon="spinner" spin /> */}
            {/* <i className="fas fa-spinner spinner"></i> */}
        </div>
    );
}
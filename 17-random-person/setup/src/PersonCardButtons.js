import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useGlobalContext } from "./context";

const PersonCardButtons = () => {
  const { handleValue } = useGlobalContext();
  return (
    <div className="values-list">
      <button className="icon" data-label="name" onMouseOver={handleValue}>
        <FaUser />
      </button>
      <button className="icon" data-label="email" onMouseOver={handleValue}>
        <FaEnvelopeOpen />
      </button>
      <button className="icon" data-label="age" onMouseOver={handleValue}>
        <FaCalendarTimes />
      </button>
      <button className="icon" data-label="street" onMouseOver={handleValue}>
        <FaMap />
      </button>
      <button className="icon" data-label="phone" onMouseOver={handleValue}>
        <FaPhone />
      </button>
      <button className="icon" data-label="password" onMouseOver={handleValue}>
        <FaLock />
      </button>
    </div>
  );
};

export default PersonCardButtons;

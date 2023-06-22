import { CiDark } from "react-icons/ci";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider.jsx";

const ToggleMode = () => {
    const { darkMode, setDarkMode } = useContext(AppContext);
    return (
        <button
            className={`rounded-lg border ${
                darkMode ? "bg-white" : "bg-slate-700"
            }`}
            onClick={() => setDarkMode(prev => !prev)}
        >
            <CiDark
                size="1.5em"
                className={`${darkMode ? "text-black" : "text-white"}`}
            />
        </button>
    );
};

export default ToggleMode;

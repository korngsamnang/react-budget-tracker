import { CiDark } from "react-icons/ci";
import { useApp } from "../../context/AppContext.jsx";

const ToggleMode = () => {
    const { darkMode, setDarkMode } = useApp();
    return (
        <button
            className={`rounded-lg border ${
                darkMode ? "bg-white" : "bg-slate-700"
            }`}
            onClick={() => setDarkMode(prevState => !prevState)}
        >
            <CiDark
                size="1.5em"
                className={`${darkMode ? "text-black" : "text-white"}`}
            />
        </button>
    );
};

export default ToggleMode;

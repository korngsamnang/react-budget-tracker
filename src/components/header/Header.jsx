import Title from "./Title.jsx";
import ToggleMode from "./ToggleMode.jsx";

const Header = () => {
    const title = "My Budget Tracker";
    return (
        <header className="flex items-center justify-between">
            <Title title={title} />
            <ToggleMode />
        </header>
    );
};

export default Header;

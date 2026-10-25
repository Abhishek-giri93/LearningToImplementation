import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ProfileCard() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`profile-card ${theme}`}>
            <div className="profile-avatar">AG</div>
            <h2>Abhishek Giri</h2>
            <h4>Frontend Developer</h4>

            <p>
                Learning React, building projects, and exploring new technologies.
            </p>

            <button>View Profile</button>
        </div>
    )

}
export default ProfileCard;
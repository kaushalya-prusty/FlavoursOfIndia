import { useContext } from "react";
import Profile from "./Profile";
import UserContext from "../utilities/UserContext";
const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Us</h1>
      <p>User:{loggedInUser}</p>
      <Profile name={"Kausalya"} location={"Bengalore"} />
    </div>
  );
};
export default About;

import Template from "../components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      head="Build skills for today, tomorrow, and beyond."
      description="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      sign="Sign Up"
    />
  );
}

export default Signup;

import { useState } from "react";
import Form from "../components/Form";
import { loginRequest } from "../ApiRequest/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import utils from "../utilities/utilities";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // checking email is empty or not
    if (email === "") {
      return toast.error("Email is Required");
    }

    const { data } = await loginRequest({ UserEmail: email });
    if (data?.msg === "success") {
      toast.success("success");
      utils.setLocalStorage("email", email);
      navigate("/otp");
      setLoading(false);
    } else {
      toast.error("failed");
      setLoading(false);
    }
  };

  return (
    <div
      className="container position-relative"
      style={{ width: "100%", height: "85vh" }}
    >
      <div
        className="shadow p-5 rounded-lg position-absolute top-50 start-50 translate-middle"
        style={{ width: "600px", maxWidth: "400px" }}
      >
        <Form
          onChangeEmail={handleChange}
          onHandleSubmit={handleSubmit}
          label="Email address"
          btnLabel="Login"
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Login;

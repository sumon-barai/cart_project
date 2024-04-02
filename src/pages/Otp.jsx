import { useState } from "react";
import Form from "../components/Form";
import { OtpVerifyRequest } from "../ApiRequest/api";
import utils from "../utilities/utilities";
import toast from "react-hot-toast";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp === "") {
      return toast.error("otp is Required");
    }

    const email = utils.getLocalStorage("email");
    setLoading(true);
    const { data } = await OtpVerifyRequest({ UserEmail: email, OTP: otp });

    if (data.msg === "success") {
      toast.success("Login success");
      utils.setLocalStorage("token", data?.data);
      utils.removeLocalStorage("email");
      setLoading(false);
      window.location.href = "/";
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
          label="Write Otp"
          type="text"
          btnLabel="verify Otp"
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Otp;

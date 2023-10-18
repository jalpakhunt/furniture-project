import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { BE_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/auth/AuthSlice";
import { toast } from "react-toastify";

function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSubmit = () => {
    console.log("🚀 ~ file: Login.jsx:32 ~ handelSubmit ~ user:", user);
    axios
      .post(`${BE_URL}/user/signin`, user)
      .then((res) => {
        console.log("Response from server:", res);
        dispatch(login(res?.data));
        if (res?.data?.daat?.userType === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />

              <MDBBtn size="lg" type="submit" onClick={() => handelSubmit()}>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with facebook
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

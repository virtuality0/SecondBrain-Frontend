import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { LabelledInput } from "./ui/LabelledInput";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { axiosApi } from "../utils/axiosConfig";

export const Signin = () => {
  type signinFormType = {
    username: string;
    password: string;
  };
  const onSubmitHandler = async () => {
    axiosApi
      .post<{ msg: string; token: string }>("/user/signin", {
        username: signinForm.username,
        password: signinForm.password,
      })
      .then((response) => {
        toast(response.data.msg);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast(err.response.data.msg);
      });
  };
  const [signinForm, setSignupForm] = useState<signinFormType>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-screen items-center">
      <form
        action={onSubmitHandler}
        className="size-full flex justify-center items-center"
      >
        <div className="border-2 border-gray-200 w-[25%] rounded-md px-8 py-6 flex flex-col gap-y-6 bg-offWhite">
          <div className="flex flex-col items-center">
            <h1 className="text-purple-600 text-2xl font-semibold">Hello</h1>
            <p className="text-sm">Sign in to your account</p>
          </div>
          <div className="flex flex-col gap-y-6">
            <LabelledInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSignupForm({ ...signinForm, username: e.target.value });
              }}
              value={signinForm.username}
              placeholder="username"
            />
            <LabelledInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSignupForm({ ...signinForm, password: e.target.value });
              }}
              value={signinForm.password}
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="primary" text="Submit" />
          </div>
          <div className="flex gap-x-2 items-center justify-center">
            <p className="text-sm">Don't have an account ?</p>
            <Link to="/signup">
              <span className="text-purple-600 cursor-pointer">Create</span>{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

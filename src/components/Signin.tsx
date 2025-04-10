import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { LabelledInput } from "./ui/LabelledInput";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { axiosApi } from "../utils/axiosConfig";

interface SigninComponentProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Signin = ({ setIsLoggedIn }: SigninComponentProps) => {
  const navigate = useNavigate();

  type signinFormType = {
    username: string;
    password: string;
  };
  const onSubmitHandler = () => {
    axiosApi
      .post<{ msg: string; token: string }>("/user/signin", {
        username: signinForm.username,
        password: signinForm.password,
      })
      .then((response) => {
        toast(response.data.msg);
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
        navigate("/content");
      })
      .catch((err) => {
        toast(err.response.body.msg);
      });
  };
  const [signinForm, setSignupForm] = useState<signinFormType>({
    username: "",
    password: "",
  });

  return (
    <div className="flex justify-center h-screen items-center bg-purple-300">
      <form
        action={onSubmitHandler}
        className="size-full flex justify-center items-center"
      >
        <div className="border-2 border-gray-200 md:w-[40%] w-[90%] rounded-lg px-8 py-6 flex flex-col gap-y-6 bg-offWhite justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-purple-600 text-3xl font-semibold">
              Welcome back,
            </h1>
            <p className="text-lg">Sign in to your account</p>
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
          <div className="flex flex-col gap-y-4">
            <Button type="submit" variant="primary" text="SignIn" grow={true} />
            <div className="flex gap-x-2 items-center justify-center">
              <p className="text-sm">Don't have an account ?</p>
              <Link to="/signup">
                <span className="text-purple-600 cursor-pointer">Create</span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { LabelledInput } from "./ui/LabelledInput";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { axiosApi } from "../utils/axiosConfig";

export const Signup = () => {
  type signupFormType = {
    username: string;
    password: string;
  };
  const onSubmitHandler = async () => {
    axiosApi
      .post<{ msg: string }>("/user/signup", {
        username: signupForm.username,
        password: signupForm.password,
      })
      .then((response) => {
        toast(response.data.msg);
      })
      .catch((err) => {
        toast(err.response.data.msg);
      });
  };
  const [signupForm, setSignupForm] = useState<signupFormType>({
    username: "",
    password: "",
  });
  return (
    <div className="h-screen bg-purple-300">
      <form
        action={onSubmitHandler}
        className="size-full flex justify-center items-center"
      >
        <div className="border-2 border-gray-200 md:w-[40%] w-[90%] rounded-lg px-8 py-6 flex flex-col gap-y-6 bg-offWhite">
          <div className="flex flex-col items-center">
            <h1 className="text-purple-600 text-3xl font-semibold">Hello</h1>
            <p className="text-lg">Create your account</p>
          </div>
          <div className="flex flex-col gap-y-6">
            <LabelledInput
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSignupForm({ ...signupForm, username: e.target.value });
              }}
              value={signupForm.username}
              placeholder="username"
            />

            <LabelledInput
              type="password"
              value={signupForm.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSignupForm({ ...signupForm, password: e.target.value });
              }}
              placeholder="password"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Button type="submit" variant="primary" text="SignUp" grow={true} />
            <div className="flex gap-x-2 items-center justify-center">
              <p className="text-sm">Already have an account ?</p>
              <Link to="/signin">
                <span className="text-purple-600 cursor-pointer">Signin</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

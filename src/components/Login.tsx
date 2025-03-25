import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const Login = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="border-2 border-gray-200 w-[25%] rounded-md px-8 py-6 flex flex-col gap-y-6 bg-offWhite">
        <div className="flex flex-col items-center">
          <h1 className="text-purple-600 text-2xl font-semibold">Hello</h1>
          <p className="text-sm">Sign in to your account</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <Input placeholder="username" />
          <Input placeholder="password" />
        </div>
        <div className="flex justify-center">
          <Button variant="primary" text="Submit" />
        </div>
        <div className="flex gap-x-2 items-center justify-center">
          <p className="text-sm">Don't have an account ?</p>
          <span className="text-purple-600">Create</span>
        </div>
      </div>
    </div>
  );
};

import Link from "next/link";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";

const UserLoginPage = () => {
  return (
    <section className="container mx-auto">
      <section className="w-5/12 mx-auto mt-12  px-5 py-5 rounded-xl border shadow">
        <h1 className="text-2xl  font-bold text-center mb-5">Login</h1>
        <hr className="divider w-full mb-5" />
        <section className="">
          <div className="mb-5">
            <label htmlFor="username">Username</label>
            <Input id="username" type="text" placeholder={"Enter username"} />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              placeholder={"Enter Password"}
            />
          </div>
          <Button className="w-full mb-5">Login</Button>
          <div>
            <p className="text-center mb-5">
              Don't have an account ?{" "}
              <Link className="underline" href="/users/register">
                Register
              </Link>
            </p>
            <p className="text-center">
              Forgot password ?{" "}
              <Link className="underline" href="/users/reset-password">
                Reset password
              </Link>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default UserLoginPage;

import Link from "next/link";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";

const ResetPasswordPage = () => {
  return (
    <section className="container mx-auto">
      <section className="w-5/12 mx-auto mt-12  px-5 py-5 rounded-xl border shadow">
        <h1 className="text-2xl  font-bold text-center mb-5">Reset Password</h1>
        <hr className="divider w-full mb-5" />
        <section className="">
          <div className="mb-5">
            <p className="text-center">
              Enter an your email here. You will get an email to reset password.
            </p>
          </div>
          <div className="mb-5">
            <Input id="email" type="email" placeholder={"Enter Email"} />
          </div>

          <Button className="w-full mb-5">Reset Password</Button>
          <div>
            <p className="text-center mb-5">
              Back to{" "}
              <Link className="underline" href="/users/login">
                Login
              </Link>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ResetPasswordPage;

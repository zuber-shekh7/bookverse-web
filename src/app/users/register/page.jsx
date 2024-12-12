import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import Link from "next/link";

const UserRegisterPage = () => {
  return (
    <section className="container mx-auto">
      <section className="w-5/12 mx-auto mt-12  px-5 py-5 rounded-xl border shadow">
        <h1 className="text-2xl  font-bold text-center mb-5">Register</h1>
        <hr className="divider w-full mb-5" />
        <section className="">
          <div className="mb-5 grid grid-cols-12 gap-x-5">
            <div className="col-span-6">
              <label htmlFor="firstName">First Name</label>
              <Input
                id="firstName"
                type="text"
                placeholder={"Enter first name"}
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="lastName">Last Name</label>
              <Input
                id="lastName"
                type="email"
                placeholder={"Enter last name"}
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="username">Email</label>
            <Input id="username" type="email" placeholder={"Enter email"} />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              placeholder={"Enter password"}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={"Confirm password"}
            />
          </div>
          <div className="mb-5">
            <input type="checkbox" id="terms" />
            <label className="ml-2" htmlFor="terms">
              I accept the{" "}
              <Link
                className="underline"
                href="/help/terms-and-conditions"
                target="_new"
              >
                Terms and Conditions
              </Link>{" "}
              of use.
            </label>
          </div>
          <div className="mb-5">
            <input type="checkbox" id="policy" />
            <label className="ml-2" htmlFor="policy">
              I accept the{" "}
              <Link
                className="underline"
                href="/help/privacy-policy"
                target="_new"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <Button className="w-full mb-5">Register</Button>
          <div>
            <p className="text-center">
              Already have an account ?{" "}
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

export default UserRegisterPage;

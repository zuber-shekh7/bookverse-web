import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";

const AdminLoginPage = () => {
  return (
    <main className="container mx-auto">
      <section className="w-5/12 mx-auto mt-5 bg-gray-100 px-5 py-5 rounded-xl border shadow">
        <h1 className="text-2xl text-gray-600 font-bold text-center mb-5">
          Admin Login
        </h1>
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
          <Button className="w-full">Login</Button>
        </section>
      </section>
    </main>
  );
};

export default AdminLoginPage;

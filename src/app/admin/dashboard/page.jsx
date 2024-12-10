import Button from "../../../components/UI/Button";

const AdminDashboard = () => {
  const today = new Date().toLocaleString();
  const books = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/71WJyakwgbS._SL1500_.jpg",
    },
  ];
  return (
    <section className="grid grid-cols-12">
      <section className="col-span-1"></section>
      <section className="col-span-11 bg-gray-50 min-h-screen m-5 rounded-xl p-5">
        {/* GREETINGS */}
        <section>
          <h2 className="text-4xl font-bold">Hello, Admin!</h2>
          <p className="mt-2 font-medium">{today}</p>
        </section>
        {/* PILLS */}
        <section className="grid grid-cols-12 mt-5 gap-x-5">
          <section className="col-span-3">
            <section className="bg-white h-24 p-5 rounded-xl flex justify-center items-center">
              <section>
                <h2 className="font-bold text-3xl">100</h2>
                <p>Books</p>
              </section>
            </section>
          </section>
          <section className="col-span-3">
            <section className="bg-white h-24 p-5 rounded-xl flex justify-center items-center">
              <section>
                <h2 className="font-bold text-3xl">100</h2>
                <p>Authors</p>
              </section>
            </section>
          </section>
          <section className="col-span-3">
            <section className="bg-white h-24 p-5 rounded-xl flex justify-center items-center">
              <section>
                <h2 className="font-bold text-3xl">200</h2>
                <p>Genres</p>
              </section>
            </section>
          </section>
          <section className="col-span-3">
            <section className="bg-white h-24 p-5 rounded-xl flex justify-center items-center">
              <section>
                <h2 className="font-bold text-3xl">700</h2>
                <p>Users</p>
              </section>
            </section>
          </section>
        </section>
        {/* TABLES */}
        <section className="grid grid-cols-12 mt-5 gap-x-5">
          <section className="col-span-6">
            <section className="bg-white p-5">
              <section className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Books</h2>
                <Button className={"text-sm px-2 py-1"}>Add</Button>
              </section>
              <section className="mt-5">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Created At</th>
                      <th>Created By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Example Title 1</td>
                      <td>2024-06-01</td>
                      <td>John Doe</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Example Title 2</td>
                      <td>2024-06-02</td>
                      <td>Jane Smith</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="mt-5">
                <Button className={"w-full text-sm px-2 py-1"}>See all</Button>
              </section>
            </section>
          </section>
          <section className="col-span-6">
            <section className="bg-white p-5">
              <section className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Authors</h2>
                <Button className={"text-sm px-2 py-1"}>Add</Button>
              </section>
              <section className="mt-5">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th>ID</th>
                      <th>Title</th>
                      <th>Created At</th>
                      <th>Created By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Example Title 1</td>
                      <td>2024-06-01</td>
                      <td>John Doe</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Example Title 2</td>
                      <td>2024-06-02</td>
                      <td>Jane Smith</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Example Title 3</td>
                      <td>2024-06-03</td>
                      <td>Robert Johnson</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="mt-5">
                <Button className={"w-full text-sm px-2 py-1"}>See all</Button>
              </section>
            </section>
          </section>
        </section>
        {/* GALLERY */}
        <section className="mt-5 flex gap-x-5 overflow-y-scroll">
          {books.map((book) => {
            return (
              <section key={book.id} className="h-36">
                <img
                  className="object-cover"
                  src={book.image}
                  alt={"Book Photo"}
                />
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default AdminDashboard;

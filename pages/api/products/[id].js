import fs from "fs";
import path from "path";

// global data
const getData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "fakeDb.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

// main function
export default function handler(req, res) {
  const jsonData = getData(); // get json data from  file
  if (req.method === "GET") {
    const { id } = req.query; // destructure by id
    const pizzaObj = jsonData.pizza; // extract pizza object from json data
    const pizza = pizzaObj.find(
      (singlePizza) => singlePizza.id === parseInt(id)
    );
    // check condition for data available or not
    if (!pizza) {
      return res.status(404).json({ message: "pizza not found" });
    } else {
      return res.status(200).json(pizza);
    }
  }
}

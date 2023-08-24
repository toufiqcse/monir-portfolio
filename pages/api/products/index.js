import fs from "fs";
import path from "path";
// export default function handler(req, res) {
//   res.status(200).json(pizzaData);
// }

const getData = () => {
  const filePath = path.join(process.cwd(), "fakeDb", "fakeDb.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

// main function
function handler(req, res) {
  if (req.method === "GET") {
    const data = getData();
    return res.status(200).json(data); //{ fruits: data } by destructure
  } else if (req.method === "POST") {
    const { offerPrice, ratings } = req.body;
    const newProducts = {
      offerPrice,
      ratings,
      id: Date.now(),
    };
    const data = getData();
    data.push(newProducts);

    return res.status(201).json({ message: "Added", products: newProducts });
  }
}

export default handler;

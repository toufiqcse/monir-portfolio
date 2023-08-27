import { portfolioData } from "@/fakeDb/data";

export default function handler(req, res) {
  const { slug } = req.query;
  console.log(slug);
  if (req.method == "GET") {
    const products = portfolioData.find((product) => product.slug == slug);
    if (!products) {
      return res.status(404).json({ message: "Product not Found" });
    }
    return res.status(200).json(products);
  }

  // else if (req.method == "DELETE") {
  //   const deletedUser = users.find((user) => user.id == parseInt(userId));
  //   const indexNo = users.findIndex((user) => user.id == parseInt(userId));
  //   users.splice(indexNo, 1);
  //   res.status(200).json(deletedUser);
  // }
}

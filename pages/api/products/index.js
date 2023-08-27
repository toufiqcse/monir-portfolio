import { portfolioData } from "@/fakeDb/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(portfolioData);
  }
  // else if (req.method === "POST") {
  //   const user = req.body.user;
  //   const newUser = {
  //     id: Date.now(),
  //     name: user,
  //   };

  //   users.push(newUser);
  //   res.status(201).json(newUser);
  // }
}

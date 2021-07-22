export default function handler(req, res) {
  console.log(req.query);
  res.status(200).json({ text: "Hello", aaaaaaa: req.query });
}

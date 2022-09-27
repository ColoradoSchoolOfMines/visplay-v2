// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let count = 0;

export default function handler(req, res) {
  count++;
  res.status(200).json({count})
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('adfas;fasdf;ja');
  const response = await fetch(`http://${process.env.NEXT_PUBLIC_APIHOST}/`);
  const data = await response.json();
  // console.log(data);
  res.status(200).json(data);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await axios
    .get(`http://${process.env.NEXT_PUBLIC_APIHOST}/`)
    // thenで成功した場合の処理をかける
    .then((response) => {
      // console.log('status:', response.status); // 200
      // console.log('body:', response.data);     // response body.
      res.status(200).json(response.data);

      // catchでエラー時の挙動を定義する
    })
    .catch((err) => {
      console.log('err:', err);
      res.status(200).json(err);
    });
}

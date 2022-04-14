import httpMocks from 'node-mocks-http';
import handler from '../hello';
import type { NextApiRequest, NextApiResponse } from 'next';

describe('/api/hello', () => {
  test('check hello.ts code', async () => {
    const mockReq = httpMocks.createRequest<NextApiRequest>({
      query: {
        animal: 'cat',
      },
    });
    const mockRes = httpMocks.createResponse<NextApiResponse>();

    // console.log(typeof(mockReq))
    handler(mockReq, mockRes);
    expect(mockRes.statusCode).toEqual(200);
  });

  test('check hello.ts res', async () => {
    const mockReq = httpMocks.createRequest<NextApiRequest>({
      query: {
        animal: 'cat',
      },
    });
    const mockRes = httpMocks.createResponse<NextApiResponse>();

    // console.log(typeof(mockReq))
    handler(mockReq, mockRes);
    expect(mockRes._getData()).toEqual(
      JSON.stringify({ message: 'hello nextjs!!' })
    );
  });
});

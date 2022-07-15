import { NextRequest } from 'next/server';

export default function handleRequest(req: NextRequest) {
  return new Response('Hello World');
}

export const config = {
  runtime: 'experimental-edge',
};

import { APIGatewayProxyHandler } from "aws-lambda";

const sum = (a: number, b: number) => {
  return a + b;
};

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "ijeiejciecj",
      udued: undefined,
      sum: sum(1, 2),
    }),
  };
};

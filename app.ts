

import { APIGatewayProxyResultV2, APIGatewayProxyEventV2 } from "aws-lambda";

export async function handler(event:APIGatewayProxyEventV2) : Promise<APIGatewayProxyResultV2> {

    return  {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, LYNN.`
        }),
      };

}


export async function hello(event:APIGatewayProxyEventV2) : Promise<APIGatewayProxyResultV2>{
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, hello`,
        }),
      };
      return response
}





// https://www.serverless.com/framework/docs/providers/aws/guide/credentials



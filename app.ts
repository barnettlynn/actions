
export function handler(event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, the current time is ${new Date().toTimeString()}.`,
        }),
      };
      return response
}


console.log("Hello world")



// https://www.serverless.com/framework/docs/providers/aws/guide/credentials




export function handler(event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, LYNN.`,
        }),
      };
      return response
}


// export function hello(event, context, callback) {
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify({
//           message: `Hello, hello`,
//         }),
//       };
//       return response
// }





// https://www.serverless.com/framework/docs/providers/aws/guide/credentials
// export AWS_ACCESS_KEY_ID=AKIAUACF2XUCAPTFZ2ZS
// export AWS_SECRET_ACCESS_KEY=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


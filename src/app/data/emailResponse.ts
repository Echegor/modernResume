//TODO finish this

export class EmailResponse {
  response: Response;
  body: Body;
}

export class Response {
    "req": {
      "method": "POST",
      "url": "https://api.mailjet.com\\v3\\send",
      "data": {
        "FromEmail": "my@email.com",
        "FromName": "My Name",
        "Subject": "Test with the NodeJS Mailjet wrapper",
        "Text-part": "Hello NodeJs !",
        "Recipients": [
          {
            "Email": "luis.echegorri@gmail.com"
          }
          ]
      },
      "headers": {
        "user-agent": "mailjet-api-v3-nodejs/3.3.1",
        "content-type": "application/json",
        "authorization": "Basic NDA1MGI1YjUxY2IxNDNkOTYyNmZkMzQ3MDk2ZmIxZGQ6ZGY4MGRmMmE2MWFlZTc4NDkyM2YxOWViOTc3NzUwNzE="
      }
    };
    header: Header;
    status: number;
    text: string;

}
export class Header {
  date: Date;
  // content-type: string;
  // content-length: number;
  // connection: string;

}

export class Body {
  Sent : Array<Recipient>;
}

export class Recipient{
  Email: string;
  MessageID: number
}

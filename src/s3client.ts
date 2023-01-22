import { GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import config from "./config";

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: "https://fra1.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: config.spacesKey,
    secretAccessKey: config.spacesSecret,
  },
});

export const bucketParams = {
  Bucket: "slike",
  Key: "Anthony1.jpg",
  ContentType: "image",
};

// Returns a list of objects in your specified path.
export const run = async () => {
  try {
    // const data = await s3Client.send(
    //   new ListObjectsCommand({ Bucket: "slike" })
    // );

    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand(bucketParams),
      { expiresIn: 15 * 60 }
    ); // Adjustable expiration.
    console.log("URL:", url);
    // console.log("Success", data.Contents[0]);
    // return data;
  } catch (err) {
    console.log("Error", err);
  }
};

run();

export { s3Client };

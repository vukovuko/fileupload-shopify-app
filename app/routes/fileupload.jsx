import { json } from "@remix-run/node";
import { cors } from "remix-utils/cors";

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return cors(request, json({ error: "No file uploaded" }, { status: 400 }), {
        origin: "*",  // Allow all origins
        methods: ["POST"],  // Allow only POST method
      });
    }

    // Log the file details to the server console
    console.log("File received:");
    console.log("Name:", file.name);
    console.log("Type:", file.type);
    console.log("Size:", file.size);

    return cors(request, json({ success: true, message: "File uploaded successfully!" }), {
      origin: "*",  // Allow all origins
      methods: ["POST"],  // Allow only POST method
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return cors(request, json({ error: "File upload failed" }, { status: 500 }), {
      origin: "*",  // Allow all origins
      methods: ["POST"],  // Allow only POST method
    });
  }
};

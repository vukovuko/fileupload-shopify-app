import { json } from "@remix-run/node";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return json({ error: "No file uploaded" }, { status: 400 });
    }

    // Log the file details to the server console
    console.log("File received:");
    console.log("Name:", file.name);
    console.log("Type:", file.type);
    console.log("Size:", file.size);

    return json({ success: true, message: "File uploaded successfully!" });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return json({ error: "File upload failed" }, { status: 500 });
  }
};

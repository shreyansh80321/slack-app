import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import {User} from "./models/user.js"
export const inngest = new Inngest({ id: "slack-app" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    
    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""}${last_name || ""}`,
      image:image_url,
    }
    await User.create(newUser)
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: delete -user - form - db },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

  }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];

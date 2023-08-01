import axios from "axios";
import "dotenv/config";
import new_update from "./new_update.json" assert { type: "json" };

interface UpdateItemType {
  title: string;
  content: string;
  time: string;
  actualDate: string;
  photo: string;
  link: string;
}

const updateItems: UpdateItemType[] = new_update;

interface DiscordWebhookPayload {
  content: string;
  username: string;
  avatar_url: string;
  embeds: Embed[];
}

interface Embed {
  title: string;
  color: number;
  description: string;
  fields: Field[];
  thumbnail: Image;
  image: Image;
}

interface Image {
  url: string;
}

interface Field {
  name: string;
  value: string;
  inline: boolean;
}

async function sendDiscordWebhook(url: string, message: string): Promise<void> {
  const payload: DiscordWebhookPayload = {
    content: message,
    username: "Maplestory Update Manager",
    avatar_url: process.env["IMAGE"] || "",
    embeds: [
      {
        title: updateItems[0]?.title || "Discord Bot Error",
        color: 16729344,
        description: updateItems[0]?.content || "",
        fields: [
          {
            name: "Link",
            value: `[Click Here](${updateItems[0]?.link || ""})`,
            inline: false,
          },
          {
            name: "Time",
            value: updateItems[0]?.time + ` (${updateItems[0]?.actualDate})`,
            inline: false,
          },
        ],
        thumbnail: {
          url: updateItems[0]?.photo || "",
        },
        image: {
          url: updateItems[0]?.photo || "",
        },
      },
    ],
  };

  try {
    await axios.post(url, payload);
    console.log("Notification sent successfully.");
  } catch (error) {
    console.error(`Failed to send notification`);
  }
}

const webhookUrl = process.env["WEBHOOK"];

if (webhookUrl && updateItems.length !== 0)
  sendDiscordWebhook(webhookUrl, process.env["MENTION"] || "");

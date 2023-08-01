import axios from "axios";
import "dotenv/config";

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
    avatar_url:
      "https://firebasestorage.googleapis.com/v0/b/maker-efebf.appspot.com/o/maplestory%2Fgm.jpg?alt=media&token=401d8e2e-080d-4bfc-93d2-1eda42605e48",
    embeds: [
      {
        title: "GitHub Push Notification",
        color: 16729344,
        description: "New push event occurred!",
        fields: [
          {
            name: "Repository",
            value: "Your Repository Name",
            inline: true,
          },
          {
            name: "Branch",
            value: "Branch Name",
            inline: true,
          },
        ],
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

if (webhookUrl) sendDiscordWebhook(webhookUrl, "Custom notification message!");

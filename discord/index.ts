import axios from "axios";

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
    username: "Maple Event Manager",
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

const webhookUrl =
  "https://discord.com/api/webhooks/1135974406376661003/_c5iAgv8XDnRc49s_5trmSaowYuye0wrAIXKQuZovZk1OQT_Y9iFrJJM0W7WwHeX0kIp";

sendDiscordWebhook(webhookUrl, "Custom notification message!");

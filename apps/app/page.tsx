import { Chat } from "./components/chat";
import { cookies } from "next/headers";
import { ragChat } from "./lib/reg-chat";

export default async function Home() {
  const sessionId = (await cookies()).get("sessionId")?.value;
  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });
  return <Chat sessionId={sessionId!} initialMessages={initialMessages} />;
}

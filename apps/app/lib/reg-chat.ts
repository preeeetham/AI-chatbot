import { RAGChat, upstash } from "@upstash/rag-chat";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const ragChat = new RAGChat({
    model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
    redis: redis
})
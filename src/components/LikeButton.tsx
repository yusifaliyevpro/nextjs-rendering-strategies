// LikeButton.tsx (Client Component)
"use client"; // Don't forget to add
import { useState } from "react";

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  return <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>;
}

"use client";

import { Button } from "#components/ui/button.tsx";
import { useState } from "react";
import { seedDatabase } from "./actions";

const Page = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[calc(100vh-56px)]">
      <Button
        onClick={async () => {
          await seedDatabase();

          setMessage("Database seeded! 🌱");
        }}
      >
        Seed the database!
      </Button>
      <p>{message}</p>
    </div>
  );
};

export default Page;

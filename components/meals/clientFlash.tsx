"use client";

import { useState, useEffect } from "react";

export default function ClientFlash() {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    const msg = sessionStorage.getItem("success");
    if (msg) {
      setMessage(msg);
      sessionStorage.removeItem("success");
    }
  }, []);
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  if (!message) return null;
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded shadow z-20">
      {message}
    </div>
  );
}

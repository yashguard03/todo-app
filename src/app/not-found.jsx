"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/todo");
  }, [router]);
  return null;
};

export default NotFound;

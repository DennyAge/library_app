import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookForm from "@/components/admin/forms/BookForm";

const Page = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <Link href="/admin/books" className="text-white">
          Go Back
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};
export default Page;
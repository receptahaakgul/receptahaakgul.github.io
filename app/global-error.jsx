"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import ErrorPage from "next/error";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Hata Sentry'ye gönderiliyor
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <ErrorPage statusCode={500} />
      {/* İsterseniz daha fazla bilgi eklemek için şu şekilde özelleştirebilirsiniz: */}
      {/* <h1>Something went wrong!</h1> */}
    </div>
  );
}

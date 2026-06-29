"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import BtsIcon from "@/shared/components/icons/bts";

export default function RootPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const browserLang = navigator.language.startsWith("en") ? "en" : "es";

    const timer = setTimeout(() => {
      setLoading(false);
      router.replace(`/${browserLang}`);
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <html lang={"es"} className={` h-full antialiased`}>
      <body className="min-h-full flex bg-background flex-col">
        <div className="bg-background h-full w-full min-h-dvh flex flex-col justify-center items-center">
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute inset-0 blur-3xl opacity-60 rounded-full transition-all duration-1000
            ${
              loading
                ? "animate-color-shift scale-150"
                : "bg-bts-purple scale-150 animate-final-pulse"
            }
          `}
            />

            <BtsIcon className="h-52 lg:h-72 text-bts-purple" />
          </div>

          <div className="mt-8 text-center">
            {loading ? (
              <div className="flex h-9 items-center space-x-3">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-bts-purple dark:bg-white rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <h2 className="text-bts-purple dark:text-white font-bold text-3xl animate-pulse tracking-widest">
                BORAHAE 💜
              </h2>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

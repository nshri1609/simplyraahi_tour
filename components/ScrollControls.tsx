"use client";

import { useCallback } from "react";

export default function ScrollControls() {
  const handleScrollToTop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleScrollToBottom = useCallback(() => {
    if (typeof window === "undefined") return;
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    window.scrollTo({ top: pageHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-28 z-50 flex flex-col gap-3">
      <button
        aria-label="Scroll to top"
        onClick={handleScrollToTop}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 active:scale-95 transition transform flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M12 5.5a1 1 0 0 1 .707.293l6 6a1 1 0 1 1-1.414 1.414L12 7.914l-5.293 5.293A1 1 0 0 1 5.293 11.793l6-6A1 1 0 0 1 12 5.5z" />
        </svg>
      </button>

      <button
        aria-label="Scroll to bottom"
        onClick={handleScrollToBottom}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 active:scale-95 transition transform flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M12 18.5a1 1 0 0 1-.707-.293l-6-6A1 1 0 0 1 6.707 10.793L12 16.086l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6A1 1 0 0 1 12 18.5z" />
        </svg>
      </button>
    </div>
  );
}

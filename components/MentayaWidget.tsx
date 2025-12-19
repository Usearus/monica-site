"use client";

import { useEffect, useRef } from "react";

export default function MentayaWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      if (iframe.clientWidth >= 850) {
        iframe.style.height = "450px";
      } else {
        iframe.style.height = "650px";
      }
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="mt-10">
      <iframe
        ref={iframeRef}
        width="100%"
        height="450"
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "20px",
          maxWidth: "850px",
          margin: "auto",
          display: "block",
        }}
        src="https://app.mentaya.com/public/practices/okUvwB0mc0DF9zQKhuDu/eligibility/widget"
        title="Check Mentaya eligibility"
      />
    </div>
  );
}

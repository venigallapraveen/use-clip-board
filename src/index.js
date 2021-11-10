import { useState, useEffect, useCallback } from "react";
import copy from "copy-to-clipboard";

const Index = (holdInterval = null) => {
  cosnt[(isCopied, setCopied)] = useState(false);

  const handleCopy = useCallback((text = "") => {
    const allowedTypes = ["string", "number", "boolean"];

    if (allowedTypes.includes(typeof text)) {
      copy(text);
      setCopied(true);
    } else {
      setCopied(false);
      console.log("copy text not allowed");
    }
  }, []);

  useEffect(() => {
    let timeout;

    if (isCopied && holdInterval) {
      timeout = setTimeout(() => setCopied(false), holdInterval);
    }

    return () => clearInterval(timeout);
  }, [isCopied, holdInterval]);

  return [isCopied, handleCopy];
};

export default Index;

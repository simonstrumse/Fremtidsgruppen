import { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({
  chart,
  className = "",
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadMermaid = async () => {
      try {
        const mermaid = await import("mermaid");
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "loose",
          fontFamily: "inherit",
          flowchart: {
            curve: "basis",
            htmlLabels: true,
          },
        });

        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
          const div = document.createElement("div");
          div.id = id;
          div.className = "mermaid";
          div.textContent = chart;
          containerRef.current.appendChild(div);

          // Delay rendering to ensure DOM is ready
          setTimeout(() => {
            try {
              mermaid.default.init(undefined, `#${id}`);
            } catch (err) {
              console.error("Error during mermaid init:", err);
            }
          }, 100);
        }
      } catch (error) {
        console.error("Error initializing mermaid:", error);
      }
    };

    loadMermaid();
  }, [chart, isClient]);

  const handleZoomIn = () => {
    if (!containerRef.current) return;
    const svg = containerRef.current.querySelector("svg");
    if (svg) {
      const currentWidth = parseFloat(svg.getAttribute("width") || "800");
      svg.setAttribute("width", `${currentWidth * 1.2}`);
      svg.setAttribute(
        "height",
        `${parseFloat(svg.getAttribute("height") || "600") * 1.2}`,
      );
    }
  };

  const handleZoomOut = () => {
    if (!containerRef.current) return;
    const svg = containerRef.current.querySelector("svg");
    if (svg) {
      const currentWidth = parseFloat(svg.getAttribute("width") || "800");
      svg.setAttribute("width", `${currentWidth * 0.8}`);
      svg.setAttribute(
        "height",
        `${parseFloat(svg.getAttribute("height") || "600") * 0.8}`,
      );
    }
  };

  return (
    <div className={`${className} relative`}>
      <div ref={containerRef} className="min-h-[400px] w-full">
        {!isClient && (
          <div className="flex items-center justify-center h-[400px]">
            Loading diagram...
          </div>
        )}
      </div>
      {isClient && (
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            title="Zoom In"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            title="Zoom Out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

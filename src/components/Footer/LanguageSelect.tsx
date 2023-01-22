import { useEffect, useRef } from "react";

interface Props {
  show: boolean;
  languageList: any;
}

export default function LanguageSelect({ show, languageList }: Props) {
  const languageSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      languageSelectRef.current?.classList.remove("hidden");
    }
    if (!show) {
      languageSelectRef.current?.classList.add("hidden");
    }
  }, [show]);
  return (
    <div className="language-list hidden" ref={languageSelectRef}>
      {languageList.map((item: any, index: number) => {
        return (
          <div key={index} className="language-list-item">
            {item}
          </div>
        );
      })}
    </div>
  );
}

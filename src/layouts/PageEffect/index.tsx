"use client";

import usePageEffectContext from "@Contexts/PageEffectContext";
import usePageEffect from "@Layouts/PageEffect/usePageEffect";
import cn from "classnames";
import React, { useRef } from "react";

import SvgInsert from "@/components/SvgInsert";

import s from "./style.module.scss";

export default function PageEffect(): React.ReactElement {
  const refContent = useRef(null);
  const refContentBg = useRef(null);
  const { isWinLoad, pageName } = usePageEffectContext();
  usePageEffect({ refContent, refContentBg });

  return (
    <div className={cn(s.transition)} ref={refContent}>
      <div ref={refContentBg} className={s.transition_bg}>
        {!isWinLoad && (
          <div className="container">
            <div className={s.transition_inner}>
              <SvgInsert
                src="/icons/brand-name-white.svg"
                className={s.transition_logo}
              />
              [
              {pageName !== "" &&
                pageName.split("").map((char) => {
                  return (
                    <span
                      className={char === " " ? s.space : s.char}
                      key={char}
                    >
                      {char}
                    </span>
                  );
                })}
              ]
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

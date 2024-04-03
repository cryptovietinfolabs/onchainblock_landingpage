import { Text } from "@chakra-ui/react";
import usePageEffectContext from "@Contexts/PageEffectContext";
import useAppRouter from "@Hooks/common/useAppRouter";
import cn from "classnames";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

import useLoadManageStore from "@/stores/useLoadManageStore";

import s from "./style.module.scss";

export default function PreLoader(): React.ReactElement {
  const refContent = useRef<HTMLDivElement>(null);
  const { pageEnter, pageAfter } = usePageEffectContext();
  const { percent, loaded } = useLoadManageStore();
  const { isHome } = useAppRouter();
  const refPersent = useRef<HTMLSpanElement | null>(null);
  const refWrapPo = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    localStorage.setItem("loadingStatus", "false");
  }, []);

  useEffect(() => {
    const gc = gsap.context(() => {
      if (percent === 100 && loaded)
        gsap.to(refContent.current, {
          opacity: 0,
          ease: "power3.inOut",
          duration: 2,
          onComplete: () => {
            pageEnter();
            pageAfter();
            refContent.current?.classList.add(s.isHide);
            localStorage.setItem("loadingStatus", "true");
          },
        });
      if (refContent.current)
        gsap.to(refContent.current, {
          ease: "power3.inOut",
          duration: 2,
          width: `${percent}%`,
          onUpdate: () => {
            // console.log(percent)
            if (refWrapPo.current) {
              const ps = Math.floor(percent);
              refWrapPo.current.style.transition = "all 0.3s ease-out";
              refWrapPo.current.style.width = `${percent}%`;
              if (refPersent.current)
                refPersent.current.textContent = `${ps < 10 ? "0" : ""}${ps}%`;
            }
          },
        });
    }, [refContent]);

    return () => gc.revert();
  }, [pageEnter, loaded, isHome, percent]);
  return (
    <div className={s.pageLoader} ref={refContent}>
      <div className={s.homeLoader}>
        <Text
          color="greyBlue"
          className={s.fade}
          fontSize={36}
          fontWeight={600}
        >
          OnchainBlock
        </Text>
        <div className={cn(s.homeLoader_progress)}>
          <Text color="greyBlue" className={s.fade} fontSize={24} mb={6}>
            Loading
          </Text>
          {/* <span
            className={cn(
              s.homeLoader_progress_percent,
              "lg:col-start-9 col-span-4 sm:col-span-5 lg:col-span-4",
            )}
          >
            <span ref={refPersent}>00%</span>
          </span> */}
          <div
            ref={refWrapPo}
            className={cn(
              s.homeLoader_progress_wrapper,
              "col-span-4 sm:col-span-8 lg:col-span-12",
            )}
          >
            <div className={cn(s.homeLoader_progress_inner)} />
          </div>
        </div>
      </div>
    </div>
  );
}

import usePageEffectContext from "@Contexts/PageEffectContext";
import { bodyReady } from "@Utils/uiHelper";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

interface ISusePageEffect {
  refContent: MutableRefObject<HTMLDivElement | null>;
  refContentBg: MutableRefObject<HTMLDivElement | null>;
}

export default function usePageEffect({
  refContent,
  refContentBg,
}: ISusePageEffect): void {
  const {
    pageTransition,
    pageInit,
    pageEnter,
    pageAfter,
    isWinLoad,
    pageTransitionOut,
  } = usePageEffectContext();
  const pathName = usePathname();
  const refTimeOut = useRef<NodeJS.Timeout | null>(null);

  const isNextHome = useMemo(() => {
    return pathName === "/";
  }, [pathName]);

  const pagePreloadInit = useCallback(() => {
    if (!refContent.current) return;
    refContent.current.style.pointerEvents = "auto";
    refContent.current.style.visibility = "visible";

    gsap.set([refContent.current], {
      "--clipPathG": "inset(0% 0% 0% 0%)",
    });
    gsap.set([refContentBg.current], {
      "--clipPathB": "inset(0% 0% 0% 0%)",
    });
    bodyReady();
    refTimeOut.current = setTimeout(pageTransitionOut, 1000);
    return () => {
      refTimeOut.current && clearTimeout(refTimeOut.current);
    };
  }, []);

  const pageIn = useCallback(() => {
    if (!refContent.current) return;
    refContent.current.style.pointerEvents = "auto";
    refContent.current.style.visibility = "visible";

    const span = refContent.current?.querySelectorAll("span");
    const tl = gsap.timeline({
      onComplete: pageInit,
    });

    tl.fromTo(
      [refContent.current],
      { "--clipPathG": "inset(100% 0% 0% 0%)" },
      {
        "--clipPathG": "inset(0% 0% 0% 0%)",
        ease: "power3.inOut",
        duration: 0.8,
      },
    );
    tl.fromTo(
      [refContentBg.current],
      { "--clipPathB": "inset(100% 0% 0% 0%)" },
      {
        "--clipPathB": "inset(0% 0% 0% 0%)",
        ease: "power3.inOut",
        duration: 0.8,
      },
      "-=.7",
    );
    tl.fromTo(
      span,
      { y: "100%" },
      {
        y: "0%",
        ease: "power3.out",
        stagger: 0.015,
        duration: 0.6,
      },
      "-=.6",
    );
  }, [pageInit]);

  const pageOut = useCallback(() => {
    if (!refContent.current) return;
    !isNextHome && pageEnter();
    const tl = gsap.timeline({
      onComplete: () => {
        if (!refContent.current) return;
        refContent.current.style.pointerEvents = "none";
        refContent.current.style.visibility = "hidden";
        !isNextHome && pageAfter();
      },
    });

    tl.to([refContentBg.current], {
      "--clipPathB": "inset(0% 0% 100% 0%)",
      ease: "power3.inOut",
      duration: 0.8,
    });
    tl.to(
      [refContent.current],
      {
        "--clipPathG": "inset(0% 0% 100% 0%)",
        ease: "power3.inOut",
        duration: 0.8,
      },
      "-=.7",
    );
  }, [pageEnter, pageAfter, isNextHome]);

  useEffect(() => {
    if (pageTransition === "IN") {
      pageIn();
    } else if (pageTransition === "OUT") {
      pageOut();
    }
  }, [pageTransition]);

  useEffect(() => {
    isWinLoad && pagePreloadInit();
  }, [isWinLoad]);
}

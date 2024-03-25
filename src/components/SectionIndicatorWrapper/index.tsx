"use client";

import useUiContext from "@Contexts/UiProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface Props extends PropsWithChildren {
  section: "/" | "introduction" | "about" | "partners" | "contact";
  sectionBefore?: "/" | "introduction" | "about" | "partners" | "contact";
  children?: ReactNode;
}

const SectionIndicatorWrapper = ({
  section,
  sectionBefore,
  children,
}: Props): ReactElement => {
  const { setActiveSection } = useUiContext();
  const refTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gc = gsap.context(() => {
      ScrollTrigger.create({
        trigger: refTrigger.current,
        start: "top center",
        end: "bottom top",
        // markers: true,
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(section);
          }
        },
        onLeaveBack: () => {
          if (sectionBefore) {
            setActiveSection(sectionBefore);
          }
        },
      });
    }, [refTrigger]);
    return () => gc.revert();
  }, [section, sectionBefore, setActiveSection]);

  return <div ref={refTrigger}>{children}</div>;
};

export default SectionIndicatorWrapper;

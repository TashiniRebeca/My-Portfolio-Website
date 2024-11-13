"use client";

import { useActiveSec } from "@/context/active-sec-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/context/active-sec-context";

export function useSectionView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
      });
      const { setActiveSec, timeofLastClick } = useActiveSec();
    
      useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000) {
          setActiveSec(sectionName);
        }
      }, [inView, setActiveSec, timeofLastClick, sectionName]);

      return {ref};
}
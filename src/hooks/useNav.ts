import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const panels = ['home', 'projects', 'resume', 'contact'] as const;
type Panel = typeof panels[number];

const useNav = () => {
  const router = useRouter();
  const [panelIdx, setPanelIdx] = useState(
    panels.indexOf(router.asPath?.replace('/#', '') as Panel) >= 0
      ? panels.indexOf(router.asPath?.replace('/#', '') as Panel)
      : 0
  );

  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const throttledOnWheel = debounce(
      (event: WheelEvent) => {
        event.preventDefault();

        const delta = Math.sign(event.deltaY);

        setPanelIdx((currIdx) => {
          const newIdx = currIdx + delta;

          if (newIdx < panels.length && newIdx >= 0) {
            return newIdx;
          }

          return currIdx;
        });
      },
      1000,
      { leading: true }
    );

    document.addEventListener('wheel', throttledOnWheel, { passive: false });

    return () => {
      return document.removeEventListener('wheel', throttledOnWheel);
    };
  }, []);

  useEffect(() => {
    const onTouchStart = (event: TouchEvent) => {
      setTouchStart(event.changedTouches[0]?.screenY);
    };

    const onTouchEnd = (event: TouchEvent) => {
      const touchEnd = event.changedTouches[0]?.screenY;

      const deltaY = touchEnd - touchStart;

      if (Math.abs(deltaY) > 50) {
        const delta = -Math.sign(deltaY);

        setPanelIdx((currIdx) => {
          const newIdx = currIdx + delta;

          if (newIdx < panels.length && newIdx >= 0) {
            return newIdx;
          }

          return currIdx;
        });
      }
    };

    const throttledOnTouchStart = debounce(onTouchStart, 500, {
      leading: true,
    });
    const throttledOnTouchEnd = debounce(onTouchEnd, 500, { leading: true });

    document.addEventListener('touchstart', throttledOnTouchStart);
    document.addEventListener('touchend', throttledOnTouchEnd);

    return () => {
      document.removeEventListener('touchstart', throttledOnTouchStart);
      document.removeEventListener('touchend', throttledOnTouchEnd);
    };
  }, [touchStart]);

  useEffect(() => {
    if (
      panelIdx >= 0 &&
      panelIdx < panels.length &&
      router.asPath?.replace('/#', '') !== panels[panelIdx]
    ) {
      router.replace(`#${panels[panelIdx]}`);
    }
  }, [panelIdx, router]);

  const goto = useCallback((panel: Panel) => {
    setPanelIdx(panels.indexOf(panel));
  }, []);

  return {
    goto,
  };
};

export default useNav;

import { useEffect, useRef, useState } from "react";

const DEFAULT_OBSERVER_OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

interface UseInfiniteScrollProps {
    callbackFn: () => void,
}

const useInfiniteScroll = ({ callbackFn }:UseInfiniteScrollProps) =>
{
    const targetRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {

        const bottomCurrent = targetRef.current;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting){
                    callbackFn();
                }
            });
        }, DEFAULT_OBSERVER_OPTIONS);

        if (bottomCurrent) {
            observer.observe(bottomCurrent);
        }

        return () => {
            if (bottomCurrent) {
                observer.unobserve(bottomCurrent);
            }
        };

    }, [callbackFn]);

    return { targetRef, isIntersecting };
}

export default useInfiniteScroll;
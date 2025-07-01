"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./RotatingText.css";

// Define la interfaz para las propiedades
interface RotatingTextProps {
  texts: string[];
  transition?: { type: "spring"; damping: number; stiffness: number };
  initial?: { y: string | number; opacity: number };
  animate?: { y: string | number; opacity: number };
  exit?: { y: string | number; opacity: number };
  animatePresenceMode?: "wait" | "sync";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef<unknown, RotatingTextProps>((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const splitIntoCharacters = useCallback((text: string) => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      try {
        const segmenter = new (Intl as any).Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
      } catch (error) {
        console.warn('Intl.Segmenter not available, falling back to Array.from');
        return Array.from(text);
      }
    }
    return Array.from(text);
  }, []);

  const elements = useMemo(() => {
    if (!texts || texts.length === 0) return [];
    
    const currentText = texts[currentTextIndex] || "";
    
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }
    
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    
    if (splitBy === "lines") {
      return currentText.split("\n").map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1,
      }));
    }
    
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy, splitIntoCharacters]);

  const totalCharacters = useMemo(() => {
    return elements.reduce((sum, word) => sum + word.characters.length, 0);
  }, [elements]);

  const getStaggerDelay = useCallback(
    (index: number, total: number) => {
      if (staggerDuration === 0) return 0;
      
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        return Math.random() * staggerDuration * total;
      }
      if (typeof staggerFrom === "number") {
        return Math.abs(staggerFrom - index) * staggerDuration;
      }
      return 0;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      if (newIndex !== currentTextIndex && !isAnimating) {
        setIsAnimating(true);
        setCurrentTextIndex(newIndex);
        if (onNext) onNext(newIndex);
        
        // Reset animation flag after transition
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    },
    [currentTextIndex, isAnimating, onNext]
  );

  const next = useCallback(() => {
    if (isAnimating || texts.length <= 1) return;
    
    const nextIndex = currentTextIndex === texts.length - 1
      ? (loop ? 0 : currentTextIndex)
      : currentTextIndex + 1;
      
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange, isAnimating]);

  const previous = useCallback(() => {
    if (isAnimating || texts.length <= 1) return;
    
    const prevIndex = currentTextIndex === 0
      ? (loop ? texts.length - 1 : currentTextIndex)
      : currentTextIndex - 1;
      
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange, isAnimating]);

  const jumpTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange, isAnimating]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0 && !isAnimating) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange, isAnimating]);

  useImperativeHandle(
    ref,
    () => ({
      next,
      previous,
      jumpTo,
      reset,
    }),
    [next, previous, jumpTo, reset]
  );

  useEffect(() => {
    if (!auto || texts.length <= 1 || isAnimating) return;
    
    const intervalId = setInterval(() => {
      next();
    }, rotationInterval);
    
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto, texts.length, isAnimating]);

  // Validación de datos
  if (!texts || texts.length === 0) {
    return <span className={cn("text-rotate", mainClassName ?? "")}>No text provided</span>;
  }

  return (
    <motion.span
      className={cn("text-rotate", mainClassName ?? "")}
      {...rest}
      layout
      transition={transition}
    >
      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div
          key={`text-${currentTextIndex}-${texts[currentTextIndex]}`}
          className={cn(
            splitBy === "lines" ? "text-rotate-lines" : "text-rotate"
          )}
          layout
          aria-hidden="true"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {elements.map((wordObj, wordIndex) => {
            const previousCharsCount = elements
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);
            
            return (
              <span
                key={`word-${wordIndex}-${wordObj.characters.join('')}`}
                className={cn("text-rotate-word", splitLevelClassName ?? "")}
              >
                {wordObj.characters.map((char, charIndex) => {
                  const globalCharIndex = previousCharsCount + charIndex;
                  const delay = getStaggerDelay(globalCharIndex, totalCharacters);
                  
                  return (
                    <motion.span
                      key={`char-${globalCharIndex}-${char}-${currentTextIndex}`}
                      className={cn("text-rotate-element", elementLevelClassName ?? "")}
                      variants={{
                        initial: initial,
                        animate: animate,
                        exit: exit,
                      }}
                      transition={{
                        ...transition,
                        delay: delay / 1000,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordObj.needsSpace && (
                  <span className="text-rotate-space"> </span>
                )}
              </span>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
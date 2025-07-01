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

  const splitIntoCharacters = (text: string) => {
    if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
      try {
        const segmenter = new (Intl as any).Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
      } catch (error) {
        // Fallback si Intl.Segmenter no está disponible
        return Array.from(text);
      }
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
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
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index: number, totalChars: number) => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs((staggerFrom as number) - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      if (newIndex !== currentTextIndex) {
        setCurrentTextIndex(newIndex);
        if (onNext) onNext(newIndex);
      }
    },
    [currentTextIndex, onNext]
  );

  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1;
    handleIndexChange(nextIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex =
      currentTextIndex === 0
        ? loop
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1;
    handleIndexChange(prevIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      handleIndexChange(validIndex);
    },
    [texts.length, handleIndexChange]
  );

  const reset = useCallback(() => {
    handleIndexChange(0);
  }, [handleIndexChange]);

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
    if (!auto || texts.length <= 1) return;
    
    const intervalId = setInterval(() => {
      next();
    }, rotationInterval);
    
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto, texts.length]);

  // Calcular el total de caracteres para el stagger
  const totalCharacters = useMemo(() => {
    return elements.reduce((sum, word) => sum + word.characters.length, 0);
  }, [elements]);

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
          key={`text-${currentTextIndex}`}
          className={cn(
            splitBy === "lines" ? "text-rotate-lines" : "text-rotate"
          )}
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex) => {
            const previousCharsCount = elements
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);
            
            return (
              <span
                key={`word-${wordIndex}`}
                className={cn("text-rotate-word", splitLevelClassName ?? "")}
              >
                {wordObj.characters.map((char, charIndex) => {
                  const globalCharIndex = previousCharsCount + charIndex;
                  const delay = getStaggerDelay(globalCharIndex, totalCharacters);
                  
                  return (
                    <motion.span
                      key={`char-${globalCharIndex}-${char}`}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: delay / 1000, // Convert to seconds
                      }}
                      className={cn("text-rotate-element", elementLevelClassName ?? "")}
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
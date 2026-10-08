/* ============================================
   DOMAINIK.RU — Хук для анимации при скролле
   IntersectionObserver для плавного появления
   ============================================ */
import { useEffect, useRef, useState } from 'react';

/**
 * Хук useInView — отслеживает появление элемента в viewport
 * @param threshold — процент видимости (0-1)
 * @param rootMargin — отступы от границ viewport
 * @returns [ref, isInView]
 */
export function useInView(threshold = 0.1, rootMargin = '0px 0px -50px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          /* Отключаем наблюдение после первого появления */
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView] as const;
}

/**
 * Компонент FadeIn — оборачивает контент с анимацией появления
 */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

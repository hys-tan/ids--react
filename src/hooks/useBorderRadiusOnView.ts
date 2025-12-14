import { useState, useEffect, useRef, useCallback } from 'react';
import type { RefObject } from 'react';

interface UseBorderRadiusOnScrollOptions {
    /** Border radius máximo inicial (en px). Default: 50 */
    maxRadius?: number;
    /** Border radius máximo en móvil <= 1300px (en px). Default: 30 */
    maxRadiusMobile?: number;
    /** Offset adicional para el punto de activación en desktop (px). Default: 50 */
    bottomOffset?: number;
    /** Offset adicional para el punto de activación en móvil (px). Default: 30 */
    bottomOffsetMobile?: number;
}

interface UseBorderRadiusOnScrollReturn {
    /** Ref que debe aplicarse al elemento a observar */
    ref: RefObject<HTMLDivElement | null>;
    /** Valor actual del border-radius en px */
    borderRadius: number;
    /** Si el área del ::before está en el viewport */
    isInView: boolean;
}

/**
 * Hook que anima el border-radius basado en cuando el BOTTOM del elemento
 * (donde está el ::before) entra en el viewport.
 * 
 * - Cuando el bottom del elemento está fuera del viewport → border-radius = maxRadius
 * - A medida que el bottom entra y sube en el viewport → border-radius disminuye a 0
 */
export const useBorderRadiusOnScroll = (
    options: UseBorderRadiusOnScrollOptions = {}
): UseBorderRadiusOnScrollReturn => {
    const {
        maxRadius = 50,
        maxRadiusMobile = 30,
        bottomOffset = 50,
        bottomOffsetMobile = 30,
    } = options;

    const ref = useRef<HTMLDivElement>(null);
    const [borderRadius, setBorderRadius] = useState(maxRadius);
    const [isInView, setIsInView] = useState(false);

    // Determinar el radio máximo según el tamaño de pantalla
    const getMaxRadius = useCallback(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 1300 ? maxRadiusMobile : maxRadius;
        }
        return maxRadius;
    }, [maxRadius, maxRadiusMobile]);

    // Determinar el offset según el tamaño de pantalla
    const getBottomOffset = useCallback(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 1300 ? bottomOffsetMobile : bottomOffset;
        }
        return bottomOffset;
    }, [bottomOffset, bottomOffsetMobile]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const calculateBorderRadius = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const currentMaxRadius = getMaxRadius();

            // Punto de referencia: el bottom del elemento + offset (donde está ::before)
            const targetPoint = rect.bottom + getBottomOffset();

            // El ::before está visible si su posición está dentro del viewport
            const isBeforeVisible = targetPoint > 0 && targetPoint < windowHeight + 200;
            setIsInView(isBeforeVisible);

            // Si el bottom + offset aún está por debajo del viewport (no visible)
            // → mantener border-radius máximo
            if (targetPoint >= windowHeight) {
                setBorderRadius(currentMaxRadius);
                return;
            }

            // Si el bottom + offset ya subió mucho (está en el 50% del viewport o más arriba)
            // → border-radius = 0
            const triggerEnd = windowHeight * 0.5;
            if (targetPoint <= triggerEnd) {
                setBorderRadius(0);
                return;
            }

            // Calcular el progreso entre los puntos
            // targetPoint = windowHeight → progress = 0 → radius = max
            // targetPoint = triggerEnd → progress = 1 → radius = 0
            const scrollProgress = (windowHeight - targetPoint) / (windowHeight - triggerEnd);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // border-radius disminuye conforme aumenta el progreso
            const newRadius = currentMaxRadius * (1 - clampedProgress);
            setBorderRadius(newRadius);
        };

        // Ejecutar inmediatamente
        calculateBorderRadius();

        // Agregar listeners
        window.addEventListener('scroll', calculateBorderRadius, { passive: true });
        window.addEventListener('resize', calculateBorderRadius, { passive: true });

        return () => {
            window.removeEventListener('scroll', calculateBorderRadius);
            window.removeEventListener('resize', calculateBorderRadius);
        };
    }, [getMaxRadius, getBottomOffset]);

    return { ref, borderRadius, isInView };
};

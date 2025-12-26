import { useState, useEffect, useRef, useCallback } from 'react';
import type { RefObject } from 'react';

interface UseFooterBorderRadiusOptions {
    /** Border radius máximo final (en px). Default: 50 */
    maxRadius?: number;
    /** Border radius máximo en móvil <= 1300px (en px). Default: 30 */
    maxRadiusMobile?: number;
}

interface UseFooterBorderRadiusReturn {
    /** Ref que debe aplicarse al footer */
    ref: RefObject<HTMLElement | null>;
    /** Valor actual del border-radius en px */
    borderRadius: number;
}

/**
 * Hook que anima el border-radius del footer.
 * 
 * Comportamiento INVERSO:
 * - Cuando el footer NO está visible → border-radius = 0
 * - A medida que el footer entra en el viewport → border-radius aumenta hasta maxRadius
 */
export const useFooterBorderRadius = (
    options: UseFooterBorderRadiusOptions = {}
): UseFooterBorderRadiusReturn => {
    const {
        maxRadius = 50,
        maxRadiusMobile = 20,
    } = options;

    const ref = useRef<HTMLElement>(null);
    const [borderRadius, setBorderRadius] = useState(0);

    // Determinar el radio máximo según el tamaño de pantalla
    const getMaxRadius = useCallback(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 1300 ? maxRadiusMobile : maxRadius;
        }
        return maxRadius;
    }, [maxRadius, maxRadiusMobile]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const calculateBorderRadius = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const currentMaxRadius = getMaxRadius();

            // Punto de referencia: el TOP del footer
            const footerTop = rect.top;

            // Si el footer aún no es visible (está por debajo del viewport)
            // → border-radius = 0
            if (footerTop >= windowHeight) {
                setBorderRadius(0);
                return;
            }

            // Si el footer ya subió bastante (su top está en el 30% inferior del viewport o más arriba)
            // → border-radius = maxRadius
            const triggerEnd = windowHeight * 0.7;
            if (footerTop <= triggerEnd) {
                setBorderRadius(currentMaxRadius);
                return;
            }

            // Calcular el progreso entre los puntos
            // footerTop = windowHeight → progress = 0 → radius = 0
            // footerTop = triggerEnd → progress = 1 → radius = max
            const scrollProgress = (windowHeight - footerTop) / (windowHeight - triggerEnd);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // border-radius AUMENTA conforme aumenta el progreso (inverso)
            const newRadius = currentMaxRadius * clampedProgress;
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
    }, [getMaxRadius]);

    return { ref, borderRadius };
};

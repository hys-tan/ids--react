import { useEffect, useState } from 'react';
export const useTimeBasedTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const checkTime = () => {
            const hour = new Date().getHours();
            // Modo oscuro: 18:00 - 6:59
            const shouldBeDark = hour >= 18 || hour < 7;
            setIsDarkMode(shouldBeDark);
            
            if (shouldBeDark) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
        };
        checkTime(); // Verificar al cargar
        
        // Verificar cada minuto
        const interval = setInterval(checkTime, 60000);
        
        return () => clearInterval(interval);
    }, []);
    return isDarkMode;
};

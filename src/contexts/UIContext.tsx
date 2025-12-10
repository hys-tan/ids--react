import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

// Definir el tipo de datos que manejará el context
interface UIContextType {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}

// Crear el context con valor inicial undefined
const UIContext = createContext<UIContextType | undefined>(undefined);

// Props del Provider
interface UIProviderProps {
    children: ReactNode;
}

// Provider: componente que proveerá el estado a toda la aplicación
export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup: restaurar scroll cuando el componente se desmonte
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Valor que se compartirá con todos los componentes consumidores
    const value: UIContextType = {
        isMenuOpen,
        toggleMenu,
        closeMenu,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

// Hook personalizado para consumir el context fácilmente
export const useUI = (): UIContextType => {
    const context = useContext(UIContext);

    // Verificar que el hook se use dentro del Provider
    if (context === undefined) {
        throw new Error('useUI debe ser usado dentro de un UIProvider');
    }

    return context;
};

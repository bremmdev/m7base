import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'

export const MobileMenuContext = React.createContext<{
    isOpen: boolean
    hasInteracted: boolean
    toggle: () => void
    close: () => void
}>({ isOpen: false, hasInteracted: false, toggle: () => { }, close: () => { } })

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasInteracted, setHasInteracted] = React.useState(false)
    const toggle = React.useCallback(() => {
        setHasInteracted(true)
        setIsOpen((v) => !v)
    }, [])
    const close = React.useCallback(() => setIsOpen(false), [])

    React.useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <MobileMenuContext.Provider value={{ isOpen, hasInteracted, toggle, close }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export function HamburgerButton() {
    const { isOpen, toggle } = React.useContext(MobileMenuContext)

    return (
        <button
            className="hamburger-btn"
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                    <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                ) : (
                    <>
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                )}
            </svg>
        </button>
    )
}

export default function SideBar() {
    const { isOpen, hasInteracted, close } = React.useContext(MobileMenuContext)
    const location = useLocation()

    React.useEffect(() => {
        close()
    }, [location.pathname, close])

    const sidebarClasses = [
        'sidebar',
        hasInteracted && 'sidebar--animated',
        isOpen && 'sidebar--open',
    ].filter(Boolean).join(' ')

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={close} />}
            <div className={sidebarClasses}>
                <h2>Components</h2>
                <nav>
                    <ul>
                        <li><Link to="/components/accordion">Accordion</Link></li>
                        <li><Link to="/components/badge">Badge</Link></li>
                        <li><Link to="/components/buttons">Buttons</Link></li>
                        <li><Link to="/components/card">Card</Link></li>
                        <li><Link to="/components/custom-select">Custom Select</Link></li>
                        <li><Link to="/components/forms">Forms</Link></li>
                        <li><Link to="/components/notification">Notification</Link></li>
                        <li><Link to="/components/tooltip">Tooltip</Link></li>
                        <li><Link to="/components/typography">Typography</Link></li>
                    </ul>
                </nav>
                <h2>Utilities</h2>
                <nav>
                    <ul>
                        <li><Link to="/utilities/flex">Flex</Link></li>
                        <li><Link to="/utilities/spacing-and-margin">Spacing and margin</Link></li>
                        <li><Link to="/utilities/typography">Typography</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

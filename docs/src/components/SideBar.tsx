import React from 'react'
import { Link } from '@tanstack/react-router'

export default function SideBar() {
    return (
        <div className="sidebar">
            <h2>Components</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/components/accordion">Accordion</Link>
                    </li>
                    <li>
                        <Link to="/components/badge">Badge</Link>
                    </li>
                    <li>
                        <Link to="/components/buttons">Buttons</Link>
                    </li>
                    <li>
                        <Link to="/components/card">Card</Link>
                    </li>
                    <li>
                        <Link to="/components/custom-select">Custom Select</Link>
                    </li>
                    <li>
                        <Link to="/components/forms">Forms</Link>
                    </li>
                    <li>
                        <Link to="/components/notification">Notification</Link>
                    </li>
                    <li>
                        <Link to="/components/tooltip">Tooltip</Link>
                    </li>
                    <li>
                        <Link to="/components/typography">Typography</Link>
                    </li>
                </ul>
            </nav>
            <h2>Utilities</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/utilities/flex">Flex</Link>
                    </li>
                    <li>
                        <Link to="/utilities/spacing-and-margin">Spacing and margin</Link>
                    </li>
                    <li>
                        <Link to="/utilities/typography">Typography</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

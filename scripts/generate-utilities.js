#!/usr/bin/env node

/**
 * Generate utilities.css file
 * 
 * This script generates all margin, padding, gap, and typography utility classes
 * to reduce repetition and make maintenance easier.
 * 
 * Additionally, it generates some classes for flexbox.
 * 
 * Usage:
 *   npm run generate:utilities
 * 
 * The generated file is committed to the repo so users can use it directly
 * without needing to run build scripts. This script is primarily for maintenance.
 */

const fs = require('fs');
const path = require('path');

const MAX_SPACING = 16;

// Generate spacing value - 0 or CSS variable
const getSpacingValue = (n) => n === 0 ? '0' : `var(--spacing-${n})`;

// Generate utility classes for a property
const generateUtilities = (prefix, property, max = MAX_SPACING) => {
    let css = '';
    
    // Generate classes from 0 to max
    for (let i = 0; i <= max; i++) {
        css += `.${prefix}-${i} {\n`;
        css += `    ${property}: ${getSpacingValue(i)};\n`;
        css += `}\n\n`;
    }
    
    return css;
};

// Generate all utility classes
let output = '';

// Flex classes
output += `.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
}

.flex-nowrap {
    flex-wrap: nowrap;
}

.flex-grow {
    flex-grow: 1;
}

.flex-shrink {
    flex-shrink: 1;
}

.flex-center {
    align-items: center;
    justify-content: center;
}

.flex-between {
    align-items: center;
    justify-content: space-between;
}

.items-center {
    align-items: center;
}
    
`;	


// Text utilities

output += `.text-accent {
    color: var(--color-accent);
}

.bg-accent {
    background-color: var(--color-accent);
}

.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

`;

// Margin auto classes
output += `.mx-auto {
    margin-inline: auto;
}

.my-auto {
    margin-block: auto;
}

.mt-auto {
    margin-top: auto;
}

.mb-auto {
    margin-bottom: auto;
}

.ml-auto {
    margin-left: auto;
}

.mr-auto {
    margin-right: auto;
}

`;

// Margin all sides
output += generateUtilities('m', 'margin');

// Margin directional classes
output += generateUtilities('mx', 'margin-inline');
output += generateUtilities('my', 'margin-block');
output += generateUtilities('mt', 'margin-top');
output += generateUtilities('mb', 'margin-bottom');
output += generateUtilities('ml', 'margin-left');
output += generateUtilities('mr', 'margin-right');

// Padding directional 0 classes
output += `.px-0 {
    padding-inline: 0;
}

.py-0 {
    padding-block: 0;
}

.pt-0 {
    padding-top: 0;
}

.pb-0 {
    padding-bottom: 0;
}

.pl-0 {
    padding-left: 0;
}

.pr-0 {
    padding-right: 0;
}

`;

// Padding all sides
output += generateUtilities('p', 'padding');

// Padding directional classes
output += generateUtilities('px', 'padding-inline');
output += generateUtilities('py', 'padding-block');
output += generateUtilities('pt', 'padding-top');
output += generateUtilities('pb', 'padding-bottom');
output += generateUtilities('pl', 'padding-left');
output += generateUtilities('pr', 'padding-right');

// Gap utilities (for CSS Grid and Flexbox)
output += generateUtilities('gap', 'gap');
output += generateUtilities('gap-x', 'column-gap');
output += generateUtilities('gap-y', 'row-gap');

// Text size utilities
output += `.text-xs {
    font-size: var(--text-xs);
}

.text-sm {
    font-size: var(--text-sm);
}

.text-base {
    font-size: var(--text-base);
}

.text-lg {
    font-size: var(--text-lg);
}

.text-xl {
    font-size: var(--text-xl);
}

.text-2xl {
    font-size: var(--text-2xl);
}

.text-3xl {
    font-size: var(--text-3xl);
}

.text-4xl {
    font-size: var(--text-4xl);
}

.text-5xl {
    font-size: var(--text-5xl);
}

`;

// Font weight utilities
output += `.font-normal {
    font-weight: 400;
}

.font-medium {
    font-weight: 500;
}

.font-bold {
    font-weight: 700;
}

`;

// Write to file
const outputPath = path.join(__dirname, '..', 'styles', 'utilities.css');
fs.writeFileSync(outputPath, output.trim() + '\n', 'utf8');

console.log(`✅ Generated utilities.css with spacing scale 0-${MAX_SPACING}`);

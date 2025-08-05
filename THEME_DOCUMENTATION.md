# Theme Documentation - GATE And Tech Landing Page

## Overview
This document outlines the complete color palette and theme system used in the GATE And Tech landing page. The theme is built using CSS custom properties and Tailwind CSS for a consistent, maintainable design system.

## Primary Color Palette

### Main Brand Colors
- **Primary**: `hsl(142, 76%, 36%)` - Main green brand color
- **Primary Dark**: `hsl(142, 76%, 28%)` - Darker shade of primary
- **Primary Light**: `hsl(142, 76%, 45%)` - Lighter shade of primary
- **Primary Foreground**: `hsl(355, 7%, 97%)` - Text color on primary backgrounds

### Secondary Colors
- **Secondary**: `hsl(210, 40%, 98%)` - Light secondary background
- **Secondary Foreground**: `hsl(222, 84%, 5%)` - Text on secondary backgrounds

### Accent Colors
- **Accent**: `hsl(210, 40%, 96%)` - General accent color
- **Accent Foreground**: `hsl(222, 84%, 5%)` - Text on accent backgrounds
- **Accent Red**: `hsl(0, 84%, 60%)` - Error/destructive actions
- **Accent Green**: `hsl(142, 76%, 36%)` - Success indicators
- **Accent Orange**: `hsl(25, 95%, 53%)` - Warning indicators

## Background & Surface Colors

### Light Mode
- **Background**: `hsl(0, 0%, 100%)` - Main background
- **Foreground**: `hsl(222, 84%, 5%)` - Main text color
- **Card**: `hsl(0, 0%, 100%)` - Card backgrounds
- **Card Foreground**: `hsl(222, 84%, 5%)` - Text on cards

### Dark Mode Surfaces
- **Surface Dark**: `hsl(222, 84%, 5%)` - Primary dark surface
- **Surface Dark 1**: `hsl(217, 32%, 10%)` - Secondary dark surface
- **Surface Dark 2**: `hsl(217, 32%, 15%)` - Tertiary dark surface

## Text Colors

### Light Theme Text
- **Text Light Primary**: `hsl(222, 84%, 5%)` - Primary text in light mode
- **Text Light Secondary**: `hsl(215, 16%, 47%)` - Secondary text in light mode

### Dark Theme Text
- **Text Dark Primary**: `hsl(210, 40%, 98%)` - Primary text in dark mode

## Utility Colors

### State Colors
- **Success**: `hsl(142, 76%, 36%)` - Success states
- **Error**: `hsl(0, 84%, 60%)` - Error states  
- **Warning**: `hsl(25, 95%, 53%)` - Warning states
- **Destructive**: `hsl(0, 84%, 60%)` - Destructive actions
- **Destructive Foreground**: `hsl(210, 40%, 98%)` - Text on destructive backgrounds

### Interactive Elements
- **Border**: `hsl(214, 32%, 91%)` - Default border color
- **Input**: `hsl(214, 32%, 91%)` - Input field borders
- **Ring**: `hsl(142, 76%, 36%)` - Focus ring color
- **Muted**: `hsl(210, 40%, 96%)` - Muted backgrounds
- **Muted Foreground**: `hsl(215, 16%, 47%)` - Muted text
- **Popover**: `hsl(0, 0%, 100%)` - Popover backgrounds
- **Popover Foreground**: `hsl(222, 84%, 5%)` - Popover text

## Gray Scale
- **Gray 1**: `hsl(220, 14%, 96%)` - Lightest gray
- **Gray 2**: `hsl(220, 13%, 91%)` - Medium gray  
- **Gray 3**: `hsl(216, 12%, 84%)` - Darker gray

## Gradients

### Primary Gradients
- **Gradient Primary**: `linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 45%))`
- **Gradient Primary Hover**: `linear-gradient(135deg, hsl(142, 76%, 28%), hsl(142, 76%, 36%))`

## Animations & Effects

### Keyframe Animations
- **Accordion Down/Up**: Smooth accordion content transitions
- **Fade In**: `translateY(20px)` to `translateY(0)` with opacity
- **Slide Up**: Similar to fade-in with larger vertical movement
- **Glow Pulse**: Pulsing glow effect using primary color
- **Draw Line**: SVG line drawing animation
- **Scale In**: Scale from 0.95 to 1.0 with opacity
- **Float**: Gentle floating animation

### Special Effects
- **Border Glow**: Animated conic gradient borders on sections
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Spotlight Cards**: Interactive hover effects with moving highlights
- **Marquee**: Continuous scrolling text animations

## Usage Guidelines

### Color Usage
1. **Primary Green**: Use for main CTAs, brand elements, and primary actions
2. **Secondary Colors**: Use for backgrounds and subtle UI elements
3. **Accent Colors**: Use sparingly for highlighting specific content
4. **Gray Scale**: Use for text hierarchy and subtle UI elements

### Responsive Design
- All colors are defined as HSL values for better manipulation
- CSS custom properties enable easy theme switching
- Tailwind utilities provide consistent spacing and typography

### Accessibility
- High contrast ratios maintained between text and background colors
- Focus indicators use the primary green color
- State colors follow WCAG guidelines for color accessibility

## Implementation Notes

### CSS Variables Location
All color definitions are located in `src/index.css` using CSS custom properties.

### Tailwind Configuration
Color mappings are defined in `tailwind.config.ts` referencing the CSS variables.

### Component Usage
Use semantic color names (e.g., `text-primary`, `bg-secondary`) rather than direct color values to maintain consistency and enable theme switching.
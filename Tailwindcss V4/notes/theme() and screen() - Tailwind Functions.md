# 11 theme() and screen() - Tailwind Functions
## theme()
The theme() function lets you reference values from your tailwind.config.js theme directly in CSS.
Example:
```css
@layer base {
  h1 {
    font-size: theme('fontSize.4xl'); /* pulls from theme.fontSize.4xl */
    color: theme('colors.blue.500');  /* pulls from theme.colors.blue.500 */
    margin-bottom: theme('spacing.4'); /* pulls from theme.spacing.4 */
  }
}
```
If your config has:
```javascript
theme: {
  colors: {
    blue: {
      500: '#3b82f6',
    },
  },
  spacing: {
    4: '1rem',
  },
  fontSize: {
    '4xl': '2.25rem',
  },
}
```
It compiles to:
```css
h1 {
  font-size: 2.25rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}
```
**✅ Use it when you want consistency with Tailwind’s design tokens.**

**---------------------------------------------------------------------------------------------------------------------------**

## screen() function
The screen() function lets you reference breakpoints defined in your tailwind.config.js.
Example:
```css
@layer base {
  body {
    background-color: white;
  }

  @media screen(theme('screens.md')) {
    body {
      background-color: gray;
    }
  }
}
```
If your config has:
```javascript
theme: {
  screens: {
    sm: '640px',
    md: '768px',
  },
}
```
It compiles to:
```css
body {
  background-color: white;
}
@media screen and (min-width: 768px) {
  body {
    background-color: gray;
  }
}
```
**✅ Use it when you need custom media queries in your CSS that match Tailwind’s breakpoints.**

**🔹 When to use them?**
- theme() → Anytime you want to use Tailwind’s theme values in raw CSS (colors, spacing, font sizes, etc.)
- screen() → Anytime you need custom media queries aligned with your Tailwind breakpoints
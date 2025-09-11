# 08 Tailwind @layer Directive - Understand Tailwind Layers
## @layer components{}
```javascript
/* group Utilities */
.btn {
  @apply px-4 py-1 border rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white hover:border-transparent dark:focus:ring-offset-gray-800 dark:focus:border-transparent;
  @apply p-2;
}

.btn-purple {
  @apply border-purple-200 text-purple-600 hover:bg-purple-600 focus:ring-purple-600 dark:text-purple-400;
}

.btn-green {
  @apply border-green-200 text-green-600 hover:bg-green-600 focus:ring-green-600 dark:text-green-400;
}
```
```html
<button class="btn btn-purple text-red-500">
    Message
</button>
```

**-------------------------------------------------------------------------------------------------------------**

## @layer base{}
```javascript
@layer base {
    h1 {
        @apply text-4xl
    }
}
```
```bash
<h1>Somel Ahmed</h1>
```

**-------------------------------------------------------------------------------------------------------------**

## @layer utilities
Tailwind’s **utilities** layer is where you define your **own custom utility classes** — single-purpose, low-level classes (just like Tailwind’s built-in ones, e.g. p-4, flex, text-gray-600).

These are typically 1:1 mappings to a single CSS declaration.
Think of it as: **“I want a new Tailwind-style helper class that doesn’t exist yet.”**
```javascript
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }

  .text-body {
    font-size: 12px;
  }

  .scroll-snap-x {
    scroll-snap-type: x mandatory;
  }

  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  }
}
```
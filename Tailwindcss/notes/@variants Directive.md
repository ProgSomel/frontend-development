# 09 @variants Directive
The @variants directive was a Tailwind CSS feature (before v3) that let you generate responsive, hover, focus, etc. variants of your custom utilities.

## 🔹 How it worked (Tailwind v2 and earlier)
Example:
```css
@variants hover, focus {
  .rotate-15 {
    transform: rotate(15deg);
  }
}
```

This would generate:
```css
.rotate-15 { transform: rotate(15deg); }
.hover\:rotate-15:hover { transform: rotate(15deg); }
.focus\:rotate-15:focus { transform: rotate(15deg); }
```

So you could now write:
```html
<button class="rotate-15 hover:rotate-15 focus:rotate-15">
  Rotate me
</button>
```

## 🔹 Status in Tailwind v3+
- The **@variants** directive was **deprecated** and **removed**.
- Instead, Tailwind introduced a simpler way: just define your custom utilities inside @layer utilities, and **all variants are automatically available**.

✅ Modern way (v3+):
```css
@layer utilities {
  .rotate-15 {
    transform: rotate(15deg);
  }
}
```
Now you can already use it with variants:
```html
<button class="rotate-15 hover:rotate-15 sm:rotate-15">
  Rotate me
</button>
```
**No need for @variants anymore 🎉**

## 🔹 Why the change?
- **Less duplication** → You don’t have to list out hover/focus/responsive yourself.
- **More consistent** → Your custom utilities behave just like built-in ones.
- **Simpler config** → Tailwind handles variant generation automatically.

## ✅ In summary:
- @variants → old way (pre-v3) to generate hover/focus/responsive variants for custom utilities.
- **Now** → just put your custom utilities in @layer utilities and Tailwind automatically makes variants available.
# 10 @responsive and @screen Directives
## @responsive
In Tailwind v1–v2, the **@responsive** directive was used to tell Tailwind:
“Generate responsive variants (sm:, md:, lg:, xl:) for this custom utility.”

Example (old way):
```css
@responsive {
  .rotate-15 {
    transform: rotate(15deg);
  }
}
```
This would generate:
```css
.rotate-15 { transform: rotate(15deg); }
.sm\:rotate-15 { @media (min-width: 640px) { transform: rotate(15deg); } }
.md\:rotate-15 { @media (min-width: 768px) { transform: rotate(15deg); } }
...
```

## ✅ Now in Tailwind v3+
You don’t need @responsive anymore. Just put your class inside @layer utilities:
```css
@layer utilities {
  .rotate-15 {
    transform: rotate(15deg);
  }
}
```
Now you can use:
```html
<div class="rotate-15 sm:rotate-15 md:rotate-15"></div>
```
**Tailwind auto-generates responsive variants for you 🎉.**

**------------------------------------------------------------------------------------------------------------------------**

## @screen
The @screen directive still works in Tailwind v3, but it’s used differently.
It lets you write custom CSS that applies at a certain breakpoint (using your Tailwind config breakpoints).

Example
```css
@layer utilities {
  @screen md {
    .card {
      padding: 2rem;
    }
  }
}
```
This compiles to:
```css
@media (min-width: 768px) {
  .card {
    padding: 2rem;
  }
}
```
**So you can use Tailwind’s breakpoints in your own CSS without hardcoding media queries.**
**🔹 Summary**
- @responsive → old (pre-v3) way to generate responsive variants.
  ✅ Removed in v3 (now variants are automatic in @layer utilities).

- @screen → still valid. Lets you wrap styles inside Tailwind’s configured breakpoints.
  Useful for writing custom CSS that scales with your Tailwind theme.

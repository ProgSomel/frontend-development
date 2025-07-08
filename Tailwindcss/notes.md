# Tailwindcss
# Tailwindcss Installation and Editor setup
[TailwindCss](https://tailwindcss.com/docs/installation/using-vite)
- Install from CDN
- Install as PostCSS Plugin
- Install Tailwind CLI

### Install Tailwind CLI
**Prerequisites:** node.js >= 12.3.0 installed on computer
@ --> directive

**-------------------------------------------------------------------------------------------------------------------------------------**

# Utility-First Approach
**Component** --> multiple utility
6rem == 4*6 = 24(h-24)
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl 
     shadow-md space-y-2
     '>
      <img className='h-24 mx-auto rounded-full ring-4 ring-green-400' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Learn with Sumit</p>
          <p className='text-gray-500 font-medium'>Youtube Channel</p>
        </div>
        <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold'>Visit Now</button>
      </div>
     </div>
    </div>
  )
}
```

**-------------------------------------------------------------------------------------------------------------------------------------**

# Responsive variants - Tailwind Breakpoints
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Learn with Sumit</p>
          <p className='text-gray-500 font-medium'>Youtube Channel</p>
        </div>
        <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold'>Visit Now</button>
      </div>
     </div>
    </div>
  )
}
```

**-----------------------------------------------------------------------------------------------------------------------------------------**

# Hover focus & other state variants
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Learn with Sumit</p>
          <p className='text-gray-500 font-medium'>Youtube Channel</p>
        </div>
        <button className='px-4 py-1 border border-purple-200 
        rounded-full text-sm text-purple-600 
        font-semibold hover:bg-purple-600 hover:text-white
        hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:ring-offset-2 cursor-pointer
        '
        >Visit Now</button>
      </div>
     </div>
    </div>
  )
}
```

**----------------------------------------------------------------------------------------------------------------------------------------**


# Dark mode variant
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='
          text-lg text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</p>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400
          '>Youtube Channel</p>
        </div>
        <button className=
        '
        >Visit Now</button>
      </div>
     </div>
    </div>
  )
}
```

**-----------------------------------------------------------------------------------------------------------------------------------------**

# Composing Utilities with @apply Directive
```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

.btn-purple{
  @apply px-4 py-1 border border-purple-200 
        rounded-full text-sm text-purple-600 
        font-semibold hover:bg-purple-600 hover:text-white
        hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:ring-offset-2 cursor-pointer
        dark:text-purple-400 dark:focus:ring-offset-gray-800
}
```
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='
          text-lg text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</p>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400
          '>Youtube Channel</p>
        </div>
        <button className='
          btn-purple
        '
        >Visit Now</button>
      </div>
     </div>
    </div>
  )
}
```

-------------------------------------------------------------------------------------------------------------------------------------

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

.btn-purple{
  @apply px-4 py-1 border border-purple-200 
        rounded-full text-sm text-purple-600 
        font-semibold hover:bg-purple-600 hover:text-white
        hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:ring-offset-2 cursor-pointer
        dark:text-purple-400 dark:focus:ring-offset-gray-800
}

.btn-green{
  @apply px-4 py-1 border border-green-200 
        rounded-full text-sm text-green-600 
        font-semibold hover:bg-green-600 hover:text-white
        hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-green-600 focus:ring-offset-2 cursor-pointer
        dark:text-green-400 dark:focus:ring-offset-gray-800
}
```

-----------------------------------------------------------------------------------------------------------------------------------

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none focus:ring-2
  focus:ring-offset-2 cursor-pointer
}

.btn-purple{
  @apply border-purple-200 
        rounded-full text-purple-600 
        hover:bg-purple-600 hover:text-white
        hover:border-transparent focus:ring-2
        focus:ring-purple-600 dark:text-purple-400 dark:focus:ring-offset-gray-800
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 hover:text-white
        hover:border-transparent focus:ring-green-600 dark:text-green-400 dark:focus:ring-offset-gray-800
}
```

------------------------------------------------------------------------------------------------------------------------------------

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none
  focus:ring-offset-2 cursor-pointer hover:text-white
  hover:border-transparent focus:ring-2 dark:focus:ring-offset-gray-800
}

.btn-purple{
  @apply border-purple-200 
        text-purple-600 
        hover:bg-purple-600
        focus:ring-purple-600 dark:text-purple-400 
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 focus:ring-green-600 dark:text-green-400 

}
```
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='
          text-lg text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</p>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400
          '>Youtube Channel</p>
        </div>
        <button className='btn btn-purple'>Visit Now</button>
        <button className='btn btn-green'>Website</button>
      </div>
     </div>
    </div>
  )
}
```
----------------------------------------------------------------------------------------------------------------------------------

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

/*! group utilities  */
.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none
  focus:ring-offset-2 cursor-pointer hover:text-white
  hover:border-transparent focus:ring-2 dark:focus:ring-offset-gray-800;
  /*if we want to p-2 to be applied instead of px-4 */
  @apply p-2 
  
}

.btn-purple{
  @apply border-purple-200 
        text-purple-600 
        hover:bg-purple-600
        focus:ring-purple-600 dark:text-purple-400 
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 focus:ring-green-600 dark:text-green-400 

}
```

**------------------------------------------------------------------------------------------------------------------------------------**

# Tailwind @layer Directive - Understand Tailwind Layers
## @layer components
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <p className='
          text-lg text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</p>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400
          '>Youtube Channel</p>
        </div>
        <button className='btn btn-purple rounded-sm'>Visit Now</button>
        <button className='btn btn-green'>Website</button>
      </div>
     </div>
    </div>
  )
}
```
**Here, rounded-sm will not work. because rounded-full already available at btn class. If we do not want this behaviour than we have to do like below code:**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

@layer components{
  /*! group utilities  */
.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none
  focus:ring-offset-2 cursor-pointer hover:text-white
  hover:border-transparent focus:ring-2 dark:focus:ring-offset-gray-800;
  /*if we want to p-2 to be applied instead of px-4 */
  @apply p-2 
  
}

.btn-purple{
  @apply border-purple-200 
        text-purple-600 
        hover:bg-purple-600
        focus:ring-purple-600 dark:text-purple-400 
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 focus:ring-green-600 dark:text-green-400 

}
}
```
Now rounded-sm will work 

--------------------------------------------------------------------------------------------------------------------------------------

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

/*! Components Layer  */
@layer components{
.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none
  focus:ring-offset-2 cursor-pointer hover:text-white
  hover:border-transparent focus:ring-2 dark:focus:ring-offset-gray-800;
  /*if we want to p-2 to be applied instead of px-4 */
  @apply p-2 
  
}

.btn-purple{
  @apply border-purple-200 
        text-purple-600 
        hover:bg-purple-600
        focus:ring-purple-600 dark:text-purple-400 
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 focus:ring-green-600 dark:text-green-400 

}
}

/*! Base Layer  */
@layer base{
  h1{
    @apply text-2xl;
  }
}
```
```html
import React from 'react'

export default function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
     <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2
     sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-12
     dark:bg-gray-800 sm:dark:hover:bg-gray-700
     '>
      <img className='h-24 mx-auto rounded-full ring-4 
      ring-green-400 sm:mx-0 sm:shrink-0
      transform hover:scale-105 duration-500
      ' src="../images/logo.png" alt="" />
      <div className='text-center space-y-2'>
        <div className='space-y-0.5'>
          <h1 className='
          text-black font-semibold
          dark:text-gray-300
          '>Learn with Sumit</h1>
          <p 
          className='
          text-gray-500 font-medium
          dark:text-gray-400
          '>Youtube Channel</p>
        </div>
        <button className='btn btn-purple rounded-sm'>Visit Now</button>
        <button className='btn btn-green'>Website</button>
      </div>
     </div>
    </div>
  )
}
```

**------------------------------------------------------------------------------------------------------------------------------------**

# @utilities Directive
```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme{
  --color-mint-500: oklch(0.72 0.11 178);
}

/*! Components Layer  */
@layer components{
.btn{
  @apply px-4 py-1 border rounded-full text-sm
  font-semibold focus:outline-none
  focus:ring-offset-2 cursor-pointer hover:text-white
  hover:border-transparent focus:ring-2 dark:focus:ring-offset-gray-800;
  /*if we want to p-2 to be applied instead of px-4 */
  @apply p-2 
  
}

.btn-purple{
  @apply border-purple-200 
        text-purple-600 
        hover:bg-purple-600
        focus:ring-purple-600 dark:text-purple-400 
}

.btn-green{
  @apply border-green-200 
        text-green-600 
        hover:bg-green-600 focus:ring-green-600 dark:text-green-400 

}
}

/*! Base Layer  */
@layer base{
  h1{
    @apply text-2xl;
  }
}

/*! Utilities Layer */
@layer utilities{
  .text-body{
    font-size: 12px;
  }
}
```



# cn() - Magical utility for every Tailwind Developer (clsx + twMerge)
## app.jsx
```jsx
import Button from "./Button";

function App() {
  return (
    <>
      <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <Button className="bg-green-500"></Button>
      </div>
    </>
  );
}

export default App;
```
## button.jsx
```jsx
import React from 'react'

export default function Button({className}) {
  return (
    <button className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
        Be a Good Human
    </button>
  )
}
```

---------------------------------------------------------------------------------------------------------------------------

```bash
npm i tailwind-merge
```

---------------------------------------------------------------------------------------------------------------------------

## app.jsx
```jsx
import Button from "./Button";

function App() {
  return (
    <>
      <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <Button className="bg-green-500"></Button>
      </div>
    </>
  );
}

export default App;
```
## button.jsx
```jsx
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className }) {
  return (
    <button className={twMerge( "bg-blue-500 text-white py-2 px-4 rounded ${className", className)}>
      Be a Good Human
    </button>
  );
}
```

---------------------------------------------------------------------------------------------------------------------------

## button.jsx
```jsx
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className }) {
    const [loading, setLoading] = useState(false);
  return (
    <button className={twMerge( 
        "bg-blue-500 text-white py-2 px-4 rounded ${className", 
        className,
        loading && "bg-gray-500"
        )}
        onClick={()=> setLoading((l) => !l)}
        >
      Be a Good Human
    </button>
  );
}
```

---------------------------------------------------------------------------------------------------------------------------

## button.jsx
```jsx
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className }) {
    const [loading, setLoading] = useState(false);
  return (
    <button className={twMerge( 
        "bg-blue-500 text-white py-2 px-4 rounded ${className", 
        className,
        {
            "bg-gray-500": loading,
            "bg-gray-600": !loading
        }
        )}
        onClick={()=> setLoading((l) => !l)}
        >
      Be a Good Human
    </button>
  );
}
```
above syntax will not work. It will work if we install clsx.
```bash
npm i clsx
```

---------------------------------------------------------------------------------------------------------------------------

```jsx

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className }) {
    const [loading, setLoading] = useState(false);
  return (
    <button className={twMerge( 
        clsx(

        "bg-blue-500 text-white py-2 px-4 rounded ${className", 
        className,
        {
            "bg-gray-500": loading,
            "bg-gray-600": !loading
        }
        )
        )}
        onClick={()=> setLoading((l) => !l)}
        >
      Be a Good Human
    </button>
  );
}
```

---------------------------------------------------------------------------------------------------------------------------

## cn.js
```javascript
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs){
    return twMerge(clsx(inputs))
}
```
## button.jsx
```jsx

import React, { useState } from "react";
import cn from "./lib/cn";

export default function Button({ className }) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={cn("bg-blue-500 text-white py-2 px-4 rounded", className, {
        "bg-gray-500": loading,
      })}
      onClick={() => setLoading((l) => !l)}
    >
      Be a Good Human
    </button>
  );
}
```
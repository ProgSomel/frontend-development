# 13 PostCSS Installation - Advanced Concepts
Transform CSS. All the frameworks Like: React, under the hook uses PostCSS.
## tailwind.config.js
```javascript
module.exports = {
    purge: [], //? clean unused code.
    darkMode: "media", //? or "media" or 'class' //? media for device config and class for user defined
    theme: {
        // used for plugin. Like: spacing, colors
        //? theme is used to customize the tailwind default confing. Like: if we want to change the color or spacing
        colors: {
            gray: {
            300: "#D5d5d5",
        }
        }
        //? if we add colors like this all the colors value of tailwind default will be changed to only gray
        //? to use gray color with extended colors tban we can use extend{}
        extend: {
            colors: {
                gray: {
                    300: "#D5d5d5"
                }
            }
        } 
    },
    // variants are like: focus, disabled
    variants: {
        extend: {},
    },
    plugins: [],
}
```
# react-cookie-bubble
`react-cookie-bubble` is the easy and beautiful way to inform users that your website is using cookies. 

Demo:</br>
https://cookiebubble.netlify.com


## Current version
````
v1.0.3
````
## Getting Started

1. Install react-cookie-bubble

    ```
    yarn install react-cookie-bubble
    or
    npm i react-cookie-bubble 
    ```
2. Importing
```js
 import CookieBubble from react-cookie-bubble;
```
3. Usage
```js
<CookieBubble 
    messageTextColor="#eee"
    iconVisibility={false}
    ...
/>
```

## Props 
Name | Default | Options
--- | --- | --- 
cookieMaxAge                | 30                              | (Number)
messageText                 | 'We use cookies to personalize your experience. </br> By continuing to visit this website you agree to our use of cookies.'      | (String)
messageTextColor            | '#000'                          | hex, rgb, rgba
messageFontSize             | '18px'                          | px, em, rem
buttonText                  | 'Got it'                        | (String)
buttonColor                 | '#00a4ff'                       | hex, rgb, rgba 
buttonFontSize              | '18px'                          | px, em, rem 
iconColor                   | '#00a4ff'                       | hex, rgb, rgba
iconVisibility              | true                            | (Bool)
cookiePolicyButtonText      | 'Read Our Cookie Policy'        | (String)
cookiePolicyButtonTextColor | '#000'                          | hex, rgb, rgba
cookiePolicyButtonUrl       | 'http://allaboutcookies.org/'   | url
cookiePolicyButtonTarget    | '_blank'                        | _self
boxAppearDelay              | 1000                            | (Number)
boxPosition                 | 'bottom-left'                   | 'bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'


## Versioning
The `react-cookie-bubble` library follows [Semantic Versioning](https://semver.org/). </br>
`[MAJOR].[MINOR].[PATCH]` 

## Support
If you encounter an issue or want to request a feature, you can [create an issue](https://github.com/CookieBubble/react-cookie-bubble/issues/new).

## Similar Projects
- [jQuery implementation of cookieBubble](https://github.com/CookieBubble/jquery-cookie-bubble)  ✅
- [React implementation of cookieBubble](https://github.com/CookieBubble/react-cookie-bubble)  ✅
</br>soon:</br>
- [Vanilla implementation of cookieBubble](https://github.com/CookieBubble/vanilla-cookie-bubble)  🔜
- [Vue implementation of cookieBubble](https://github.com/CookieBubble/vue-cookie-bubble) 🔜

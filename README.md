# DSCommerce - ReactJS-based App on @devsuperior - ReactJS Professional 
Going down to key concepts of ReactJS such as 
- Components
- Routes
- State Management
- JSX
- TypeScript
- Yarn
- Vite
## _Table of contents_
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I practiced](#what-i-practiced)
- [Continued development](#continued-development)
- [Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
The design is structured as shown:
- src|
    - assets|

    - components|
        - ButtonPrimary
        - ButtonSecondary
        - HeaderClient
        - ProductCategory
        - ProductDetailsCard
   - routes
   - App.tsx
   - index.css
   - main.tsx
   - index.html
   - tsconfig.json
   - tsconfig.node.json
   - vite.config.js
   - yarn.lock
- public|

## _Screenshot_
[![](./DSCommerce.png)]()
## _Links_
- Live Site URL: [] 
## _Built with_
| Git | ReacJS | Vite | Yarn | TypeScript | JavaScript | Visual Studio
|----------|----------|----------|----------|----------|----------|----------|
 ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/react.svg) | ![](https://ferreiras.dev.br/assets/images/icons/vite.svg) | ![](https://ferreiras.dev.br/assets/images/icons/yarn-title.svg) | ![](https://ferreiras.dev.br/assets/images/icons/ts-logo.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg)  

 ## _What I practiced_
```js
import ProductDetails from './routes/ProductDetails';

function App() {

  return (
    <ProductDetails />
  )

}

export default App

``` 
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

``` 

## _Continued development_
- Next step: keep moving 
### _Useful resources_
- [https://react.org] Nice!.
- [https://yarnpkg.org/] Mandatory pit stop at this site.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- @devsuperior

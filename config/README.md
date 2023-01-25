# Visplay Config Panel

Tools used: HTML, CSS, Typescript, Next.js

# Why are we using Next.js?
Next.js is a framework built on top of React, which means it contains all of the features React does, as well as some other useful ones.
It's important to note that if you already know React, you can write code the same way you usually do.

Some of the main features we would be interested in for this project include:

1. Built-in routing
Next.js allows us to automatically map pages to specific URLs, so we won't need to serve them manually using node.

2. Great Performance
Next.js is known for its server-side rendering. This means that we can do more work to actually render the page on the server side (as opposed to the user's browser), and can optimize the code before sending it to the user. More information [here](https://medium.com/swlh/server-side-rendering-with-next-js-56f84f98f9bd).

## Getting Started
First, please make sure you have Node.js [installed](https://nodejs.org), this will also install NPM.

Open a terminal, and navigate to this directory (the config directory). If you are on Windows, one easy way of doing is to open the File Explorer, and then to click File -> Open Windows Powershell

Once inside the shell, run the following command:
```bash
npm install
```
`npm i` also works and does the same thing if you prefer shorter commands.

This will install all of the dependencies (these are libraries defined in the file called package.json along with their versions).

Then, run the development server:

```bash
npm run dev
```

Hopefully you won't get any errors and you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Folder Structure

## pages/
These contain the actual pages of our application. The structure of this folder also defines the URLs at which each page lives.

For example, the file `pages/login.tsx` maps to the URL `/login`. (If you are running the dev server, this would be accessible at [http://localhost:3000/login](http://localhost:3000/login)).

## pages/api/
This directory is special, and is one of the benefits that Next.js provides. 

Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This will also be used to manage JSON routes when the renderer is talking to the backend.

## components/
You've just created a beautiful button in the Login page, but now you also want to use that same button on the Home page.
You could just copy and paste all of your HTML code, but that gets annoying quickly.

No, instead, we could create something called a Component, which bundles all of the HTML code for specific UI functionality along with some code and styles.

If you then want to use this component somewhere else, you can just use as if it was a standard HTML element.

For example, we could have a component that looks like this :

```tsx
export default function TheBestComponent(props) {
  return (
    <div style="background-color: blue;">
      {props.children}
    </div>
  );
}
```

Note that this just uses a normal component (`export default` just makes it importable in other files).
One parameter is passed into this function (props), which contains any information we want to pass into this component.

We can then import this component we've just created in another file.

```tsx
import TheBestComponent from 'the_file_in_which_the_best_component_is.tsx';

export default function SomeOtherComponent(props) {
    return (
        <TheBestComponent>
            <p>Hello</p>
        </TheBestComponent>
    );
}
```


## public/
This contains some resources that the browser might need to fetch outside of the pages (like a favicon).

## styles/
This contains the styles for each of our components/pages. Basically, this sets up things like colors, font sizes, element sizes/positions, and anything else to *style* the HTML.

If you are not familiar with CSS, [this](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) is a great resource.

### node_modules/
You can ignore this directory, it stores all of the packages (libraries) we're using and is created when we run the `npm install` command.

# Good Resources
To learn more about the technologies used here. 

- [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [Typescript](https://product.hubspot.com/blog/intro-to-typescript) (if you know Javascript already)
- [Typescript](https://www.codecademy.com/learn/learn-typescript) (if you are new to Javascript)
- [Next.JS](https://nextjs.org/learn/basics/create-nextjs-app) (this official tutorial is probably the best, allows you to create your own example app first)
- [React.JS](https://reactjs.org/tutorial/tutorial.html) (again, the official tutorial is probably best)
- [Tailwind CSS](https://tsh.io/blog/tailwind-css-tutorial/)

# Tailwind CSS
Tailwind defines a lot of existing CSS classes (please see CSS resource above if you are not familiar with css classes).
For example, we can center our components and elements, define their spacing, set the font size, etc.

When making a styling change, it is generally good to first Quick Search [here](https://tailwindcss.com/docs) (ie: Font Size, Spacing, etc.) and to then apply the correct class for whatever you're trying to do.

For example, if we are trying to make some huge text for some heading somewhere, we can apply the class like this.

```tsx
    <p class="text-9xl">Some Big Text</p>
```

Note that `p` might not be the right element in this case, but this showcases how these classes can be applied to any element.

# Good First Issues
[Here](https://github.com/ColoradoSchoolOfMines/visplay-v2/issues?q=is%3Aopen+label%3Aconfig+label%3A%22good+first+issue%22).

# FAQs

## What is @mui/material?
This is Material UI, which provides us with nice pretty components that look cool!
We could've just defined our own components, and then imported them, but this is easier and allows us to spend more time on features rather than UI.

This dependency is installed using our `package.json` file.

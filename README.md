<h1 align="center">
    <img src="./docs/logo.png" alt="Tailwind System logo" />
    <div>Tailwind System</div>
</h1>

This project is an implementation of [Tailwind CSS](https://tailwindcss.com/) using [Styled System](https://styled-system.com/). The reasoning behind this was that some may prefer using styled system to apply their utility styles, versus class names which can be forgotten by other developers. If your spacing system is available to devs via a prop, they are more likely to use that than an inline style.

Another benefit is that class names are unknown to your IDE. Whereas what utilities you have available on your component will be listed as props that are available and auto completed since this project uses typescript. No more having to switch back and forth between api documentation. Once your component is made, you can simply see what the IDE autocompletes to.

## How to use
Styled System is built on CSS-in-JS libraries, so installing a implmentation of those things is required to use this library. See [Emotion](https://github.com/emotion-js/emotion) or [Styled Components](https://github.com/styled-components/styled-components) for possible implemntations of this. You might also want to check out the [getting started guide](https://styled-system.com/#getting-started) from styled-system to get more information and also create your own custom systems.

## Differences of Tailwind

### Color Differences
There are some minor differences between this library and tailwind. First, instead of using named color values like `text-indigo-600` this library uses a naming convention of primary, secondary, tertiary, and status, similar to [bootstrap 4.0](https://getbootstrap.com/docs/4.0/utilities/colors/). This is an important distinction, as if you attempt to change the theme of your application, you have all these named color values which would be hard coded in your application. 

### Missing Features
Another difference would be that _all_ features in tailwind, may not exist in this library. [These things take time](https://www.youtube.com/watch?v=0d6yBHDvKUw), and if there is a feature that hasn't been issued yet, [create an issue]() and we'll get on it.

// TODO: basic example
// TODO: add breakpoints
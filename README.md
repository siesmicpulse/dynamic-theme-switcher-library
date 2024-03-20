# dynamic-theme-switcher-library

A simple library for dynamically switching themes in your web application.

## Installation

Run the following command to install `dynamic-theme-switcher-library`:

```bash
npm install dynamic-theme-switcher-library
```

## Usage

To use `dynamic-theme-switcher-library`, import the `switchTheme` function and use it to change the theme:

```javascript
const { switchTheme } = require('dynamic-theme-switcher-library');

// Switch to the 'dark' theme
switchTheme('dark');

// Switch to the 'light' theme
switchTheme('light');
```

Ensure your CSS is set up to respond to the `data-theme` attribute changes on the `html` element.

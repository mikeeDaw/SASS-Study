# Learn SASS! :3

### What is SASS?

• Extends CSS & gives extra features. <br>
• uses common programming constructs like variables, functions, loops, etc. <br>
• provides a compiler, `.scss` needs to be converted to `.css` to be read. <br>

### Setup

• Install the task runner [Gulp](https://gulpjs.com "Gulp's Homepage") <br>
   \- use the command `npm i gulp gulp-sass sass --save-dev` <br>
• make a gulp file: 'gulpfile.js' <br>
• run the `gulp` command in terminal. <br>
> *Challenges* <br>
> • add `"gulp":"gulp"` in `scripts` section in `package.json` file & use the `npm run gulp` command. <br>
> • add `"type":"module"` in `package.json`

### Setting Up Unused CSS Purger

• Install a gulp plugin 'Purge CSS' <br>
  \- use the command `npm install gulp-purgecss --save-dev` on terminal <br>
•  Update the `gulpfile.js` file
• Re-run the gulp process.

### Topics

• Variables - `_variables.scss` <br>
• Nested Rules - `_card.scss` <br>
• SASS Math - `_variables.scss` <br>
• Maps - `_variables.scss` <br>
• Loops - `_colors.scss` <br>
• Conditionals - `_colors.scss` <br>
• Parent Selector - `_card.scss` <br>
• Mixins - `_mixins.scss` <br>
• Functions - `_functions.scss` <br>
• Utility Classes - `_utilities.scss` <br>
• Media Queries - `_breakpoints.scss` and `_card.scss` <br>
• Grid System - `_grid.scss` <br>
• Extend - `_navbar.scss` <br>
• CSS Purging - `gulpfile.js` <br>


#### NOTE! <br>
\- "Live Server" extension in vs code is used to run the website. <br>
\- To import and use the created CSS library, [Follow This](https://www.youtube.com/watch?v=btMR5e4ZRM4&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=21 "Library Tutorial")

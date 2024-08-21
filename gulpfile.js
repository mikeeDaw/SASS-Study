import { src, dest, watch, series } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
// For Purging CSS
import purgecss from 'gulp-purgecss'

const sass = gulpSass(dartSass);

const relPath = (path) => `./styles/${path}`

/*
   Compiling SASS to CSS (Can have any identifier) 
*/
const buildStyle = () => {
   // src - specify .scss source file.
   // dest - destination directory for the converted .css file.
   // pipe() - connect readable stream to a writable stream
   //        - read data from one file and writing it to another.
   // sass() - the SASS compiler to convert it to a .css file.
   // dest() - the directory of the compiled .css file.
   // purgecss() - to purge unused css rules.
   //   • 'content' parameter is an array of paths the purger will take a look to find
   //      classnames and rules that are used and compare it to the compile css file and
   //      take out any unused rules.
   // NOTE: The '/**/' means any subfolders inside the parent directory.
   //       - '**' matches 0 or more 'directories' in a path.
   return src(relPath('sass/**/*.scss'))
      .pipe(sass())
      .pipe(purgecss({ content: ['*.html'] }))  //  Add the purger after the convertion to .css
      .pipe(dest(relPath('css')))
}

/* 
   Watch a .scss file so if changes is made, it will automatically run
   the 'buildStyle' function. (can have any identifier)
*/
const watchTask = () => {
   // 1st arg - pass the array of .scss files to watch.
   // 2nd arg - function to run when the file changes.

   // After adding a purger, if you add a purged classname in an .html file, it will not
   // reflect since the gulp is not rebuilding since it only watchs .scss file. so add '*.html'. 
   watch([relPath('sass/**/*.scss'), '*.html'], buildStyle)
}

/*
   NOTE: Any file starting with '_' is not going to be compiled into a .css
         telling that it is a partial (when using the '*.[ext]' path).
/*

/*
   Export them to be used outside.
*/
export default series(buildStyle, watchTask)
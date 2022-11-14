"use strict";

const gulp = require("gulp");

// parallel 平行
// gulp.task('clean', gulp.parallel(cleanNodeScripts, cleanViewerScripts));
// gulp.task('build', gulp.series('clean', compileNodeScripts, compileViewerScripts));
// gulp.task('watch', gulp.series('build', watch));
// gulp.task('default', gulp.task('watch'));

// function javascript(cb) {
//   // body omitted
//   console.log(1);
// }

// function css(cb) {
//   // body omitted
//   console.log(2);
// }

// gulp.parallel(javascript, css);

gulp.task("build", function (cb) {
  // body omitted
  console.log(3);
  return Promise.resolve("1");
});

gulp.task(
  "default",
  gulp.series("build", function (done) {
    console.log(
      "Default task that cleans, builds and runs the application [END]"
    );
    done();
  })
);

var gulp = require('gulp');

gulp.task('default',['task1'], function() {
    console.log('Hello, Gulp!');
});

gulp.task('task1',['task2'], function(callback) {
    console.log('Task1 Output...');
    callback();
});

gulp.task('task2', function(callback) {
    console.log('Task2, Output...');
    callback();
});
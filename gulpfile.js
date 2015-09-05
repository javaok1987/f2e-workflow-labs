var gulp = require('gulp');

gulp.task('default',['task1', 'task2'], function() {
    console.log('Hello, Gulp!');
});

gulp.task('task1', function() {
    console.log('Task1 Output...');
});

gulp.task('task2', function() {
    console.log('Task2, Output...');
});
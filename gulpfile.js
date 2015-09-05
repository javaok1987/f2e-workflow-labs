var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['task1'], function() {
    console.log('Hello, Gulp!');
});

gulp.task('task1', ['task2'], function(callback) {
    console.log('Task1 Output...');
    callback();
});

gulp.task('task2', function(callback) {
    console.log('Task2, Output...');
    callback();
});

gulp.task('output1', function() {
    gulp.src('assets/vendor/bootstrap/**/*.js')
        .pipe(gulp.dest('output1'));
});

gulp.task('output2', ['clean'], function() {
    gulp.src('assets/vendor/bootstrap/**/*.js', {
            base: 'assets'
        })
        .pipe(gulp.dest('output2'));
});

gulp.task('output3', function() {
    gulp.src(['assets/vendor/**/*.js',
            'assets/vendor/**/*.css'
        ], {
            base: 'assets/vendor/'
        })
        .pipe(gulp.dest('output3'));
});

gulp.task('output4', function() {
    gulp.src(['assets/vendor/angular/**/*.js', 'assets/vendor/angular-animate/angular-*.js'])
        .pipe(gulp.dest('output4'));
});

gulp.task('clean', function(callback) {
    del(['output2/vendor/bootstrap/**'])
        .then(function(paths) {
            console.log('Deleted files/folders:\n', paths.join('\n'));
        }).then(callback);
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['output2']);
}).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type);
});

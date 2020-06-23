const { src, dest, series } = require("gulp")
const htmlmin = require("gulp-htmlmin")
const less = require("gulp-less")
const minifyCSS = require("gulp-csso")
const imagemin = require("gulp-imagemin")
const qiniuCDN = require("gulp-qiniu-up")
const hash = require("gulp-hash-filename")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const inject = require("gulp-inject")
const clean = require("gulp-clean")

const dist = "dist"

function html() {
    return src("online/*.html")
        .pipe(
            inject(
                src(["./dist/*.js", "./dist/*.css", "./dist/*.svg"], {
                    read: false,
                }),
                {
                    transform: function (filepath) {
                        if (filepath.slice(-4) === ".svg") {
                            return '<img id="svg" src="' + filepath + '" />'
                        }
                        // Use the default transform as fallback:
                        return inject.transform.apply(
                            inject.transform,
                            arguments
                        )
                    },
                    ignorePath: "dist/",
                }
            )
        )
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(dist))
}

function css() {
    return src("online/*.less")
        .pipe(hash())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest(dist))
}

function js() {
    return src("online/*.js", { sourcemaps: true })
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(hash())
        .pipe(dest(dist, { sourcemaps: true }))
}

function image() {
    return src("online/*.svg").pipe(hash()).pipe(imagemin()).pipe(dest(dist))
}

function del() {
    return src(dist, { read: false }).pipe(clean())
}

function upload() {
    return src(dist + "/*").pipe(
        qiniuCDN({
            qiniu: {
                accessKey: "",
                secretKey: "",
                bucket: "mm-liayal-com",
                origin: "mm.liayal.com",
                uploadURL: 'up-z2.qiniup.com'                
            },
            forceUpload: true,
        })
    )
}

exports.js = js
exports.js = image
exports.css = css
exports.html = html
exports.default = series(del, css, image, js, html, upload)

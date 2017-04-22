"use strict";

module.exports = function (args, msg, app) {
    return [
        "Hello!",
        "I am Lisa, an indoor plant.",
        "<http://dontnodentertainment.wikia.com/wiki/Lisa_the_Plant>",
        app.strings.separator,
        "For more information, use `$help` or go to https://github.com/FelixRilling/lisa-bot.",
        "If you have further questions or want to report a bug, message my Creator: NobodyRocks#5051.",
        app.strings.separator,
        "http://na.square-enix.com/sites/default/files/imagecache/post-image/image_gallery/744/b119ee60fc88c9489e713e78ddd8ad32.png"
    ].join("\n");
};

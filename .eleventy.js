module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/styles/*.css");
    eleventyConfig.addPassthroughCopy("assets/images/*.svg");
    eleventyConfig.addPassthroughCopy("assets/images/*.jpg");
    eleventyConfig.addPassthroughCopy("assets/images/*.png");

    return {
        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
            layouts: "_layouts"
        }
    }
};

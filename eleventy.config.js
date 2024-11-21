export default function (eleventyConfig) {
  // Copy the images into _site/img
  // the css will be compiled by SASS
  eleventyConfig.addPassthroughCopy({
    "./public/img": "/",
  });

  // Chhh
  eleventyConfig.setQuietMode(true);

  // Return your Object options:
  return {
    dir: {
      input: "content", // Here will live the actual pages & articles
      includes: "../_includes", // The layouts & components folder
      data: "../_data", // The json or js data files for the  templates
      output: "_site", // The output directory for your compiled templates
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}

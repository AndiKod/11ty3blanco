// ESM syntax (e.g. `export default`) is supported in Eleventy v3.0+
export default function(eleventyConfig) {


  // Copy `img/` to `_site/subfolder/img`
	eleventyConfig.addPassthroughCopy("input/css/");
	eleventyConfig.addPassthroughCopy("input/js/");
  // Watch for changes in `src/scss/`
  eleventyConfig.addWatchTarget("./input/css/");
  eleventyConfig.addWatchTarget("./input/js/");

  // Return your Object options:
  return {
    dir: {
      input: "input",
      output: "_site",
      layouts: "inc/layout",
      includes: "inc/partial"
    }
  }

  
  

};
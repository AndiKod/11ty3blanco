export default function(eleventyConfig) {

  // Copy `img/` to `_site/subfolder/img`
	eleventyConfig.addPassthroughCopy({
		"./assets/": "/"
	});

  // Return your Object options:
  return {
    dir: {
      input: "content",
      output: "_site",
      layouts: "../includes/layouts",
      includes: "../includes/partials"
    }
  }

};
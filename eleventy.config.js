export default function(eleventyConfig) {

  // Copy the assets folder content to the _site folder
	eleventyConfig.addPassthroughCopy({
		"./src/assets/": "/"
	});

  // Return your Object options:
  return {
    dir: {
      input: "src", // The input directory for your templates, aka Root
      output: "_site", // The output directory for your compiled templates
      layouts: "../includes/layouts", // The directory for your layouts
      includes: "../includes/partials" // The directory for your includes
    }
  }

};

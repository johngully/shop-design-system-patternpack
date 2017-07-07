module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    patternpack: {
      options: {
        patternStructure: [
          { "name": "Base", "path": "base" },
          { "name": "Components", "path": "components" },
          { "name": "Pages", "path": "pages" }
        ]
      },
      run: {},
      build: {},
      release: {},
      "release-major": {},
      "release-minor": {},
      "release-patch": {}
    }
  });

  grunt.loadNpmTasks("patternpack");

  grunt.registerTask("run", ["patternpack:run"]);
  grunt.registerTask("build", ["patternpack:build"]);
  grunt.registerTask("release", ["patternpack:release"]);
  grunt.registerTask("release-major", ["patternpack:release-major"]);
  grunt.registerTask("release-minor", ["patternpack:release-minor"]);
  grunt.registerTask("release-patch", ["patternpack:release-patch"]);
  grunt.registerTask("default", ["run"]);
};

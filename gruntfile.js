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
    },
    exec: {
      deploy: "node_modules/.bin/gh-pages -d dist/pattern-library",
      push: "git push --follow-tags"
    }
  });

  grunt.loadNpmTasks("patternpack");
  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("run", ["patternpack:run"]);
  grunt.registerTask("build", ["patternpack:build"]);
  grunt.registerTask("release", ["patternpack:release"]);
  grunt.registerTask("release-major", ["patternpack:release-major"]);
  grunt.registerTask("release-minor", ["patternpack:release-minor"]);
  grunt.registerTask("release-patch", ["patternpack:release-patch"]);

  grunt.registerTask("deploy", ["exec:deploy"]);
  grunt.registerTask("publish", ["exec:push", "exec:deploy"]);

  grunt.registerTask("default", ["run"]);
};

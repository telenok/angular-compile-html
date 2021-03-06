module.exports = (grunt) => {

    //node node_modules/protractor/bin/webdriver-manager update
    const builder = require('corifeus-builder-angular');

    const loader = new builder.loader(grunt);
    loader.angular(builder.config.folder.test.angularWebpack.root);

    const copyReplace = grunt.config.get('cory-replace');
    copyReplace.header = {
        header: true,
        replace: `
[![Build Status](https://travis-ci.org/patrikx3/\${git.repo}.svg?branch=master)](https://travis-ci.org/patrikx3/\${git.repo})
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/\${git.repo}/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/\${git.repo}/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/\${git.repo}/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/\${git.repo}/?branch=master)  [![Trello](https://img.shields.io/badge/Trello-p3x-026aa7.svg)](https://trello.com/b/gqKHzZGy/p3x)

[![NPM](https://nodei.co/npm/\${pkg.name}.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/\${pkg.name}/)
`,
        files: [
            '*.md'
        ]
    };
    grunt.config.set('cory-replace', copyReplace );

    grunt.registerTask('run', builder.config.task.run.angular);

    grunt.registerTask('default',  builder.config.task.build.angular);

    grunt.registerTask('coverage', 'karma:cory-angular');

   //cori-test:angular-protractor
   // cori-test:angular-karma


}
module.exports = function (gulp, plugins) {

    /****** Utils & Default Tasks ******/
    gulp.task('default', displayHelp);
    gulp.task('help', displayHelp);
    gulp.task('man', displayHelp);

    function displayHelp () {
        plugins.utils.log(plugins.utils.colors.white.bold("######   Gulp Help"));

        /** Config Tasks **/
        plugins.utils.log(plugins.utils.colors.white.bold("## Config Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("config:tiapp --<dev|rc|release>"));
        plugins.utils.log("  Generate a new TiApp.xml consistent with the specified configuration in the config.JSON"+
            " file related to the current project.\n");

        /** Test Tasks **/
        plugins.utils.log(plugins.utils.colors.white.bold("## Test Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("test:jasmine [--<ios|android>]"));
        plugins.utils.log("  Launch jasmine test set.\n");

        plugins.utils.log("  " + plugins.utils.colors.yellow("test:calabash [--<ios|android>]"));
        plugins.utils.log("  Launch calabash test set.\n");

        /** Install task **/
        plugins.utils.log(plugins.utils.colors.white.bold("## Install Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("install:android_sdk"));
        plugins.utils.log("  Install and configure android sdk; PATH, ANDROID_HOME and ANDROID_SDK should have been set.\n");

        /** Build Tasks*/
        plugins.utils.log(plugins.utils.colors.white.bold("## Build Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("build:release"));
        plugins.utils.log("  build the app for the defined platform and package it to a dist folder");
        plugins.utils.log("  " + plugins.utils.colors.yellow("build:calabash"));
        plugins.utils.log("  build the app in order to be used with calabash tests");
        plugins.utils.log("  " + plugins.utils.colors.yellow("build:appify"));
        plugins.utils.log("  build the app with tishadow packaged\n");

        /** Start task*/
        plugins.utils.log(plugins.utils.colors.white.bold("## Start Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("start:emulator"));
        plugins.utils.log("  Run, wait for and unlock the android emulator.\n");

        /** Clean Tasks **/
        plugins.utils.log(plugins.utils.colors.white.bold("## Clean Tasks"));
        plugins.utils.log("  " + plugins.utils.colors.yellow("clean"));
        plugins.utils.log("  Clean the environment and kill all Ti processus");
    }
};

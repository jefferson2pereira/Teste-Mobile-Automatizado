export const config = {

    //  runner: 'local',
    //port: 4723,

    user: 'oauth-jeffersonebacteste-67157',
    key: '571bfa73-ddb0-46a1-9da6-7219c5a4eed0',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities:
        [
            //            {
            //                platformName: 'Android',
            //                'appium:deviceName': 'phone_ebac',
            //                'appium:platformVersion': '9.0',
            //                'appium:automationName': 'UiAutomator2',
            //                'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            //                'appium:appWaitActivity': '.MainActivity',
            //                'appium:disableIDlocatorAutocompletion': true
            //            }
            {
                platformName: 'Android',
                'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
                'appium:deviceName': 'Samsung Galaxy S9 HD GoogleAPI Emulator',
                'appium:platformVersion': '9.0',
                'appium:automationName': 'UiAutomator2',
                'appium:disableIDlocatorAutocompletion': true,
                'sauce:options': {
                    appiumVersion: '2.11.0',
                    build: 'appium-build-teste-ebacshop',
                    name: 'ebac teste',
                    deviceOrientation: 'PORTRAIT',

                },

                'appium:disableIDlocatorAutocompletion': true,
            }
        ],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot();

    },

}

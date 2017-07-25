export const DEV_DEPENDENCY = 'dev dependency';
export const RUN_TIME_DEPENDENCY = 'run time dependency';
export const dependencies = {
    React: {
        general: [{name: 'react', depType: RUN_TIME_DEPENDENCY},
            {name: 'react-dom', depType: RUN_TIME_DEPENDENCY},
            {name: 'react-router@3.0.2', depType: RUN_TIME_DEPENDENCY},
            {name: 'webpack', depType: RUN_TIME_DEPENDENCY},
            {name: 'webpack-dev-server', depType: DEV_DEPENDENCY},
            {name: 'html-webpack-plugin', depType: DEV_DEPENDENCY},
            {name: 'babel-cli', depType: DEV_DEPENDENCY},
            {name: 'babel-core', depType: DEV_DEPENDENCY},
            {name: 'babel-jest', depType: DEV_DEPENDENCY},
            {name: 'babel-loader', depType: DEV_DEPENDENCY},
            {name: 'babel-preset-es2015', depType: DEV_DEPENDENCY},
            {name: 'babel-preset-react', depType: DEV_DEPENDENCY},
            {name: 'simple-react-form-bootstrap', depType: RUN_TIME_DEPENDENCY},
            {name: 'css-loader', depType: DEV_DEPENDENCY},
            {name: 'less-loader', depType: DEV_DEPENDENCY}

        ],
        unitTest: [
            {name: 'enzyme', depType: DEV_DEPENDENCY},
            {name: 'jest', depType: DEV_DEPENDENCY},
            {name: 'react-addons-test-utils', depType: DEV_DEPENDENCY},
            {name: 'react-test-renderer', depType: DEV_DEPENDENCY}
        ],
        e2e: [
            {name: 'chromedriver', depType: DEV_DEPENDENCY},
            {name: 'nightwatch', depType: DEV_DEPENDENCY},
            {name: 'selenium-server', depType: DEV_DEPENDENCY},
            {name: 'style-loader', depType: DEV_DEPENDENCY},
        ]
    }
};
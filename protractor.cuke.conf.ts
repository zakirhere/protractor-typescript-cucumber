/**
 * Created by hussaiz on 3/19/17.
 */
import { Config } from 'protractor';

export let config: Config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: [ '../spec.js' ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};
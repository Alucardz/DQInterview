import { Injectable } from '@angular/core';
// Declare the console as an ambient value so that TypeScript doesn't complain.
declare var console: any;

// Import the application components and services.

import { Toast, ToastController } from 'ionic-angular';
import { ILogger } from "./ILogger";

@Injectable()
// I log values to the ambient console object.
export class IonicToasterService implements ILogger {
    private errorToast: Toast;
    private infoToast: Toast;
    constructor(public tc: ToastController) {

    }

    public assert(...args: any[]): void {
        (console && console.assert) && console.assert(...args);
    }
    public error(...args: any[]): void {
        this.errorToast = this.tc.create({
            message: 'Error communicating with server: ' + args[0],
            duration: 3000,
            position: 'top',
            cssClass: 'error'
        });
        this.errorToast.present();
    }
    public group(...args: any[]): void {
        (console && console.group) && console.group(...args);
    }
    public groupEnd(...args: any[]): void {
        (console && console.groupEnd) && console.groupEnd(...args);
    }
    public info(...args: any[]): void {
        this.infoToast = this.tc.create({
            message: 'Success!',
            duration: 3000,
            position: 'top',
            cssClass: 'info'
        });
        this.infoToast.present();
    }
    public log(...args: any[]): void {
        (console && console.log) && console.log(...args);
    }
    public warn(...args: any[]): void {
        (console && console.warn) && console.warn(...args);
    }
}
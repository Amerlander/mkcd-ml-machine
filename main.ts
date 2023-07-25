//% color=190 weight=100 icon="\uf121" block="MLMachine"
namespace MLMachine {
    //% block
    export function setup(): void {
        bluetooth.setTransmitPower(7);
        bluetooth.startUartService();
        bluetooth.startAccelerometerService();
        bluetooth.startButtonService();
        bluetooth.startIOPinService();
        bluetooth.startLEDService();
    }
}

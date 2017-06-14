# Grove Two Sound

A PXT packet for Seeed Studio Grove Two Sound

## Basic usage

```blocks
// Create a module driver, specify the i2c address
let sound = Grove_Two_Sound.create(GROVE_TWO_SOUND.DEF_I2C_ADDR);

// Get sound event vaule and display
while(true)
{
    sound.run();
    if(sound.is(SOUND_EVENT_TYPE.LESS_THAN_THD_0))basic.showString("LESS");
    else if(sound.is(SOUND_EVENT_TYPE.AMONG_THD_0_AND_THD_1))basic.showString("AMONG");
    else if(sound.is(SOUND_EVENT_TYPE.MORE_THAN_THD_1))basic.showString("MORE");
}
```
More operation

Use ``getDeviceVID()`` to get vendor ID of device.

Use ``getDevicePID()`` to get product ID of device.

Use ``changeDeviceAddress()`` to change i2c address of device.

Use ``defaultDeviceAddress()`` to restore the i2c address of device to default.

Use ``turnOnLedFlash()`` to trun on the indicator LED flash mode.

Use ``turnOffLedFlash()`` to trun off the indicator LED flash mode.

Use ``enableAutoSleep()`` to enable device auto sleep mode.

Use ``disableAutoSleep()`` to disable device auto sleep mode.

Use ``getEventStatus()`` to get the sound event status.

Use ``getSoundValue()`` to get the sound sensor value.

Use ``setThreshold0()`` to set the sound threshold level 0.

Use ``setThreshold1()`` to set the sound threshold level 1.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


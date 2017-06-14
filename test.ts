{
    let sound = Grove_Two_Sound.create(GROVE_TWO_SOUND.DEF_I2C_ADDR);
    
    sound.turnOnLedFlash();
    basic.pause(3000);
    sound.turnOffLedFlash();
    
    while(true)
    {
        sound.run();
        if(sound.is(SOUND_EVENT_TYPE.LESS_THAN_THD_0))basic.showString("LESS");
        else if(sound.is(SOUND_EVENT_TYPE.AMONG_THD_0_AND_THD_1))basic.showString("AMONG");
        else if(sound.is(SOUND_EVENT_TYPE.MORE_THAN_THD_1))basic.showString("MORE");
        
        // let value = sound.getSoundValue();
        // basic.showNumber(value);
    }
}
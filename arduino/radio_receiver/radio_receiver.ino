/*
  Simple example for receiving
  
  https://github.com/sui77/rc-switch/
*/

#include <RCSwitch.h>
#include <ModbusRtu.h>


// Modbus
Modbus slave(10, 0, 10); // id 10, pin 10
uint16_t au16data[1] = { 0 }; // , 0, 0, 0, 0, 0, 0, 0 };
uint16_t *reg0 = au16data;      // outbound


RCSwitch mySwitch = RCSwitch();

unsigned long prev_mills = 0;


void setup() 
{
  slave.begin(9600);
  Serial.begin(9600);
  mySwitch.enableReceive(0);  // Receiver on interrupt 0 => that is pin #2
  Serial.println("init");
}

void loop() 
{
  slave.poll(au16data, 1);

  if(*reg0 && millis() - prev_mills > 500)
  {
    Serial.println("Clean code");
     *reg0 = 0;
  }

  

  
  if (mySwitch.available()) 
  {
    
    int value = mySwitch.getReceivedValue();
    
    if (value == 0) {
      Serial.println("Unknown encoding");
    } else {

      uint16_t v = (uint16_t)mySwitch.getReceivedValue();
      *reg0 = v;
      prev_mills = millis();
       Serial.print("Received ");
       Serial.println(v);
//      Serial.print( mySwitch.getReceivedValue() );
//      Serial.print(" / ");
//      Serial.print( mySwitch.getReceivedBitlength() );
//      Serial.print("bit ");
//      Serial.print("Protocol: ");
//      Serial.println( mySwitch.getReceivedProtocol() );
    }

    mySwitch.resetAvailable();
  }
}

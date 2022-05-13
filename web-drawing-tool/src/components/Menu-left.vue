<template>
  <v-container>
      <v-text-field
        v-model = "search"
        outlined
        label = "검색"
        background-color = "#FFFFFF"
        type = "text"
        append-icon = "mdi-magnify"
      ></v-text-field>
      <v-list>
        <v-list-group 
          v-for = "item in items" :key = "item.title" 
          v-model = "item.active" :prepend-icon = "item.action"
          no-action
          >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text = "item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for = "child in item.items" :key = "child.image">
            <img :src = "child.image">
          </v-list-item>

          <!-- <v-list-item 
            v-for = "child in item.items" :key = "child.title">
            <v-img :src ="child.title"></v-img>
             <v-list-item-content>
              <v-list-item-title v-text = "child.title"></v-list-item-title>
             </v-list-item-content> <class = "image_size">
          </v-list-item> -->

        </v-list-group>
      </v-list>
  </v-container>
</template>

<script>

// import {fabric} from 'fabric';

export default {

  data: () => ({
    items: [
      {
        action: "mdi-play",
        title: "Wire",
      },
      {
        action: "mdi-play",
        title: "Power Supply",
        items: [
          { image: require("@/assets/전기설계심볼/Power_Supply/AC_Supply.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/BatteryStack.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/DC_Supply.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEC_.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEEE_.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEEE_2.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_obsolete_.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/MonoCell_Battery.svg") },
          { image: require("@/assets/전기설계심볼/Power_Supply/MutiCell_Battery_Tapped.svg") },
        ],
      },
      {
        action: "mdi-play",
        title: "Transistors",
        items: [
          { image: require("@/assets/전기설계심볼/transistors/BJT_NPN_.svg") },
          { image: require("@/assets/전기설계심볼/transistors/BJT_PNP_.svg") },
          { image: require("@/assets/전기설계심볼/transistors/Dual_Gate_MOSFET_N_.svg") },
          { image: require("@/assets/전기설계심볼/transistors/Dual_Gate_MOSFET_P_.svg") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_N_.svg") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_No_Bulk(N).svg") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_No_Bulk(P).svg") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET(P).svg") },
          { image: require("@/assets/전기설계심볼/transistors/N_Channel_JFET.svg") },
          { image: require("@/assets/전기설계심볼/transistors/NMOS.svg") },
          { image: require("@/assets/전기설계심볼/transistors/P_Channel_JFET.svg") },
          { image: require("@/assets/전기설계심볼/transistors/PMOS.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Meters",
        items: [
          { image: require("@/assets/전기설계심볼/Meters/AMMeter.svg") },
          { image: require("@/assets/전기설계심볼/Meters/GalvanoMeter.svg") },
          { image: require("@/assets/전기설계심볼/Meters/Oscilloscope.svg") },
          { image: require("@/assets/전기설계심볼/Meters/VoltMeter.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Diodes",
        items: [
          { image: require("@/assets/전기설계심볼/Diodes/Diode.svg") },
          { image: require("@/assets/전기설계심볼/Diodes/LED_Diode.svg") },
          { image: require("@/assets/전기설계심볼/Diodes/Photo_Diode.svg") },
          { image: require("@/assets/전기설계심볼/Diodes/Schottky_Diode.svg") },
          { image: require("@/assets/전기설계심볼/Diodes/Tunnel_Diode.svg") },
          { image: require("@/assets/전기설계심볼/Diodes/Zener_Diode.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Capacitors",
        items: [
          { image: require("@/assets/전기설계심볼/Capacitors/Capacitor_US__1_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Capacitor_US__2_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Electrolytic_Capacitor_US__1_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Electrolytic_Capacitor_US__2_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Trmmer_Variable_Capacitor_US__1_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Trimmer_Variable_Capacitor_US__2_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Tunning_Variable_Capacitor_US__1_.svg") },
          { image: require("@/assets/전기설계심볼/Capacitors/Tunning_Variable_Capacitor_US__2_.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Resistors",
        items: [
          { image: require("@/assets/전기설계심볼/Resistors/Potentiometer_Resistor(1).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/Potentiometer_Resistor(2).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/Resistor(1).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/Resistor(2).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/RHEOSTAT_Resistor(1).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/RHEOSTAT_Resistor(2).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/Trimmer_Resistor(1).svg") },
          { image: require("@/assets/전기설계심볼/Resistors/Trimmer_Resistor(2).svg") },          
        ]
      },
      {
        action: "mdi-play",
        title: "Switches",
        items: [
          { image: require("@/assets/전기설계심볼/Switches/Limit_Switch.svg") },
          { image: require("@/assets/전기설계심볼/Switches/PushButton_NC.svg") },
          { image: require("@/assets/전기설계심볼/Switches/PushButton_NO.svg") },
          { image: require("@/assets/전기설계심볼/Switches/SPDT.svg") },
          { image: require("@/assets/전기설계심볼/Switches/Switch_Disconnector.svg") },
          { image: require("@/assets/전기설계심볼/Switches/Temperature_Switch.svg") },
          { image: require("@/assets/전기설계심볼/Switches/Thermostat.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Output Device",
        items: [
          { image: require("@/assets/전기설계심볼/Output_Deivices/Bell.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Buzzer.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Inductor.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Lamp.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Motor.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Piezo_Sounder.svg") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Speaker.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Input Device",
        items: [
          { image: require("@/assets/전기설계심볼/Input_Deivices/Electret_Microphone.svg") },
          { image: require("@/assets/전기설계심볼/Input_Deivices/Microphone.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Miscellaneous",
        items: [
          { image: require("@/assets/전기설계심볼/Miscellaneous/Antenae.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Dual_In-Line_IC.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Operational_AMP_1_.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Operational_AMP_2_.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Overcurrent_Relay_125-400A.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Quad_Flat_Package_IC.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Transformer_IronCore__1_.svg") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Transformer_IronCore__2_.svg") },
        ]
      },
      {
        action: "mdi-play",
        title: "Logic Gates",
        items: [
          { image: require("@/assets/전기설계심볼/Logic_Gates/AND.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/Buffer.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/D-type_Filp_Flop.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/D-type_RS_Filp_Flop.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/Inverter.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/NAND.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/NOR.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/OR.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/XNOR.svg") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/XOR.svg") },
        ]
      },
    ],
  }),
  

};
</script>

<style scoped>
div {
  flex: 1;
  background-color: #EEEEEE;
}

/* .image_size {
  width: 100px;
  height: 100px;
} */

</style>>
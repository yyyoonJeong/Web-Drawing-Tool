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
          { image: require("@/assets/전기설계심볼/Power_Supply/AC_Supply.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/BatteryStack.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/DC_Supply.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEC_.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEEE_.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_IEEE_2.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/Fuse_obsolete_.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/MonoCell_Battery.png") },
          { image: require("@/assets/전기설계심볼/Power_Supply/MutiCell_Battery_Tapped.png") },
        ],
      },
      {
        action: "mdi-play",
        title: "Transistors",
        items: [
          { image: require("@/assets/전기설계심볼/transistors/BJT_NPN_.png") },
          { image: require("@/assets/전기설계심볼/transistors/BJT_PNP_.png") },
          { image: require("@/assets/전기설계심볼/transistors/Dual_Gate_MOSFET_N_.png") },
          { image: require("@/assets/전기설계심볼/transistors/Dual_Gate_MOSFET_P_.png") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_N_.png") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_No_Bulk(N).png") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET_No_Bulk(P).png") },
          { image: require("@/assets/전기설계심볼/transistors/MOSFET(P).png") },
          { image: require("@/assets/전기설계심볼/transistors/N_Channel_JFET.png") },
          { image: require("@/assets/전기설계심볼/transistors/NMOS.png") },
          { image: require("@/assets/전기설계심볼/transistors/P_Channel_JFET.png") },
          { image: require("@/assets/전기설계심볼/transistors/PMOS.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Meters",
        items: [
          { image: require("@/assets/전기설계심볼/Meters/AMMeter.png") },
          { image: require("@/assets/전기설계심볼/Meters/GalvanoMeter.png") },
          { image: require("@/assets/전기설계심볼/Meters/Oscilloscope.png") },
          { image: require("@/assets/전기설계심볼/Meters/VoltMeter.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Diodes",
        items: [
          { image: require("@/assets/전기설계심볼/Diodes/Diode.png") },
          { image: require("@/assets/전기설계심볼/Diodes/LED_Diode.png") },
          { image: require("@/assets/전기설계심볼/Diodes/Photo_Diode.png") },
          { image: require("@/assets/전기설계심볼/Diodes/Schottky_Diode.png") },
          { image: require("@/assets/전기설계심볼/Diodes/Tunnel_Diode.png") },
          { image: require("@/assets/전기설계심볼/Diodes/Zener_Diode.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Capacitors",
        items: [
          { image: require("@/assets/전기설계심볼/Capacitors/Capacitor_US__1_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Capacitor_US__2_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Electrolytic_Capacitor_US__1_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Electrolytic_Capacitor_US__2_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Trmmer_Variable_Capacitor_US__1_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Trimmer_Variable_Capacitor_US__2_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Tunning_Variable_Capacitor_US__1_.png") },
          { image: require("@/assets/전기설계심볼/Capacitors/Tunning_Variable_Capacitor_US__2_.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Resistors",
        items: [
          { image: require("@/assets/전기설계심볼/Resistors/Potentiometer_Resistor(1).png") },
          { image: require("@/assets/전기설계심볼/Resistors/Potentiometer_Resistor(2).png") },
          { image: require("@/assets/전기설계심볼/Resistors/Resistor(1).png") },
          { image: require("@/assets/전기설계심볼/Resistors/Resistor(2).png") },
          { image: require("@/assets/전기설계심볼/Resistors/RHEOSTAT_Resistor(1).png") },
          { image: require("@/assets/전기설계심볼/Resistors/RHEOSTAT_Resistor(2).png") },
          { image: require("@/assets/전기설계심볼/Resistors/Trimmer_Resistor(1).png") },
          { image: require("@/assets/전기설계심볼/Resistors/Trimmer_Resistor(2).png") },          
        ]
      },
      {
        action: "mdi-play",
        title: "Switches",
        items: [
          { image: require("@/assets/전기설계심볼/Switches/Limit_Switch.png") },
          { image: require("@/assets/전기설계심볼/Switches/PushButton_NC.png") },
          { image: require("@/assets/전기설계심볼/Switches/PushButton_NO.png") },
          { image: require("@/assets/전기설계심볼/Switches/SPDT.png") },
          { image: require("@/assets/전기설계심볼/Switches/Switch_Disconnector.png") },
          { image: require("@/assets/전기설계심볼/Switches/Temperature_Switch.png") },
          { image: require("@/assets/전기설계심볼/Switches/Thermostat.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Output Device",
        items: [
          { image: require("@/assets/전기설계심볼/Output_Deivices/Bell.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Buzzer.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Inductor.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Lamp.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Motor.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Piezo_Sounder.png") },
          { image: require("@/assets/전기설계심볼/Output_Deivices/Speaker.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Input Device",
        items: [
          { image: require("@/assets/전기설계심볼/Input_Deivices/Electret_Microphone.png") },
          { image: require("@/assets/전기설계심볼/Input_Deivices/Microphone.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Miscellaneous",
        items: [
          { image: require("@/assets/전기설계심볼/Miscellaneous/Antenae.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Dual_In-Line_IC.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Operational_AMP_1_.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Operational_AMP_2_.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Overcurrent_Relay_125-400A.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Quad_Flat_Package_IC.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Transformer_IronCore__1_.png") },
          { image: require("@/assets/전기설계심볼/Miscellaneous/Transformer_IronCore__2_.png") },
        ]
      },
      {
        action: "mdi-play",
        title: "Logic Gates",
        items: [
          { image: require("@/assets/전기설계심볼/Logic_Gates/AND.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/Buffer.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/D-type_Filp_Flop.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/D-type_RS_Filp_Flop.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/Inverter.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/NAND.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/NOR.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/OR.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/XNOR.png") },
          { image: require("@/assets/전기설계심볼/Logic_Gates/XOR.png") },
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
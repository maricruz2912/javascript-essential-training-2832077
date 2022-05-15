/**
 * Create a car object.
 */
const carro = {
    name: "electrics vehicles as you want",
    mark: "nissan",
    year: "2023",
    battery_characters:{
        capacityCharge: 50,
        capacityDischargue:50,
    },
    soc_battery:false,
    socBateries: function(socStatus){
        this.soc_battery = socStatus;
    },
    newStatusBatery: function (capacityOfCharge,capacityOfDischarge){
        this.battery_characters.capacityCharge= capacityOfCharge;
        this.battery_characters.capacityDischargue=capacityOfDischarge
    },
};

console.log(carro);
console.log("the battery status is:", carro.battery_characters.capacityCharge);
console.log("the carro mark is:", carro.mark);
var statusDelaLIB = "soc_battery";
console.log("the battery status is:", carro[statusDelaLIB]);


const taza = {
    nombre_taza: "Lataza que quieras",
    volumen: 40,
    color: "blanco con anaranjado",
    stock: 2,
    propiedades:{
        temperature_resistance: 50,
        material: "ceramic",
    },
    heat_water: true,
    calentarAgua:function(resistenciaTermica, tipoMaterial){
        this.temperature_resistance=resistenciaTermica;
        this.material=tipoMaterial;
    },
    newPropiedades: function (temPresit,materialNovedso){
        this.propiedades.temperature_resistance=temPresit;
        this.propiedades.material=materialNovedso;
    },

};

console.log(taza);
console.log("before temperature:", taza.propiedades.temperature_resistance);

taza.newPropiedades(60,"barro");
console.log("after temperature:", taza.propiedades.temperature_resistance);

taza.calentarAgua(100,"cerámica");
console.log(taza.temperature_resistance, taza.material);
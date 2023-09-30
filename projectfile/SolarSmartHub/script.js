// Function to calculate and display solar information
function calculateSolarInfo() {
    // Get user input values
    const monthlyElectricityBill = parseFloat(document.getElementById("monthlyElectricityBill").value);
    const kWhUsedInMonth = parseFloat(document.getElementById("kWhUsedInMonth").value);
    const ratePerKWh = parseFloat(document.getElementById("ratePerKWh").value);

    // Calculate average daily electricity usage (kWh)
    const dailyElectricityUsage = kWhUsedInMonth / 30;

    // Calculate recommended solar panel size (kW) with rounding
    let solarPanelSize = dailyElectricityUsage / 4;

    // Apply rounding rule: Round up if decimal part >= 0.5, otherwise round down
    const decimalPart = solarPanelSize - Math.floor(solarPanelSize);
    if (decimalPart >= 0.5) {
        solarPanelSize = Math.ceil(solarPanelSize);
    } else {
        solarPanelSize = Math.floor(solarPanelSize);
    }

    // Calculate monthly solar generation (kWh)
    const monthlySolarGeneration = solarPanelSize * 4 * 30;

    // Calculate monthly saving (Rs)
    const monthlySaving = monthlySolarGeneration * ratePerKWh;

    // Calculate payback period (years)
    const installationCosts = {
        1: 104000, // Replace with actual cost
        2: 191028, // Replace with actual cost
        3: 241879,
        4: 227000,
        5: 501799,
        6: 747499,
        7: 712399,
        8: 625000,
        9: 495000,
        10: 275000,
    };
    
    
    const paybackPeriod = installationCosts[solarPanelSize] / monthlySaving / 12;

    // Calculate carbon emission reduction (kg) and equivalent trees planted
    const emissionFactor = 0.85;
    const carbonEmissionReduction = monthlySolarGeneration * emissionFactor;
    
    // Apply rounding rule for equivalent trees planted
    let equivalentTreesPlanted = carbonEmissionReduction / (25 / 12);
    const decimalPartTrees = equivalentTreesPlanted - Math.floor(equivalentTreesPlanted);
    if (decimalPartTrees >= 0.5) {
        equivalentTreesPlanted = Math.ceil(equivalentTreesPlanted);
    } else {
        equivalentTreesPlanted = Math.floor(equivalentTreesPlanted);
    }

    // Display results
    document.getElementById("dailyElectricityUsage").textContent = dailyElectricityUsage.toFixed(2);
    document.getElementById("solarPanelSize").textContent = solarPanelSize.toFixed(2);
    document.getElementById("monthlySolarGeneration").textContent = monthlySolarGeneration.toFixed(2);
    document.getElementById("monthlySaving").textContent = monthlySaving.toFixed(2);
    document.getElementById("paybackPeriod").textContent = paybackPeriod.toFixed(2);
    document.getElementById("carbonEmissionReduction").textContent = carbonEmissionReduction.toFixed(2);
    document.getElementById("equivalentTreesPlanted").textContent = equivalentTreesPlanted.toFixed(2);
    if(solarPanelSize==1){
    alert("description: Specification of 1kW Off-Grid Solar System");
    alert("solarSystem: 1kWp");
    alert("solarPanelWatt: 270");
    alert("solarPanelQty: 4");
    alert("solarBattery: 2 x 150 AH");
    alert("solarInverter: 1 x 1500VA");
    alert("structure: GI (4 Panels)");
    alert("dcWireMeter: 40 x 4 SQM");
    alert("connectors: 4 x Y Connector");
    alert("accessories: Fasteners, Cable Tie etc");
    alert("avgGeneration: 1440 units per year");
    alert("spaceRequired: 8 Square Meter");
    alert("price: Rs. 104,000.00");
    alert("moreDetailsLink:https://kenbrooksolar.com/product/1kw-luminous-off-grid-solar-system");
}
if(solarPanelSize==2){
    alert("description:UTL 2kW Off Grid Solar System : Complete System Price");
    alert("solarSystem: 2kW");
    alert("solarPanelQuantity: 6nos");
    alert("solarInverter: 2.5 kVA solar inverter");
    alert("solarBattery: 4nos");
    alert("accessories: Fasteners,Cable Tie,Crimping Tool,Earthing Kit,Lighting Arrestor");
    alert("systemWarranty: 25 years");
    alert("mc4Connector: 2 Pair");
    alert("dcWire: 30mtr");
    alert("acWire: 20mtr");
    alert("spaceRequired: 200sq feet");
    alert("avgGeneration: 8 units per day");
    alert("price: ₹ 191,028.00");
    alert("moreDetailsLink: https://kenbrooksolar.com/product/utl-2kw-off-grid-solar-system");
}
if(solarPanelSize==3){
    alert("description: UTL 3kW Off Grid Solar System");
    alert("category: Off-Grid Systems");
    alert("tag: 3kW Solar Systems");
    alert("solarSystemCapacity: 3kW");
    alert("solarPanelQuantity: 330watt x 9nos");
    alert("solarInverter: 2.5 kVA solar inverter");
    alert("solarBattery: 4nos");
    alert("accessories: Fasteners,Cable Tie,Crimping Tool,Earthing Kit,Lighting Arrestor");
    alert("systemWarranty: 25 years");
    alert("mc4Connector: 2 Pair");
    alert("dcWire: 120mtr");
    alert("acWire: 130mtr");
    alert("spaceRequired: 200sq feet");
    alert("avgGeneration: 12 units per day");
    alert("price: Rs. 241,879.00");
    alert("moreDetailsLink: https://kenbrooksolar.com/product/utl-3kw-off-grid-solar-system");
}
if(solarPanelSize==4){
    alert("mpptInverterPrice: Rs. 50,000");
    alert("batteryPrice: Rs. 40,000");
    alert("polySolarPanelPrice: Rs. 112,000");
    alert("extraCost: Rs. 25,000");
    alert("totalCost: Rs. 2,27,000");
    alert("moreDetailsLink: https://www.solarenergyforever.in/en/utl-4kw-solar-system-price/");
}
if(solarPanelSize==5){
    alert("description: 5kW Luminous Solar System (5.5kVA) : Complete System");
    alert("solarPanel: 15 x 335 watt");
    alert("solarBattery: 8 x 150 AH");
    alert("solarInverter: 1 x 5.5kVA");
    alert("mountingStructure: GI (16 Panels)");
    alert("dcWireMeter: 60 x 4 Sqm");
    alert("connectors: YC & MC4");
    alert("solarBrand: Luminous");
    alert("panelModel: MONO335W24V");
    alert("panelWattage: 335 Watt");
    alert("panelVolt: 24 Volt");
    alert("panelType: Monocrystalline");
    alert("panelWarranty: 25 Years");
    alert("comboModel: CRUZESHINE9650");
    alert("comboRating: 5500VA");
    alert("comboVolt: 96V");
    alert("comboInverterType: Sine Wave");
    alert("comboWarranty: 2 Years");
    alert("comboPrice: Rs. 501,799.00");
    alert("moreDetailsLink: https://kenbrooksolar.com/product/5kw-luminous-solar-off-grid-complete-system");
}
if(solarPanelSize==6){
    alert("description: 6kW Luminous Solar System (Mppt PCU) : Complete System");
    alert("solarPanel: 18 x 335 watts");
    alert("solarBattery: 8 x 150 AH");
    alert("solarInverter: 1 x 6kW");
    alert("mountingStructure: GI (16 Panels)");
    alert("dcWireMeter: 60 x 4 Sqm");
    alert("connectors: YC & MC4");
    alert("panelBrand: Luminous Solar");
    alert("panelModel: Lum-335W");
    alert("panelRating: 335 Watt");
    alert("panelVolt: 24 Volt");
    alert("panelType: Mono-Crystalline");
    alert("panelWarranty: 25 Years");
    alert("batteryBrand: Luminous");
    alert("batteryModel: LPT12150H");
    alert("batteryRating: 150 AH");
    alert(" batteryVolt: 12 Volt");
    alert("batteryType: Lead Acid TT");
    alert("batteryWarranty: 5 Years");
    alert("inverterBrand: Luminous");
    alert("inverterModel: PCUNXT6kW");
    alert("inverterRating: 5000 watts (5kW)");
    alert("inverterVolt: 96V");
    alert("inverterType: Sine Wave");
    alert("inverterWarranty: 2 Years");
    alert("inverterPrice: Rs. 747,499.00");
    alert("moreDetailsLink: https://kenbrooksolar.com/product/6kw-luminous-solar-off-grid-complete-system-mppt-pcu");
}
if(solarPanelSize==7){
    alert("description: 7.5kW Luminous Solar System : Complete Power Plant details");
    alert("solarPanel: 20 x 335 watts");
    alert("solarBattery: 10 x 150 AH");
    alert("solarInverter: 1 x 7.5kVA");
    alert("mountingStructure: GI (20 Panels)");
    alert("dcWireMeter: 80 x 4 Sqm");
    alert("connectors: YC & MC4");
    alert("panelBrand: Luminous Solar");
    alert("panelModel: MONO335W24V");
    alert("panelWattage: 335 Watts");
    alert("panelVolt: 24 Volt");
    alert("panelWarranty: 25 Years");
    alert("batteryBrand: Luminous");
    alert("batteryModel: LPTT12150H");
    alert("batteryRating: 150 AH");
    alert("batteryVolt: 12 Volt");
    alert("batteryType: Lead Acid TT");
    alert("batteryWarranty: 5 Years");
    alert("inverterBrand: Luminous");
    alert("inverterModel: CRUZESHINE12050");
    alert("inverterRating: 7500VA");
    alert("inverterVolt: 120V");
    alert("inverterWarranty: 2 Years");
    alert("inverterPrice: Rs. 712,399.00");
    alert("moreDetailsLink: https://kenbrooksolar.com/product/7-5kw-luminous-solar-off-grid-complete-power-plant-details");
}
if(solarPanelSize==8){
    alert("description: Havells Solar 8 kilowatt offgrid solar rooftop system (Poly-crystalline) installation with 1 year AMC");
    alert("capacity: 8 KiloWatt (7800 Watts), 1-Phase");
    alert("systemType: OFF-GRID System");
    alert("panels: Havells, 325 Watt, 24 Panels, Poly Crystalline (7800 Watts)");
    alert("inverter: 8 KW / 120 Volts");
    alert("inverterModel: NSI 8000 PRO");
    alert("batteries: 12 V/150 ah, 10 Numbers");
    alert("batteryType: Solar C-10 battery");
    alert("dcWire: 100 Meters (Max.)");
    alert("dcMcb: 32/40 Amps or as per requirement");
    alert("earthing: 2 GI Earth Electrodes & GI Earthing system");
    alert("subsidy: Not eligible for subsidy");
    alert("warranty: Standard warranty as per manufacturer's terms & conditions");
    alert("installationTime: Within 18 days from the date of payment");
    alert("amc: 2 year AMC (Total 4 Visits in AMC period)");
    alert("price: Rs. 625,000.00");
    alert("moreDetailsLink: https://apollouniverse.com/products/havells-solar-8-kilowatt-offgrid-solar-rooftop-system-poly-crystalline-installation-with-1-year-amc");
}
if(solarPanelSize==9){
    alert("Name:Aether Series AO9kW – On-Grid Solar Power Plant");
    alert("Capacity: 9 kW");
    alert("Description: PV Panel make:Vikram/Waaree/Renewsys/Adani");
    alert("Panel: Polycrystalline Solar Panel –30 nos");
    alert("Wattage: 330/335 WP");
    alert("price: ₹495,000.00");
    alert("more details: https://greenonenergy.in/product/9kw-solar-on-grid-plant-ao9kw-aether-series-polycrystalline/");
}
if(solarPanelSize==10){
    alert("description: Specifications of 10kW Off-Grid Solar System");
    alert("solarPanel: 400 Watt");
    alert("moduleCount: 25 Nos");
    alert("panelType: Mono/Poly");
    alert("efficiency: Up to 19%");
    alert("panelWarranty: 25 Years");
    alert("chargeController: 120V");
    alert("controllerTechnology: MPPT");
    alert("spvMaxVoltage: 450V");
    alert("operatingRange: 272V-449V");
    alert("efficiencyRate: >95%");
    alert("switchingDevice: IGBT");
    alert("ingressProtection: IP-21");
    alert("operationTemperature: 0°C to 50°C");
    alert("solarAccessories: All Standard");
    alert("mountingStructure: 10kW Standard Structure");
    alert("dcJunctionBox: 1 Unit");
    alert("dcCable: 40 Meter");
    alert("acCable: 30 Meter");
    alert("mc4Connectors: 2 Pairs");
    alert("price: Rs. 2,75,000");
    alert("more details: https://kenbrooksolar.com/system/10kw-solar-system-price");
}   
}
const results = document.getElementById("results");
const voltage = document.getElementById("voltage");
const current = document.getElementById("current");
const resistance = document.getElementById("resistance");
const button = document.querySelector("[type=button]");

class OhmsLawCaulculator {
    resistance;
    current;
    voltage;

    constructor(resistance, current, voltage) {
        this.resistance = resistance;
        this.current = current;
        this.voltage = voltage;
    }

    calculation(){
        if (isNaN(this.current)){
            return Math.abs(this.voltage/this.resistance)
            //CURRENT(I)
        }
        
        if (isNaN(this.resistance)){
            return Math.abs(this.voltage/this.current)
            //RESISTANCE(R)
        }
        
        if (isNaN(this.voltage)){
            return  Math.abs(this.current*this.resistance)
            //VOLTAGE(V)
        }
    }

    state() {
        if (isNaN(this.current)){
            return {
                unit: "A",
                name: "Current(I)"
            }
        }
        
        if (isNaN(this.resistance)){
            return {
                unit: "Ω",
                name: "Resistance(R)"
            } 
        }
        
        if (isNaN(this.voltage)){
            return {
                unit: "V",
                name: "Voltage(V)"
            } 
        }

        if (!isNaN(this.current) && !isNaN(this.resistance) && !isNaN(this.voltage)){
            return "INVALID CALCULATION" 
        }

    }
}


button.addEventListener("click", function() { 
    let calc = new OhmsLawCaulculator(parseInt(resistance.value), parseInt(current.value), parseInt(voltage.value))

    if(isNaN(calc.calculation())){
        results.textContent = `Invalid Calculation`
        return;
    }

    results.textContent = `${calc.state().name} = ${calc.calculation()} ${calc.state().unit}`

});
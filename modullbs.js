
import { kgToLbs } from "./kgtolbs.js";

const kgLbs = document.getElementById("kgtolbs");
const result = document.getElementById("result");

kgLbs.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {

        if (kgLbs.value.trim() === "") {
            result.textContent = "Måste vara siffra";
            return;
        }
        
        result.textContent = kgToLbs(kgLbs.value).toFixed(2) + " lbs";
    }
});
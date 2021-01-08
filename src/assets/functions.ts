import animalsVisual from "./animals.json";
import animalsInfo from "./data/animals"

const animalsVisualJson = JSON.parse(JSON.stringify(animalsVisual));
const animalsInfoJson = JSON.parse(JSON.stringify(animalsInfo));

export function clickRedirect(context: any, location: string) {
    context.$router.push(location);
}

export function shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function animalVData(id: string) {
    return animalsVisualJson[id];
}

export function animalIData(id: string) {
    return animalsInfoJson[id];
}

export default ({
})
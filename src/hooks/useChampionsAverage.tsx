import { AbilityName, Character, CharacterAbility } from "../types";
const abilities = [
    'Power',
    'Mobility',
    'Technique',
    'Survivability',
    'Energy'
]

type AbilityMap = {
    [key in AbilityName]?: number;
};
export const useChampionsAverage = (characters: Array<Character>) => {
    const abilitiesArray: Array<Array<CharacterAbility>> = characters.map((c) => c.abilities);
    const abilityScoreArrayMap: Array<AbilityMap> = []

    abilitiesArray.forEach((abilities: Array<CharacterAbility>) => {
        const obj: AbilityMap = {}
        abilities.forEach((ab: CharacterAbility) => {
            obj[ab.abilityName] = ab.abilityScore

        })
        abilityScoreArrayMap.push(obj)
    })

    const sum: AbilityMap = {}
    for (let ability of abilityScoreArrayMap) {
        Object.entries(ability).forEach(([k, v]) => {
            sum[k] = !sum[k] ? v : sum[k] + v

        })
    }
    const average: AbilityMap = {}
    for (let ab of abilities) {
        average[ab] = (sum[ab] / abilityScoreArrayMap.length).toFixed(2)
    }
    return average



}
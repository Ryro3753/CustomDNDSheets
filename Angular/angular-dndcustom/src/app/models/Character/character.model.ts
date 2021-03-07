export interface Character {
    ref : number,
    characterName : string,
    class? : string,
    level? : string,
    race? : string,
    profiencyValues? : string;
};

export interface CharacterCard {
    ref : number,
    characterName : string,
    class : string,
    level : string,
    race : string,
    profiencyValues? : string;
    size : string,
    eyes : string,
    height : string,
    hair : string,
    skin : string,
    age : string,
    weight : string
}
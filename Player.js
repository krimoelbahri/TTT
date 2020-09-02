function Player(name, character){
    const playerName = name;
    let score = 0;
    const playerCharacter = character  

    return {playerCharacter, playerName}
}

export {Player}
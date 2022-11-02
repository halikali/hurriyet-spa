const utf8ToEnglish = (word: string | undefined) => {
    let convertedWord = "";

    if(typeof word === "undefined") return false

    const letters: any = {
        "ğ": "g",
        "ü": "u",
        "ş": "s",
        "ö": "o",
        "ç": "c"
    }

    for (let i = 0; i < word!.length; i++) {
        Object.keys(letters).some((elem) => elem == word?.charAt(i)) ? convertedWord += letters[word!.charAt(i)] : convertedWord += word!.charAt(i)
    }
    return convertedWord
}

export {utf8ToEnglish}
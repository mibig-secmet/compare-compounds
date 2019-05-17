function cors(url) {
    return "https://cors-anywhere.herokuapp.com/" + url;
}

module.exports = {
    dataPath: {
        old: cors("http://bioinformatics.nl/~kauts001/ltr/mibig/data/json_2.0_genefinding"),
        new: cors("http://bioinformatics.nl/~kauts001/ltr/mibig/data/json_2.0")
    }
}
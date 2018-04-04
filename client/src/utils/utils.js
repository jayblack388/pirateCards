const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const imageSwitch = (crewName) => {
    switch (crewName) {
        case "Strawhat Pirates":
            return "/img/crews/strawhat.jpg"    
        case "CP9":
            return "/img/crews/cp9.png"  
        case "Baroque Works":
            return "/img/crews/baroque.png"   
        case "Blackbeard Pirates":
            return "/img/crews/blackbeard.png" 
        case "Shichibukai":
            return "/img/crews/shichibukai.png"
        case "Revolutionary Army":
            return "/img/crews/revolutionary.png" 
        default:
            break;
    }
}

module.exports = {shuffle, imageSwitch};

const imageMap = {
    INTJ: 'images/intj.png',
    INFP: 'images/infp.png',
    ENFP: 'images/enfp.png',
    ISTJ: 'images/istj.png'
};

document.getElementById('style-select').addEventListener('change', function () {
    const selected = this.value;
    document.body.style.backgroundColor = selected === "INTJ" ? "#3b3b98" :
                                          selected === "INFP" ? "#6ab04c" :
                                          selected === "ENFP" ? "#f0932b" :
                                          "#2c3e50";
    document.getElementById("personality-image").src = imageMap[selected] || "images/default.png";
});

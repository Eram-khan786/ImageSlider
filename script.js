(function () {
    const pictures = ["1", "2", "3", "4", "5", "6"];
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".img-container");
    let count = 0;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.classList.contains('btn-left')) {
                count--;
                if (count < 0) {
                    count = pictures.length - 1;
                }
                imgDiv.style.backgroundImage = `url('images/${pictures[count]}.jpg')`;
            }
            if (button.classList.contains('btn-right')) {
                count++;
                if (count >= pictures.length) {
                    count = 0;
                }
                imgDiv.style.backgroundImage = `url('images/${pictures[count]}.jpg')`;
            }
        });
    });
})();

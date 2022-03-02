let phones = document.getElementsByClassName("num");
let Paragraph = document.getElementsByClassName("headng");


let expansion = (box) => {
    box.style.height = "26vh";
}

let contraction = (box) => {
    box.style.height = "5vh";
    hide();
}
try {
    var hide = () => {
        for (let i = 0; i < phones.length; i++) {
            for (let j = 0; j < Paragraph.length; j++) {
                if (phones[i].style.display == "block" && Paragraph[j].style.display == "none") {
                    phones[i].style.display = "none";
                    Paragraph[j].style.display = "block"
                }
                else {
                    phones[i].style.display = "none";
                    Paragraph[j].style.display = "block"
                }


            }

        }

    }

} catch (error) {
    console.log(error)

}


try {
    function randm() {
        for (let i = 0; i < phones.length; i++) {
            for (let j = 0; j < Paragraph.length; j++) {
                if (phones[i].style.display == "none" && Paragraph[j].style.display == "block") {
                    phones[i].style.display = "block";
                    Paragraph[j].style.display = "none";
                }
                else {
                    phones[i].style.display = 'block';
                    Paragraph[j].style.display = "none";

                }

            }


        }
    }
} catch (error) {
    console.log(error);
}

let phoneNumberShow = () => {
    randm();
};

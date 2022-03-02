let phones = document.getElementsByClassName("num");

let expansion = (box) => {
    box.style.height = "45vh";
}

let contraction = (box) => {
    box.style.height = "5vh";
    hide();
}
try {
    var hide = () => {
        for (let i = 0; i < phones.length; i++) {
            if (phones[i].style.display = "block") {
                phones[i].style.display = "none";
            }
            else {
                phones[i].style.display = "none";
            }
        }
    }
} catch (error) {
    console.log(error)

}


try {
    function randm() {
        for (let i = 0; i < phones.length; i++) {
            if ((phones[i].style.display = "none")) {
                phones[i].style.display = "block";
            }
            // else {
            //     phones[i].item.style.display = 'none'
            // }
        }
    }
} catch (error) {
    console.log(error);
}

let phoneNumberShow = () => {
    randm();
};

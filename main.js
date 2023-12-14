let i = 0;

const colors = ["blue", "orange", "black", "green", "yellow", "cyan", "purple"];

const changeColor = () => {
    document.querySelector("body").style.backgroundColor = colors[i++];

    if (i > colors.length-1){
        i = 0;
    };
};


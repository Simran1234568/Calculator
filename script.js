let string = ""
let buttonss = document.querySelectorAll(".buttons");
let arr = Array.from(buttonss);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=="del")
        {
            string=string.substring(0,string.length-1)
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
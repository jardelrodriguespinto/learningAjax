const content = document.querySelector('.content');
const generateBtn = document.querySelector('.generate-btn');

   function run() {
        // Creating XMLHttpRequest object 
        var xhr = new XMLHttpRequest();
        // Making connection  
        var url = 'http://numbersapi.com/random/math';
        xhr.open("GET", url, true);
        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                generateBtn.addEventListener('click', () => {
                	content.innerText = this.responseText;
                	setInterval(run, 1000);
                })
            }
        }
        // Sending request 
        xhr.send();
    }
    run();
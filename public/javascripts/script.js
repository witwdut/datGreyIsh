(function () {
    //load all of the script after DOM is created
    // Use this when you are targeting html elements and the script is in the head
    window.onload = function () {
        // Function that will send an alert message to the user 
        function alertMessage(elem) {
            // Show all of the elements properties in the console
            console.log(elem);
            // Create an alert on the page telling user what button was clicked
            alert(elem.srcElement.textContent + " Button was clicked");
        }
        // Retrieve every element with an a tag
        var a = document.getElementsByTagName('a');
        // IMPORTANT - Loop through every element on page to add an event listener to each element
        for (i = 0; i < a.length; i++) {
            // Add a listener that will do the function alertMessage everytime a user clicks on the element
            a[i].addEventListener('click', alertMessage, false);
        }

        // Retrieve every element with the class bookTitle
        var x = document.getElementsByClassName('bookTitle');
        // Function that changes color everytime the user changes the book title
        function changeColor(){
            // Create a prompt that will store the users information in the variable name
            const name = prompt('What is the name of the book?');
            // Create a variable that we will check amount of times user stored data
            let i = 0;
            //If the user entered an invalid name they have 3 tries to change it
            while(name.length === 0 || i >3){
                const name = prompt('Ehat is the name of the book?');
                i++;
            }
            // Change the text of the current element to whatever they wrote
            this.innerHTML = name;
            // If user already has the color purple then change color of text to green 
            if(this.style.color === "purple"){
                this.style.color = "Green";
            }else{
                this.style.color ="Purple";
            }
            // Add an additional class to the html element
            this.classList.add('test');
        }
        // Run a for loop to add specific properties to every element that has the class bookTitle
        for (let i = 0; i < x.length; i++) {
            // Change every color to red
            x[i].style.color = "red";
            // change every font-size to 1.4em
            x[i].style.fontSize = "1.4em";
            // Add an event LIstener to change the text color on every click
            x[i].addEventListener('click',changeColor);
        }
    }
})();
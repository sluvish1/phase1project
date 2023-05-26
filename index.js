//DOM
addEventListener(`DOMContentLoaded`, () => {
    const couponBtn = document.getElementById("coupon-btn").addEventListener("click", couponBtnWasClicked)

    function couponBtnWasClicked(e) {
        alert("Use TAKE25 for $25 off!")
    };

    function formWasSubmitted(e) {
        e.preventDefault()
        const submittedForm = e.target;//so now submitted will be which ever form was submitted

        //console.log(`is this our input`, e.target.querySelector('.first-name'));
        let firstName = e.target.querySelector(".first-name").value
        let lastName = e.target.querySelector(".last-name").value
        let emailInfo = e.target.querySelector(".email").value
        let phoneNum = e.target.querySelector(".phone-num").value
        let discountCode = e.target.querySelector(".discount-code").value
        let aptDate = e.target.querySelector(".apt-date").value

        let userInput = {
            "firstname": firstName,
            "lastName": lastName,
            "email": emailInfo,
            "phonenumber": phoneNum,
            "discount": discountCode,
            "aptdate": aptDate
        }
        /*How do I prevent the form from subbiting when user enters wrong information?
    -if dicount code isnt the EXACT same as the one proved it should alert the user
    -if phone number enter isnt 10 number form shouldnt submit, phone num is as string
    -if atp date sectected is passed but doesnt allow users to book more than a week at a timw
    */
        if (discountCode === "TAKE25") {
          runsFetch(userInput)
        } else {
            !e.preventDefault()
            alert("Wrong Coupon Was Entered, Please Try Agian!")
        }
    }


    /*Fetch isnt running due to the if statement above, How do I make 
    a conditional fetch that only works oce the conditions of it is met?
    */
    function runsFetch(userInput) {
          fetch("http://localhost:3000/userInput", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInput),
            })
    }
    
    let allforms = document.getElementsByTagName("form") //grabs all of the forms ofn the webpage
    allforms = Array.from(allforms)//turns everything into an array
    allforms.forEach(eachForm => {
        eachForm.addEventListener("submit", formWasSubmitted)
    });
    
       
});

//DOM
addEventListener(`DOMContentLoaded`, () => {
/*
    document.getElementById(`about-btn`).addEventListener(`click`, (e) => {
        alert(`i was clicked`)
    });
    document.getElementById(`review-btn`).addEventListener(`click`, (e) => {
        alert(`i was clicked`)
        //review subbmitter pops up
    });
    */
    const couponBtn = document.getElementById("coupon-btn").addEventListener("click",couponBtnWasClicked)
        function couponBtnWasClicked(e){
            e.preventDefault()
            alert("Use code 'TAKE20' for $25 off!")
        }


    const updoForm = document.getElementById(`updoForm`).addEventListener("submit",updoFormWasSubmitted)
    function updoFormWasSubmitted(e){
       e.preventDefault()
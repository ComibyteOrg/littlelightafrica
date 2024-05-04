//FORM VALIDATION JAVASCRIPT
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  



// Update Date
const updateTime = document.querySelector('.updateTime')

const date = new Date()
const year = date.getFullYear()
updateTime.innerText = year



// Page Loader
window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitioned',() => {
        document.body.removeChild(loader)
    })
})

// Copy To clipboard
const AccountNo = document.querySelector('#accountNumber')
const CopyBtn = document.querySelector('.copy-btn')
const CopyAlert = document.querySelector('.copy-alert')

CopyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(AccountNo.value)
    CopyAlert.classList.add('active')

    setTimeout(() => {
        CopyAlert.classList.remove('active')
    }, 2000);
})

// Thank You For Payment
const Payform = document.querySelector('.payment-form')
const uploadProof = document.querySelector('#upload')
const ThanksAlert = document.querySelector('.Thanks-alert')
const closePop = document.querySelector('.close-pop')

uploadProof.addEventListener('click', ()=>{
    Payform.classList.add('active')
    ThanksAlert.classList.add('active')
})
closePop.addEventListener('click', ()=>{
    window.location.reload()
})
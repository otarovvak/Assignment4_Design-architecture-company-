
const inputTask=document.querySelector('.inputTask')
const addTask = document.querySelector('.addTask')
const tasks = document.querySelector('.tasks')


if(addTask){
  addTask.addEventListener("click", ()=>{
    //creating elements when add button was clicked
    const block =document.createElement('div')

    const checkInput= document.createElement('input')
    checkInput.type="checkbox"

    const inputTaskNew= document.createElement('input')
    inputTaskNew.type= "text"
    // inputTaskNew.readOnly = true
    inputTaskNew.setAttribute("readonly", "readonly") //setting an attribute so it wasnt be editable until edit button will not be clicked

    const editBtn= document.createElement('button')
    editBtn.innerText="edit"

    const removeBtn= document.createElement('button')
    removeBtn.innerText="remove"
    inputTaskNew.value=inputTask.value
    if(inputTaskNew.value==false){
        alert('error') //error message if value is empty
    }
    else{
        block.append(checkInput)
        block.append(inputTaskNew)
        block.append(editBtn)
        block.append(removeBtn)
        tasks.append(block)
    }
    inputTask.value=""      
    checkInput.addEventListener("click",()=>{
        inputTaskNew.classList.toggle('checked')  //to mark and unmark task as completed
    })
    editBtn.addEventListener("click", ()=>{
        if(editBtn.innerText=="edit"){
            editBtn.innerText="save"
            inputTaskNew.removeAttribute("readonly") //editing
        }
        else{
            editBtn.innerText="edit"
            inputTaskNew.setAttribute("readonly", "readonly")
        }
    })
    removeBtn.addEventListener("click",()=>{
        if(removeBtn.innerText=="remove"){
            block.remove()
        }
    })
})   
}

// form validation in main page index.html
const submitBtn=document.getElementById('submitBtn')
const email=document.querySelector('.form-control-js')
const text=document.querySelector('.textarea-js')
const res=document.querySelector('.result')

//adding event to button
if(submitBtn){
   submitBtn.addEventListener('click', Validate)
 
}

//creating an function that checks if data valid or not
function Validate(){

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email.value) && (text.value)) //for email checking
  {
    res.style.color='blue'
    return document.querySelector('.result').innerText='Thank for providing the information. Your data is valid'

  }
else{
    res.style.color='red'
    return res.innerText='The email or text you provided invalid, the recommendation text can not be empty'

}}



// countdown timer
const timeInput = document.getElementById('timerTime');
const submitBtnTimer = document.getElementById('submitBtnTimer');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const blockTime = document.querySelector('.countdown');
let countdown;

if(submitBtnTimer){
    submitBtnTimer.addEventListener('click', () => {
    if (timeInput.value) {
        if (countdown) {
            clearInterval(countdown); // Clear the previous countdown 
        }
        startCounting();
        blockTime.style.display = 'flex';
        document.querySelector('.textError').innerText = '';
    } else {
        document.querySelector('.textError').innerText = 'You should put the data first';
        clearInterval(countdown);
        blockTime.style.display = 'none';
        
    }
});
}


function startCounting() {
    const time = timeInput.value;
    // Splitting the time into hours, minutes because the input has only two :
    const [hours, minutes] = time.split(':');

    // calculating the seconds
    let totalSeconds = hours * 3600 + minutes * 60;

    // starting the countdown timer
    countdown = setInterval(() => {
        totalSeconds--;
        hoursDisplay.innerText = Math.floor(totalSeconds / 3600);
        minutesDisplay.innerText = Math.floor((totalSeconds % 3600) / 60);
        secondsDisplay.innerText = totalSeconds % 60;

        if (totalSeconds === 0) {
            clearInterval(countdown); // to stop the counting
        }
    }, 1000); // to update every second
}


//adding event to concultation button on main page

        
        
        
//modal window for the promocode
const btnModal=document.querySelector('.btnModal')
// to open the modal window 
if(btnModal){
    btnModal.addEventListener('click', () => {
    document.querySelector('.modalWindow').style.display = 'block';
})
}
    if(document.querySelector('.close')){
       // to close the modal window
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modalWindow').style.display = 'none';
    }) 
    }
    

// ///////////////////////////////////// test using class and objectproperties

    const passTestBtn = document.querySelector('.pass-test')
    const contentOfTest = document.querySelector('.project-test')
    const aboutTest = document.querySelector('.project-block')
    const resTest = document.getElementById('resultTest')
    const submitTestBtn = document.querySelector('.submit-testBtn')
    const testErrorMessage = document.getElementById('testErrorMessage')
    if(passTestBtn){
      passTestBtn.addEventListener('click', () => {
      contentOfTest.style.display = 'flex'
      aboutTest.style.display = 'none'
        clearSelectedAnswers()
      if (submitTestBtn) {
      submitTestBtn.onclick = function () {
        testErrorMessage.textContent = ''
  
        const answer1 = document.querySelector('input[name="question1"]:checked')
        const answer2 = document.querySelector('input[name="question2"]:checked')
        const answer3 = document.querySelector('input[name="question3"]:checked')
  
        if (!answer1 || !answer2 || !answer3) {
          testErrorMessage.textContent = 'All questions need to be answered'
        } else {
          // Object and its properties
          const testAnswer = new DesignType(answer1.value, answer2.value, answer3.value)
          contentOfTest.style.display = 'none'
          aboutTest.style.display = 'flex'
          testAnswer.interiorType()
        }
      }
    }

    })
    }
    
  
    function clearSelectedAnswers() {
        const radioButtons = document.querySelectorAll('input[type="radio"]')
        radioButtons.forEach((radio) => {
        radio.checked = false
    })
  }

  
  class DesignType {
    constructor(color, elements, spaceType) {
      this.color = color
      this.elements = elements
      this.spaceType = spaceType
    }
  
    interiorType() {
      if ((this.color === 'Light' || this.color === 'Pastel') && this.elements === 'Minimalist') {
        if (this.spaceType === 'Open') {
          resTest.textContent = `Test results: The minimalistic design is best suitable for your interior. Thanks for providing the input. We would recommend you to live with a natural view, such as the sea or mountains. You can learn more about minimalistic design below.`
        } else if (this.spaceType === 'Closed') {
          resTest.textContent = `Test results: The minimalistic design is best suitable for your interior. Thanks for providing the input. It seems like you love big cities with new modern architecture but in a minimalistic style. You can learn more about minimalistic design below.`
        }
      } 
      else if (this.color === 'Dark' && this.elements === 'Decors') {
        resTest.textContent = `Test results: The dark design with more decors is best suitable for your interior, for example Vintage. You can learn more about this style below.`
      } else {
        resTest.textContent = `Test results: We recommend exploring different design styles to find the best fit for your interior because there are a lot of interior styles that can suit you. You can learn more about various design styles below.`
      }
    }
  }
  

  // drag and drop


  imageBlocks = document.querySelectorAll('.imageBlock');
  const blockGames = document.querySelectorAll('.blockGame');

  const firstModern = document.getElementById('firstModern')
  const secondMinimalist = document.getElementById('secondMinimalist')
  const thirdVintage = document.getElementById('thirdVintage')
  const resultMessageGame=document.querySelector('.resultMessageGame')
  const checkResultsButton=document.querySelector('.checkResultsButton')
  const imgBlockData=document.querySelectorAll('.imgBlockData')
  const originalParents = {};
  const startGame=document.querySelector('.startGame')

    

  imageBlocks.forEach(function(image) {
      image.ondrop = drop
      image.ondragover=allowDrop

  })
  if(firstModern ){
    firstModern.ondragstart = drag
    secondMinimalist.ondragstart = drag  
  thirdVintage.ondragstart = drag
  }
  
  

  blockGames.forEach(function(block) {
      block.ondragover = allowDrop
      block.ondrop = drop
  })

  function allowDrop(event) {
      event.preventDefault()
  }
  
  function drag(event) {
      event.dataTransfer.setData('id', event.target.id)
  }
  
  function drop(event) {
    event.preventDefault()
    let itemId = event.dataTransfer.getData('id')
    let target = event.target
    console.log(event.target)
    target.append(document.getElementById(itemId))

}
function checkGameResults() {
  let flag = true

  for (const img of imgBlockData) {
    if (img.parentElement.getAttribute('data-category') !== img.getAttribute('data-category')) {
      flag = false
      break
    }
  }

  if (flag) {
    resultMessageGame.innerHTML = `Congrats! You win the game! Your gift is a 15% promo code <span class="textError">DNZ2023Game</span>, and you have 1 month to use this promo code.`
  } else {
    resultMessageGame.textContent = 'Unfortunately, you lose this game. You can try again.'
  }
}


const originalPositions = {}
imgBlockData.forEach((img) => {
  originalPositions[img.getAttribute('id')] = img.parentElement
})

function resetGame() {
  imgBlockData.forEach((img) => {
    const originalParent = originalPositions[img.getAttribute('id')]
    originalParent.appendChild(img)
  })
}
if(startGame){
  startGame.addEventListener('click', () => {
  document.querySelector('.gameModalWindow').style.display = 'block'
  document.querySelector('.DragGame').style.display = 'none'
  resultMessageGame.textContent = ''
  resetGame()
})
}


if (checkResultsButton) {
  checkResultsButton.onclick = function () {
    document.querySelector('.gameModalWindow').style.display = 'none'
    document.querySelector('.DragGame').style.display = 'flex'
    checkGameResults()
  }
}

// tooltip 

window.onload = function () {
  const targets = document.querySelectorAll("#tooltip-button")
  const tooltips = document.querySelectorAll("#tooltip-text")
  targets.forEach((target, index) => {
    target.addEventListener('mouseover', () => {
      tooltips[index].style.display = 'block'
    })
    target.addEventListener('mouseleave', () => {
      tooltips[index].style.display = 'none'
    })
  })
}


// adding sound

const consultBtn = document.querySelector('.consultBtn')
const clickSound = document.getElementById('clickSound')
if (consultBtn) {
  consultBtn.addEventListener('click', () => {
    clickSound.play()
    
    alert('Thank you for sending the request. Our managers will contact you in minutes')
  })
}


// js animation to cards on page aboutUS/our workers

const cards = document.querySelectorAll('.card');
const descriptionCard = document.querySelectorAll('.description');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        descriptionCard.forEach((event) => {
            event.style.opacity = 0
            event.style.display = 'none'
        })

        descriptionCard[index].style.display = 'block'
        setTimeout(() => {
            descriptionCard[index].style.opacity = 2
        }, 15)

        setTimeout(() => {
            descriptionCard[index].style.opacity = 0
            setTimeout(() => {
                descriptionCard[index].style.display = 'none'
            }, 500)
        }, 3000)
    })
})

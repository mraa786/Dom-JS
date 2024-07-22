const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#Users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

        // console.log(nameInput.value);


    if(nameInput.value === '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields!';
        
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        //  console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }


    }

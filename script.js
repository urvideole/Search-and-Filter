const userList = document.querySelector('.user-list');
const userName = document.querySelector('#user');

let userDataArr = [];

const getUserData = async () => {
    try {
        let userData = await fetch('https://api.github.com/users');
        userData = await userData.json();
        
        if(userData) {
            userList.innerHTML = '';
        }
        
        userData.map(data => {
            const list = document.createElement('li');
            userDataArr.push(list);
            list.insertAdjacentHTML('afterbegin', 
            `<div class="user-data">
                    <img src=${data.avatar_url}>
                    <div>
                        <p>${data.login}</p>
                        <a href=${data.html_url} target="_blank">${data.html_url}</a>
                    </div>
                </div> 
            `);
            userList.appendChild(list);
        });
    }
    catch(err){

    }
}

getUserData();

userName.addEventListener('input', e => {
    const searchValue = e.target.value;
    
    userDataArr.filter(userData => {
        userData.innerText.toLowerCase().includes(searchValue.toLowerCase()) ?
        userData.classList.remove('hide') :
        userData.classList.add('hide');
    })
})
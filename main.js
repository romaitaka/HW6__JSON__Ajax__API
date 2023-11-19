const requestUrl = 'https://reqres.in/api/users?page=2';
const postWrapper = document.getElementById('post-wrapper');

const createTemplate = data => {
    return `
        <div class="user-list-wrapper">
            <div class="id">ID: ${data.id}</div>
            <a class="email">EMAIL: ${data.email}</a>
            <p class="first_name">FIRST_NAME: ${data.first_name}</p>
            <p class="last_name">LAST_NAME: ${data.last_name}</p>
            <img src="${data.avatar}" alt="Picture" class="avatar">
        </div>
    `;
}

const getList = url => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.json();
        })
        .then(json => {
            json.data.forEach(item => {
                postWrapper.innerHTML += createTemplate(item);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

getList(requestUrl);
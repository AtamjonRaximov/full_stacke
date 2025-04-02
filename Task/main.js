let input = document.querySelector('#input');
    let list = document.querySelector('#list');

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            let wrapperLi = document.createElement('li'); 
            wrapperLi.classList.add('item');

            let textLi = document.createElement('li'); 
            textLi.textContent = input.value;

            let li_y = document.createElement('li');
            li_y.textContent = "Chizish";
            li_y.classList.add('action');
            li_y.addEventListener('click', function() {
                textLi.classList.toggle('completed'); 
            });

            let deleteLi = document.createElement('li');
            deleteLi.textContent = "O‘chirish";
            deleteLi.classList.add('action');
            deleteLi.addEventListener('click', function() {
                list.removeChild(wrapperLi); 
            });

            wrapperLi.appendChild(textLi); 
            wrapperLi.appendChild(li_y); 
            wrapperLi.appendChild(deleteLi); 
            list.appendChild(wrapperLi); 
            input.value = ''; 
        }
    });
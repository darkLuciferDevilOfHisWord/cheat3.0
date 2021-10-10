let search = document.getElementById('search');
let searchTxt;

search.addEventListener('input',function(){
    
    searchTxt = search.value.toLowerCase();

    let card = document.getElementsByClassName('card');
    Array.from(card).forEach(function(element){
        let cardQsn = element.children[0].innerText.toLowerCase();
        if(cardQsn.includes(searchTxt)){
            element.style.display = 'block';
            // let data = new Mark(element.children[0].children[0].innerText);
            // data.unmark();
            // data.mark(
            //     searchTxt,{className:"highlight"}
            // )
        }
        else{
            element.style.display = 'none';
        }

    });
});


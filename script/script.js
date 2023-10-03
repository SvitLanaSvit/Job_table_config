const config = {
    'id': {'isVisible': true, 'isEditable': false, 'isRequired': true},
    'name': {'isVisible': true, 'isEditable': true, 'isRequired': true},
    'age': {'isVisible': true, 'isEditable': false, 'isRequired': false}
}  

$(document).ready(function (){
    configTable();

    $('#buttonAdd').on('click', ()=>{
        const randomName = getRandomName();
        const randomAge = getRandomAge();

        const table = $('#dataTable');
        const tbody = table.find('tbody');

        const lastRow = tbody.find('tr:last');
        console.log(lastRow);

        let nextId = 1; //default
        if(lastRow.length > 0){
            nextId = parseInt(lastRow.find('td:first-child').text(), 10) + 1;
            console.log(nextId);
        }

        const newRow = `
        <tr>
            <td class='id'>${nextId}</td>
            <td class='name'>${randomName}</td>
            <td class='age'>${randomAge}</td>
        </tr>`;

        tbody.append(newRow);
        configTable();
    });

});

function getRandomName(){
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
    let index = Math.floor(Math.random() * names.length);
    return names[index];
}

function getRandomAge(){
    return Math.floor(Math.random() * 101);
}

function configTable(){
    if(!config.id.isVisible){
        $('.id').text('');
    }

    if(!config.name.isVisible){
        $('.name').text('');
    }

    if(!config.age.isVisible){
        $('.age').text('');
    }

    $('.id').attr('contenteditable', `${config.id.isEditable}`);
    $('.name').attr('contenteditable', `${config.name.isEditable}`);
    $('.age').attr('contenteditable', `${config.age.isEditable}`);

    if(config.id.isRequired){
        const id = $('.id');
        id.attr('required', 'true');
        id.css('box-shadow', 'inset 0px 0px 25px 0px rgba(255,2,6,0.5)');
    }
    
    if(config.name.isRequired){
        const name = $('.name');
        name.attr('required', 'true');
        name.css('box-shadow', 'inset 0px 0px 25px 0px rgba(255,2,6,0.5)');
    }

    if(config.age.isRequired){
        const age = $('.age');
        age.attr('required', 'true');
        age.css('box-shadow', 'inset 0px 0px 25px 0px rgba(255,2,6,0.5)');
    }
}
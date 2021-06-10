let nameInput = document.querySelector('.name-field');
let emailInput = document.querySelector('.email-field');
let phoneInput = document.querySelector('.phone-field');
let roleInput = document.querySelector('.role-field');
let tableBody = document.querySelector('.table-body');
let popUp = document.querySelector('.popup');

// button
let formSubmit = document.querySelector('.form-submit');
let formUpdate = document.querySelector('.form-update');
let addUser = document.querySelector('.add-user');
let closePopUp = document.querySelector('.close');

//variable
let tableData = [];
let updateId;

// function for showing no item message
function emptyTable(data) {
  if (data.length < 1) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td colspan='8' class='text-center'>No data</td>`;
    tableBody.appendChild(tr);
  } else {
    getRow(data);
  }
}

// call empty table to show "no item" message
emptyTable(tableData);

// table ui
function getRow(rowData) {
  let tr = '';
  rowData.forEach((data) => {
    tr = document.createElement('tr');
    tr.id = `${data.id}`;
    tr.innerHTML = `
        <td class='name'>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>2</td>
        <td>Active</td>
        <td>${data.role}</td>
        <td>3m ago</td>
        <td> 
           
             <i class="fas fa-edit edit"></i>
             <i class="fas fa-trash-alt delete"></i>
          
        </td>`;
    tableBody.appendChild(tr);
  });
}
//click add user button for adding item in a table, a popup form will come out
addUser.addEventListener('click', (e) => {
  popUp.style.display = 'flex';
  formUpdate.style.visibility = 'hidden';
  formSubmit.style.visibility = 'visible';
});

// form submit button, add data from form input field to table
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.style.display = 'none';

  let name = nameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  let role = roleInput.value;
  // generate id
  let id;
  if (tableData.length === 0) {
    id = 0;
  } else {
    id = tableData[tableData.length - 1].id + 1;
  }
  // push data to an array(tableData)
  if (name === '' || email === '' || phone === '' || role === '') {
    alert('Please fill all the field');
  } else {
    tableData.push({
      id,
      name,
      email,
      phone,
      role,
    });
  }

  tableBody.innerHTML = '';
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  roleInput.value = '';
  getRow(tableData);
});

// update row content

// form update button, edit data from form input field to table
formUpdate.addEventListener('click', (e) => {
  e.preventDefault();
  popUp.style.display = 'none';
  let name = nameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;
  let role = roleInput.value;

  //  add edited data to an array(tableData)
  if (name === '' || email === '' || phone === '' || role === '') {
    alert('Please fill all the field');
  } else {
    tableData[updateId].name = name;
    tableData[updateId].email = email;
    tableData[updateId].phone = phone;
    tableData[updateId].role = role;
  }
  tableBody.innerHTML = '';
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  roleInput.value = '';
  getRow(tableData);
});

//edit and delete
tableBody.addEventListener('click', (e) => {
  const target = e.target.parentElement.parentElement;
  const edit = e.target.classList.contains('edit');
  const deleteBtn = e.target.classList.contains('delete');
  // row data edit
  if (edit) {
    //  open popup
    popUp.style.display = 'flex';
    formSubmit.style.visibility = 'hidden';
    formUpdate.style.visibility = 'visible';
    // row value goes to form input field
    updateId = target.id;
    nameInput.value = tableData[updateId].name;
    emailInput.value = tableData[updateId].email;
    phoneInput.value = tableData[updateId].phone;
    roleInput.value = tableData[updateId].role;
  }
  // delete row data
  else {
    e.target.parentElement.parentElement.remove(target);
    const id = target.id;
    const result = tableData.filter((data) => {
      return data.id != id;
    });
    tableData = result;
    // after delete all item no message will show
    if (tableData.length < 1) {
      emptyTable(tableData);
    }
  }
});

// close popup
closePopUp.addEventListener('click', (e) => {
  popUp.style.display = 'none';
});

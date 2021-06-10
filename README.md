# KM-Express-Competency-test

## Introduction

This project has been made by CRUD operation. Here user can add some personal information. User can also edit and delete those information
Live Demo-

## How it works:

### Button- ADD USER

When we will click on "ADD USER" button a popup form will come out. Where we can input our personal information and then click on submit button. Below js code will work for this ADD USER button.

```javascript
addUser.addEventListener('click', (e) => {
  //  remaining code are in km.js file
});
```

### Button- SUBMIT

When we will click on "SUBMIT" button, all input field data will store in a table. Below js code will work when we will click on "SUBMIT" button.

```javascript
formSubmit.addEventListener('click', (e) => {
  //  remaining code are in km.js file
});
```

### Button- UPDATE

When we will click on "UPDATE" button, all edited input field data will store in a table. Below js code will work when we will click on "UPDATE" button.

```javascript
formUpdate.addEventListener('click', (e) => {
  //  remaining code are in km.js file
});
```

### Edit Icon & Delete icon

When we will click on edit icon a popup form will come out. Where we can edit our personal information and then click on update button.Then data will show in UI

When we will click on delete icon then the field will remove.

Below js code will work when we will click on edit delete icon.

```javascript
tableBody.addEventListener('click', (e) => {
  const target = e.target.parentElement.parentElement;
  const edit = e.target.classList.contains('edit');
  const deleteBtn = e.target.classList.contains('delete');
  // row data edit
  if (edit) {
    //  remaining code are in km.js file
  }
  // delete row data
  else {
    e.target.parentElement.parentElement.remove(target);
    //  remaining code are in km.js file
  }
});
```

### Close Icon

Close icon are attached in popup form. If we want to minimize popup form then we will click on close icon
Below js code will work when we will click on close icon.

```javascript
closePopUp.addEventListener('click', (e) => {
  //  remaining code are in km.js file
});
```

### Function

```javascript
function emptyTable(data) {
  if (data.length < 1) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td colspan='8' class='text-center'>No data</td>`;
    tableBody.appendChild(tr);
  } else {
    getRow(data);
  }
}
```

Above function "emptyTable()" will execute to show when there is no data in a table.

```javascript
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
```

Above function "getRow()" will execute to show row of a table.


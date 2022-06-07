let tableElement = [
    {name: "Black Pantera", strength: 66, age: 53},
    {name: "Captain America", strength: 79, age: 137},
    {name: "Captain Marvel", strength: 97, age: 26},
    {name: "Hulk", strength: 5, age: 49},
    {name: "Iron Man", strength: 88, age: 48},
    {name: "Spider-Man", strength: 78, age: 16},
    {name: "Thanos", strength: 99, age: 1000},
    {name: "Thor", strength: 95, age: 1000},
    {name: "Yon-Rogg", strength: 73, age: 52}
  ];
  
  let headerElement = ['Name', 'Strength', 'Age'];
  
  let table = document.createElement('table');
  table.classList.add('table');
  document.body.append(table);
  
  let tablehead = document.createElement('thead');
  tablehead.classList.add('table-header');
  table.append(tablehead);
  
  let tablebody = document.createElement('tbody');
  tablebody.classList.add('table-body');
  table.append(tablebody);
  
  let tr = document.createElement('tr');
  tablehead.append(tr);
  
  header_value = document.getElementById('header_value');
  
  sort_value = document.getElementById('sort_value');
  
  
  let get = (id) => {
    return document.querySelector(id);
  }
  
  for (let c = 0; c < headerElement.length; c++) {
    let th = document.createElement('th');
    th.insertAdjacentHTML(`beforeend`, `${headerElement[c]}`);
    th.setAttribute('id',`header${c}`);
    tr.append(th);
  }
  
  let renderCell = () => {
    tablebody.innerHTML = '';
    for (let i = 0; i < tableElement.length; i++) {
      let tr = document.createElement('tr');
      tablebody.append(tr);
      for (let j = 0; j < Object.keys(tableElement[0]).length; j++) {
        let td = document.createElement('td');
        td.insertAdjacentHTML(`beforeend`, `${Object.values(tableElement[i])[j]}`);
        tr.append(td);
      }
    }
  }
  
  renderCell();
  
  get('#header0').addEventListener('click', function (event){
    if (event.target.innerText === 'Name'){
      header_value.innerHTML = '';
      header_value.insertAdjacentHTML('beforeend', `Name`);
      let count = false;

      if (!count){
        tableElement.sort((a, b) => a.name > b.name ? -1 : 1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
      } else {
        tableElement.sort((a, b) => a.name > b.name ? 1 : -1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `DESC`);
        count = false;
        renderCell();
      }
    }
  });

  get('#header1').addEventListener('click', function (event){
    if (event.target.innerText === 'Strength'){
      header_value.innerHTML = '';
      header_value.insertAdjacentHTML('beforeend', `Strength`);
      let count = false;

      if (!count){
        tableElement.sort((a, b) => a.strength > b.strength ? -1 : 1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
      } else {
        tableElement.sort((a, b) => a.strength > b.strength ? 1 : -1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `DESC`);
        count = false;
        renderCell();
      }
    }
  });

  get('#header2').addEventListener('click', function (event){
    header_value.innerHTML = '';
    header_value.insertAdjacentHTML('beforeend', `Age`);
    if (event.target.innerText === 'Age'){
        let count = false;
        
      if (!count){
        tableElement.sort((a, b) => a.age > b.age ? -1 : 1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `ASC`);
        count = true;
        renderCell();
      } else {
        tableElement.sort((a, b) => a.age > b.age ? 1 : -1);
        sort_value.innerHTML = '';
        sort_value.insertAdjacentHTML('beforeend', `DESC`);
        count = false;
        renderCell();
      }
    }
  });
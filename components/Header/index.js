// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(dateData, titleData, tempData) {
    // create elements 
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp =document.createElement('span');

    // setup element layout 
    header.append(date);
    header.append(title);
    header.append(temp);

    // assign class to elements 
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // add content to elements
    date.textContent = dateData;
    title.textContent = titleData;
    temp.textContent = tempData;

    // return result(parent div)
    return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));

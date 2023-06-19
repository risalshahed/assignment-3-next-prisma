// Problem 1
const weekDay = () => {
    const date = new Date();
    // console.log(date);
    const allDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDaysIndex = date.getDay();
    // console.log(weekDaysIndex);
    const result1 = allDaysOfWeek[weekDaysIndex];
    document.querySelector('#p1').innerText = result1;
    // return result;
}

// Problem 2
const numbers = [3, 4, 12];

const getSqrtOfNums = () => {
    const result2 = numbers.reduce( (prev, curr) => Math.sqrt( Math.pow(prev, 2) + Math.pow(curr, 2) ), 0);
    // console.log(result2)
    document.querySelector('#p2').innerText = result2;
}


// Problem 3
const isPrime = (num) => {
    if(num <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }

    return true;
}

// console.log(isPrime(131))

// Problem 4
function openWindow(url, width, height) {
  const windowFeatures = `width=${width},height=${height},left=100,top=100`;
  window.open(url, '_blank', windowFeatures);
}

const url_p4 = 'https://example.com';
const width_p4 = 800;
const height_p4 = 600;
openWindow(url_p4, width_p4, height_p4);

// Problem 5
const getBrowser = () => {
    const userAgent = navigator.userAgent;
    // console.log(userAgent);
    let browserName, browserVersion;

    // Detect browser name and version
    if (userAgent.indexOf('Firefox') !== -1) {
        browserName = 'Mozilla Firefox';
        browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('Chrome') !== -1) {
        browserName = 'Google Chrome';
        browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('Safari') !== -1) {
        browserName = 'Apple Safari';
        browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) {
        browserName = 'Microsoft Internet Explorer';
        browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+\.\d+)/)[1];
    } else {
        browserName = 'Unknown';
        browserVersion = 'Unknown';
    }

    document.querySelector('#p5').innerHTML = `
    ${browserName} browser of ${browserVersion} version
    `
}


// Problem 6

const getLocation = () => {
    
    // let x_p6 = document.querySelector('#p6');
    // console.log(x_p6);

    // console.log(navigator);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.querySelector('#p6').innerHTML = "Geolocation is not supported by this browser.";
    }
}

const showPosition = position => {
    document.querySelector('#p6').innerHTML = `
    <p>Latitude: <b>${position.coords.latitude.toFixed(2)}</b></p>
    <p>Longitude: <b>${position.coords.longitude.toFixed(2)}</b></p>`
}

// Problem 8
const clickMe = () => {
    document.querySelector('#p8').textContent = 'Button Clicked!';
}


// Problem 10
const addClass = () => {
    document.querySelector('#p10').classList.add('highlight');
}


// Problem 11
const createList = () => {
    const ul = document.querySelector('#p11');

    for(let i=0; i<5; i++) {
        const li = document.createElement('li');
        li.textContent = i+1;
        ul.appendChild(li);
    }
}

// Problem 12
const changeImage = (src, alt) => {
    const myImage = document.querySelector('#p12');
    myImage.src = src;
    myImage.alt = alt;
}



// Problem 13
// Problem 14
// Problem 15
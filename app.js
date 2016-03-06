//
//
//
function  onDeviceReady() {
    // console.log('onDeviceReady');
    document.getElementById('isstate').innerHTML = 'onDeviceReady';
};

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// by ID in <HTML>
// A quirk in the specifications allow us to do this.
document.getElementById('bigger').addEventListener('click', function() {
    document.getElementById('allOfIt').style.fontSize = '125%';
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('allOfIt').style.fontSize = '100%';
});

document.getElementById('smaller').addEventListener('click', function() {
    document.getElementById('allOfIt').style.fontSize = '75%';
    // You can also do this.
});

// with parentNode of <body> tag
// A quirk in the specifications allow us to do this.
document.getElementById('pbigger').addEventListener('click', function() {
    document.body.parentNode.style.fontSize = '125%';
});

document.getElementById('preset').addEventListener('click', function() {
    document.body.parentNode.style.fontSize = '100%';
});

document.getElementById('psmaller').addEventListener('click', function() {
    document.body.parentNode.style.fontSize = '75%';
});

// with <body> tag
// add Event listener to [bigger] button
document.getElementById('bbigger').addEventListener('click', function() {
    // http://www.w3schools.com/js/js_htmldom_elements.asp
    document.body.style.fontSize = '125%';
});

document.getElementById('breset').addEventListener('click', function() {
    // A quirk in the specifications allow us to do this.
    document.body.style.fontSize = '100%';
});

document.getElementById('bsmaller').addEventListener('click', function() {
    document.body.style.fontSize = '75%';
});

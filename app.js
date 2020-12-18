// dom elements

const con_dom = document.getElementById("connection");
const msg_dom = document.querySelector(".msg");

// connection

var connection = navigator.connection || 
                 navigator.mozConnection || 
                 navigator.webkitConnection;

connection.addEventListener('change', buildUI);

function buildUI() {
    con_dom.classList[
        connection.rtt > 0  ? 'add' : 'remove'
    ]('connected');

    if(connection.rtt) {
        msg_dom.textContent = "connected: " + connection.effectiveType;
    } else {
        msg_dom.textContent = "disconnected"
    }
}

buildUI(); 
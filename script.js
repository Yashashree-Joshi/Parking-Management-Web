let twoWheelerSlots = JSON.parse(localStorage.getItem("twoWheelerSlots")) || new Array(10).fill(0);
let fourWheelerSlots = JSON.parse(localStorage.getItem("fourWheelerSlots")) || new Array(10).fill(0);
let twoWheelerCount = twoWheelerSlots.filter(slot => slot !== 0).length; // Count parked vehicles
let fourWheelerCount = fourWheelerSlots.filter(slot => slot !== 0).length;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Admin" && password === "pass1") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("menu").style.display = "block";
        document.querySelector('.login').style.display = "none";
    } 
    else 
    {
        document.getElementById("loginMessage").innerText = "Invalid credentials!";
    }
}

function logout() {
    document.getElementById("menu").style.display = "none";
    document.querySelector('.login').style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginMessage").innerText = "";
    hideAllForms();
}

function showForm(action) {
    hideAllForms();
    if (action === 'insert') {
        document.getElementById("insertForm").style.display = "block";
    } else if (action === 'display') {
        document.getElementById("displayForm").style.display = "block";
        updateDisplay();
    } else if (action === 'exit') {
        document.getElementById("exitForm").style.display = "block";
    } else if (action === 'search') {
        document.getElementById("searchForm").style.display = "block";
    }
}

function hideAllForms() {
    document.getElementById("insertForm").style.display = "none";
    document.getElementById("displayForm").style.display = "none";
    document.getElementById("exitForm").style.display = "none";
    document.getElementById("searchForm").style.display = "none";
}

// Park Vehicle
function parkVehicle() {
    const vehicleType = document.getElementById("vehicleType").value;
    const vehicleNumber = document.getElementById("vehicleNumber").value;

    let message = "";
    if (vehicleType === "2W") {
        for (let i = 0; i < twoWheelerSlots.length; i++) {
            if (twoWheelerSlots[i] === 0) {
                twoWheelerSlots[i] = vehicleNumber;
                twoWheelerCount++;
                message = `2 wheeler successfully parked in slot ${i + 1}.`;
                break;
            }
        }
        if (!message) message = "2 wheeler parking full!";
    } else if (vehicleType === "4W") {
        for (let i = 0; i < fourWheelerSlots.length; i++) {
            if (fourWheelerSlots[i] === 0) {
                fourWheelerSlots[i] = vehicleNumber;
                fourWheelerCount++;
                message = `4 wheeler successfully parked in slot ${i + 1}.`;
                break;
            }
        }
        if (!message) message = "4 wheeler parking full!";
    } else {
        message = "Invalid vehicle type!";
    }

    alert(message);
    saveToLocalStorage();
    resetInsertForm();
}

function resetInsertForm() {
    document.getElementById("vehicleType").value = "2W";  // Reset to default
    document.getElementById("vehicleNumber").value = "";
}

function updateDisplay() {
    const displayType = document.getElementById("displayType").value;
    const displayContainer = document.getElementById("displayContainer");
    displayContainer.innerHTML = "";

    if (displayType === "2W") {
        displayContainer.innerHTML = `<h4>2 Wheelers:</h4>${twoWheelerSlots.join(', ')}`;
    } else if (displayType === "4W") {
        displayContainer.innerHTML = `<h4>4 Wheelers:</h4>${fourWheelerSlots.join(', ')}`;
    }
}

function exitVehicle() {
    const exitType = document.getElementById("exitType").value;
    const exitNumber = document.getElementById("exitNumber").value;

    let message = "";
    if (exitType === "2W") {
        for (let i = 0; i < twoWheelerSlots.length; i++) {
            if (twoWheelerSlots[i] === exitNumber) {
                twoWheelerSlots[i] = 0;
                twoWheelerCount--;
                message = `2 wheeler with number ${exitNumber} has exited from slot ${i + 1}.`;
                break;
            }
        }
        if (!message) message = "Vehicle not found in 2 wheeler parking.";
    } else if (exitType === "4W") {
        for (let i = 0; i < fourWheelerSlots.length; i++) {
            if (fourWheelerSlots[i] === exitNumber) {
                fourWheelerSlots[i] = 0;
                fourWheelerCount--;
                message = `4 wheeler with number ${exitNumber} has exited from slot ${i + 1}.`;
                break;
            }
        }
        if (!message) message = "Vehicle not found in 4 wheeler parking.";
    } else {
        message = "Invalid vehicle type.";
    }

    alert(message);
    saveToLocalStorage();
    resetExitForm();
}

function resetExitForm() {
    document.getElementById("exitType").value = "2W";  // Reset to default
    document.getElementById("exitNumber").value = "";
}

function searchVehicle() {
    const searchType = document.getElementById("searchType").value;
    const searchNumber = document.getElementById("searchNumber").value;

    let message = "";
    let index;

    if (searchType === "2W") {
        index = twoWheelerSlots.indexOf(searchNumber);
        if (index !== -1) {
            message = `2 wheeler found in slot ${index + 1}!`;
        } else {
            index = fourWheelerSlots.indexOf(searchNumber);
            message = index !== -1 ? `Vehicle is hot here!!!Vehicle found in 4 wheeler slot ${index + 1}!` : "2 wheeler not found.";
        }
    } else if (searchType === "4W") {
        index = fourWheelerSlots.indexOf(searchNumber);
        if (index !== -1) {
            message = `4 wheeler found in slot ${index + 1}!`;
        } else {
            index = twoWheelerSlots.indexOf(searchNumber);
            message = index !== -1 ? `Vehicle is not here!!! Vehicle found in 2 wheeler slot ${index + 1}!` : "4 wheeler not found.";
        }
    } else {
        message = "Invalid vehicle type.";
    }

    alert(message);
    resetSearchForm();
}

function resetSearchForm() {
    document.getElementById("searchType").value = "2W";  // Reset to default
    document.getElementById("searchNumber").value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("twoWheelerSlots", JSON.stringify(twoWheelerSlots));
    localStorage.setItem("fourWheelerSlots", JSON.stringify(fourWheelerSlots));
}

// Load vehicle state on page load
window.onload = function() {
    updateDisplay();
};

// Virus Name: MALICIOUS_CODE_v1.0 
// Description: Advanced techniques for data theft and code obfuscation 

// Method to cover up virus tracks and use encryption to protect malicious code 
function encrypt(){ 
    let code = "";  // added missing variable
    for(let i=0; i<code.length; i++){ 
        code += String.fromCharCode(code.charCodeAt(i) + 4);
    } 
    // Print encrypted code 
    console.log("Encrypted code: " + code); 
} 

// Method to control user screen 
function controlScreen(){ 
    // Set the cursor position to (0, 0) 
    window.moveTo(0, 0);
    
    // Set the screen
    window.resizeTo(screen.width, screen.height); // added missing line
    
    // Hide cursor 
    document.body.style.cursor = "none"; 
}

// Main function 
function main(){ 
    // Call methods 
    encrypt(); 
    control
}

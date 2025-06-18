const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '@', '!', '#', '%', '^', '*', '(', ')', "_", "-", "+", ",", ".", "<", ">", "[", "]", '{', '}', '.', '/', '|'
]

function randomPassword(length = 12) {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor((Math.random() * chars.length))]
    }
    return password;
}

const generate = document.getElementById('generateBtn')

let passwordDiv = document.getElementById('Password')

generate.addEventListener('click', (e) => {

    passwordDiv.classList.add('text-black')
    passwordDiv.innerHTML = randomPassword(12)
})

const copyBtn = document.getElementById('copy')

const show = document.getElementById('copyMessage')

copyBtn.addEventListener('click', (e) => {
    let password = passwordDiv.textContent.trim();
    // Only copy if password is not default and not empty
    if (password && password !== 'Password.') {
        navigator.clipboard.writeText(password);
    }
});

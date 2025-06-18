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
    if (password && password !== 'Password.') {
        navigator.clipboard.writeText(password);

        // Create the sleek message span
        let span = document.createElement('span');
        span.classList.add(
            'fixed',
            'left-1/2',
            'top-8',
            'transform',
            '-translate-x-1/2',
            'bg-green-700',
            'bg-opacity-90',
            'text-white',
            'text-sm',
            'px-4',
            'py-2',
            'rounded-full',
            'shadow-lg',
            'opacity-0',
            'transition',
            'duration-500',
            'ease-in-out',
            'z-50'
        );
        span.textContent = "Copied to clipboard!";
        document.body.append(span);

        // Fade in and slide up
        setTimeout(() => {
            span.classList.remove('opacity-0');
            span.classList.add('opacity-100');
            span.style.transform += ' translate-y-0';
        }, 10);

        // Fade out and remove after 2 seconds
        setTimeout(() => {
            span.classList.remove('opacity-100');
            span.classList.add('opacity-0');
            setTimeout(() => span.remove(), 500);
        }, 2000);
    }
});

let temp = ("text-white absolute rounded-3xl p-3 bg-gradient-to-bl from-green-800 via-green-600 to-green-800 bottom-0 left-[700px]").split(" ")
console.log(temp);

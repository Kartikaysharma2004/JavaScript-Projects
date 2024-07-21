let button = document.querySelectorAll("button");

function generateName() {
    const keyword = document.getElementById('keyword').value.trim();
    if (keyword === "") {
        alert('Please enter a keyword');
        return;
    }
    
    const suffixes = ['Solutions', 'Limited', 'Consulting', 'Enterprises', 'Innovations', 'Creations', 'Dynamics'];
    const prefix = 'Next';
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const businessName = `${prefix} ${keyword} ${randomSuffix}`;
    
    document.getElementById('result').innerText = `Your Business Name: ${businessName}`;
}

document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', () => {
        generateName();
    });
});

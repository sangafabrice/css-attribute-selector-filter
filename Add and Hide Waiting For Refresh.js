(function () {
    const ul = document.querySelector("ul");
    const lis = document.querySelectorAll("li");
    [
        "Bafang",
        "Bulu",
        "Fulfulde",
        "Ghomala",
        "Makaa",
        "Medumba",
        "Nufi",
        "Nuguru",
        "Yemba"
    ].forEach(lang => {
        const li = document.createElement("li");
        li.classList.add("not-found");
        li.dataset.lang = lang.toLowerCase();
        li.appendChild(document.createTextNode(lang));
        ul.insertBefore(li,
            [...lis].filter(({ innerText }) =>
                innerText.toLowerCase() > lang.toLowerCase())[0]);
    });

    const input = document.querySelector("input");
    const currentValue = input.value;
    const style = document.createElement("style");
    document.querySelector("head")
        .appendChild(style)
        .appendChild(document.createTextNode(`[data-lang*="${currentValue}"]{background-color: rgb(29, 156, 29);li:not(&)[data-lang]{background-color: rgb(240, 53, 53);}}`))

    
    input.oninput = async function () {
        if (this.value != currentValue) return;
        await new Promise(resolve => setTimeout(resolve, 1000));
        style.innerText = `[data-lang*="${currentValue}"]{background-color: white;transition: background-color 1000ms ease}`;
        await new Promise(resolve => setTimeout(resolve, 1100));
        style.remove();
        this.oninput = undefined;
    }

})();
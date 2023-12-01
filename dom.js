const main = document.querySelector('main');

let heading = "my jokes";
const joke = "Why did the chicken cross the road? The horses name was Friday.";
const joke1 = "What did the obama glass pane say to the american people? Let me be clear.";
const joke2 = "I for one love roman numerals."

const template = `
        <section>
            <p>${joke}</p>
            <p>${joke1}</p>
            <p>${joke2}</p>
        </section>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "thats all folks!"
main.appendChild(p);
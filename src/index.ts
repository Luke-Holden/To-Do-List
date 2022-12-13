/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#to-do-form")
const input = document.querySelector<HTMLInputElement>("#new-item")
// const input = document.getElementById("new-item") as HTMLInputElement | null

let value = input?.value;
console.log("initial value = ", value)

if (input != null) {
    console.log(input.value); // 👉️ "Initial value"
}
  
input?.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;
    console.log('input = ', target.value);
    value = target.value
});

// const valueUpdated = input?.value;
// console.log("updated value = ", value)

const button = document.getElementById("#submit-new-item");

// console.log('input = ', input?.value)
button?.addEventListener('click', function handleClick(event) {
  console.log('button clicked')
  console.log(event)
  console.log(event.target)
  console.log("updated value = ", value)
})


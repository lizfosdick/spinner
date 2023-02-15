process.stdout.write('hello from spinner2.js... \rheyyy\n');
let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let time = 100;
for (const spin of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time)
  time += 200;
}
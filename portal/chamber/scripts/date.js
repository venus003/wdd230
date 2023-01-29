const today = new Date();

const here = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

document.querySelector("#now").innerHTML = here;
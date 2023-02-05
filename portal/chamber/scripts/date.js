const today = new Date();

const here = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

document.querySelector("#now").innerHTML = here;

if (today.getDay() == 2) {
    document.querySelector("#tuesdays").innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
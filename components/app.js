import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from "@material/textfield";
import {MDCTextFieldIcon} from "@material/textfield/icon";
import {MDCSwitch} from "@material/switch";
import Cookie from 'js-cookie';


function setDarkTheme() {
    //$("*").addClass("dark-theme");
    document.documentElement.setAttribute('data-theme', 'dark');
    Cookie.set('theme', 'dark');
}

function setLightTheme() {
    //$("*").removeClass("dark-theme");
    document.documentElement.setAttribute('data-theme', 'light');
    Cookie.set('theme', 'light');
}

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const drawer = new MDCDrawer(document.querySelector(".mdc-drawer"));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const listEl = document.querySelectorAll('a.reference').forEach(function (e) {
    e.addEventListener('click', (event) => {
        drawer.open = false;
    });
});

const darkTheme = new MDCSwitch(document.querySelector('.mdc-switch'));
document.querySelector('.mdc-switch').addEventListener("click", (event) => {
    if (darkTheme.checked) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

$(document).ready(function () {
    if (Cookie.get("theme") === "dark") {
        setDarkTheme();
        darkTheme.checked = true;
    } else {
        setLightTheme();
    }

    if (document.querySelector('.mdc-text-field')) {
        MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
        MDCTextFieldIcon.attachTo(document.querySelector('.mdc-text-field__icon'));

        document.getElementById("search-button").addEventListener("click", (event) => {
            document.getElementById("search-form").submit();
        });
    }
});

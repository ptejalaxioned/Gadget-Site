let hamburger = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line = document.querySelector(".line");
hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("nav-list-onclick");
  line1.classList.toggle("line1-onclick");
  line2.classList.toggle("line2-onclick");
  line3.classList.toggle("line3-onclick");
  hamburger.classList.toggle("hamburger-onclick");
  document.childNodes[1].classList.toggle("body-onclick");
});

// /////////////////////////////////////////

//form validation

let fname = document.querySelector("#first-name");
let full_name = document.querySelector("#full-name");
let email = document.querySelector("#email");
let textarea = document.querySelector("#textarea");

let fname_div = document.querySelector(".first-name");
let full_name_div = document.querySelector(".full-name");
let email_div = document.querySelector(".email");
let textarea_div = document.querySelector(".textarea");
let form = document.querySelector("form");
let button = document.querySelector("#button");
form.addEventListener("submit", (e) => {
  let regx_name = /^[a-zA-Z]{2,20}$/;
  let regx_full_name = /^[a-zA-Z]{4,40}$/;
  let regx_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  span_content_name = "min-2 max-20 charachters with A-Z";
  span_content_full_name = "min-4 max-40 charachters with A-Z";
  span_content_email = "please enter valid email";

  //For first name
  if (fname_div.children.length == 1) {
    let span_fname = document.createElement("span");
    span_fname.classList.toggle("div-span");
    fname_div.appendChild(span_fname);
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  } else {
    let span_fname = fname_div.children[1];
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  }

  //   For full name
  if (full_name_div.children.length == 1) {
    let span_full_name = document.createElement("span");
    span_full_name.classList.toggle("div-span");
    full_name_div.appendChild(span_full_name);
    addSpan(span_full_name, full_name, e, regx_full_name, span_content_name);
  } else {
    let span_full_name = full_name_div.children[1];
    addSpan(span_full_name, full_name, e, regx_full_name, span_content_name);
  }

  // For email
  if (email_div.children.length == 1) {
    let span_email = document.createElement("span");
    span_email.classList.toggle("div-span");
    email_div.appendChild(span_email);
    addSpan(span_email, email, e, regx_email, span_content_email);
  } else {
    let span_email = email_div.children[1];
    addSpan(span_email, email, e, regx_email, span_content_email);
  }

  //For textarea
  if (textarea_div.children.length == 1) {
    let span_textarea = document.createElement("span");
    span_textarea.classList.toggle("div-span");
    textarea_div.appendChild(span_textarea);
    addSpanForTextarea(span_textarea, textarea, e);
  } else {
    let span_textarea = textarea_div.children[1];
    addSpanForTextarea(span_textarea, textarea, e);
  }

  // For validation
  function addSpan(span, input, e, regx, spanContent) {
    if (input.value === "") {
      span.innerHTML = "*This field is required";
      input.classList.add("input-border");
      e.preventDefault();
    } else if (regx.test(input.value)) {
      span.innerHTML = "";
      input.classList.remove("input-border");
    } else {
      span.innerHTML = spanContent;
      input.classList.add("input-border");
      e.preventDefault();
    }
  }
});
function addSpanForTextarea(span, input, e) {
  if (input.value == "") {
    span.innerHTML = "This field is required";
    input.classList.add("input-border");
    e.preventDefault();
  } else {
    span.innerHTML = "";
    input.classList.remove("input-border");
  }
}

//Tabs
let tabs = document.querySelectorAll(".click-tab");
let data = document.querySelector(".data");
let array = [
    `programming ipsum dolor sit amet consectetur adipisicing elit.programmingeos ut deleniti eligendi eveniet a dolor programming aperiamReaserch fugiat voluptates ab commodi porro omnis excepturi etalias duci programming harum, ex at? Officiis alias, voluptatemrepellendus nulla, programming hic accusamus quis minus dolorumcupiditate vel programming. Doloribus programmingassumenda, esse placeat, minus reprehenderit accusantium ipsam vitae vero ex blanditiis cumque officiis dicta. Esse iure, modi cum porro debitis, programming quasi, neque nemo quibusdam repudiandae perspiciatis labore. Iusto architecto quo, eaque exercitationem totam enim necessitatibus ratione a sed quasi expedita perferendis porro fugiat programming, repudiandae cumque quisquam programming`,
    `Reaserch ipsum dolor sit amet consectetur adipisicing elit.Reaserch eos ut deleniti eligendi eveniet a dolor Reaserch aperiam Reaserch fugiat voluptates a repellendus nulla, mollitia hic accusamus quis minus dolorum cupiditate vel Reaserch. Doloribus, pariatur Reaserch qu assumenda, esse placeat, minus reprehenderit accusantium ipsam vitae vero ex blanditiis cumque officiis dicta. Esse iure, modi cum porro debitis, dolorum quasi, neque nemo quibusdam repudiandae perspiciatis labore. Iusto architecto quo, eaque exercitationem totam eque quisquam Reaserch`,
    `Development ipsum dolor sit amet consectetur adipisicing elit.Development eos ut deleniti eligendi eveniet a dolor Development aperiam Development fugiat voluptates ab commodi porro omnis excepturi et alias ducimus explicabo harum, ex at? Officiis alias, voluptatem repellendus nulla, mollitia hic accusamus quis minus dolorum cupiditate vel Development. Doloribus, pariatur Development quos assumenda, esse placeat, minus reprehenderit accusantium ipsam vitae, modicum porro debitis, dolorum quasi, neque nemo quibusdam repudiandae perspiciatis Development. Iusto architecto quo, eaque exercitationem totam enim necessitatibus Development a sed qu porro fugiat voluptatibus, repudiandae cumque quisquam Development`,
    `Phases ipsum dolor sit amet consectetur adipisicing elit.Phases eos ut deleniti eligendi eveniet a dolor Phases aperiamPhases fugiat voluptates ab commodi porro omnis excepturi et repellendus nulla, Phases hic accusamus quis minus dolorum cupiditate vel Phases. Doloribus, pariatur Phases quos assumenda, esse placeat, minus reprehenderit accusantium ipsam vitae vero ex Phases cumque officiis dicta. Esse iure, modi cum porro debitis, dolorum quasi, neque nemo quibusdam repudiandae Phases`,
];

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    // Get the class name of the clicked tab
    let className = tab.children[0].className;
    let tabClass = className.split(" ")[1];
    tab.children[0].classList.add("tab-onclick");

    data.children[0].innerHTML = array[index];

    tabs.forEach((otherTab, idx) => {
      if (idx !== index) {
        otherTab.children[0].classList.remove("tab-onclick");
      }
    });
  });
});

//filter range
let inputMin=document.querySelector(".min")
let inputMax=document.querySelector(".max")
let main=document.querySelector("main")
$(document).ready(function () {
let shoes_list=document.querySelectorAll(".item-list")
$('.input').mousemove(  
    function(){
        $(".low").text(inputMin.value)
        $(".high").text(inputMax.value)
        if(parseInt(inputMin.value)+140>parseInt(inputMax.value))
            {
              $(this).prop("disabled", true);
            }
         else{
            $(this).prop("enabled", true);
         }
    }
)
$('.click-filter').click(
    function(){
shoes_list.forEach(function(element) {
    $(element).hide(1000)
    let minVal=parseInt(inputMin.value)
    let maxVal=parseInt(inputMax.value)
    let price_string=element.children[2].innerHTML
    let price=parseInt(price_string.slice(1))
    if(price>=minVal && price<=maxVal)
        {
            $(element).show(1000)
        }
     else{
       let Div= document.createElement("div")
       Div.classList.add("no-result")
       Div.innerHTML="No Result Found"
       main.appendChild(Div)
     }
    }
)
});


}
)

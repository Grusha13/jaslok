$(document).ready(function(){

  var scrollTrigger = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollTrigger) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


  $("#collapsibleNavId").on("shown.bs.collapse", function () {
    $(".fa-bars").hide();
    $(".fa-xmark").show();
  });

  $("#collapsibleNavId").on("hidden.bs.collapse", function () {
    $(".fa-bars").show();
    $(".fa-xmark").hide();
  });

  var $marquee = $('.marquee-list');
  var $marqueeItems = $marquee.children('.content');
  var totalWidth = 0;

  $marqueeItems.each(function() {
      totalWidth += $(this).outerWidth(true);
  });

  $marquee.append($marquee.html());

  function animateMarquee() {
      $marquee.css({marginLeft: 0});
      $marquee.animate({ marginLeft: -totalWidth }, 15000, 'linear', function() {
          $marquee.css({marginLeft: 0});
          $marquee.find('.content').slice(0, $marqueeItems.length).appendTo($marquee);
          animateMarquee();
      });
  }

  animateMarquee();

  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : true,
    dots: false,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  var telInputs = ["#form_phone_1", "#form_phone_2", "#form_phone_3"],
    countryInputs = ["#form_country_1", "#form_country_2", "#form_country_3"],
    countryNameInputs = ["#country_name_1", "#country_name_2", "#country_name_3"];

    var countryMapping = {
      'af': 'Afghanistan',
      'al': 'Albania',
      "dz": "Algeria",
      "as": "American Samoa",
      "ad": "Andorra",
      "ao": "Angola",
      'ai': 'Anguilla',
      "ag": "Antigua and Barbuda",
      "ar": "Argentina",
      "am": "Armenia",
      "aw": "Aruba",
      "au": "Australia",
      "at": "Austria",
      "az": "Azerbaijan",
      "bs": "Bahamas",
      "bh": "Bahrain",
      "bd": "Bangladesh",
      "bb": "Barbados",
      "by": "Belarus",
      "be": "Belgium",
      "bz": "Belize",
      "bj": "Benin",
      "bm": "Bermuda",
      "bt": "Bhutan",
      "bo": "Bolivia",
      "ba": "Bosnia and Herzegovina",
      "bw": "Botswana",
      "br": "Brazil",
      "io": "British Indian Ocean Territory",
      "vg": "British Virgin Islands",
      "bn": "Brunei",
      "bg": "Bulgaria",
      "bf": "Burkina Faso",
      "bi": "Burundi",
      "kh": "Cambodia",
      "cm": "Cameroon",
      "ca": "Canada",
      "cv": "Cape Verde",
      "bq": "Caribbean Netherlands",
      "ky": "Cayman Islands",
      "cf": "Central African Republic",
      "td": "Chad",
      "cl": "Chile",
      "cn": "China",
      "cx": "Christmas Island",
      "cc": "Cocos (Keeling) Islands",
      "co": "Colombia",
      "km": "Comoros",
      "cd": "Congo (DRC)",
      "cg": "Congo (Republic)",
      "ck": "Cook Islands",
      "cr": "Costa Rica",
      "ci": "Côte d’Ivoire",
      "hr": "Croatia",
      "cu": "Cuba",
      "cw": "Curaçao",
      "cy": "Cyprus",
      "cz": "Czech Republic",
      "dk": "Denmark",
      "dj": "Djibouti",
      "dm": "Dominica",
      "do": "Dominican Republic",
      "ec": "Ecuador",
      "eg": "Egypt",
      "sv": "El Salvador",
      "gq": "Equatorial Guinea",
      "er": "Eritrea",
      "ee": "Estonia",
      "et": "Ethiopia",
      "fk": "Falkland Islands",
      "fo": "Faroe Islands",
      "fj": "Fiji",
      "fi": "Finland",
      "fr": "France",
      "gf": "French Guiana",
      "pf": "French Polynesia",
      "ga": "Gabon",
      "gm": "Gambia",
      "ge": "Georgia",
      "de": "Germany",
      "gh": "Ghana",
      "gi": "Gibraltar",
      "gr": "Greece",
      "gl": "Greenland",
      "gd": "Grenada",
      "gp": "Guadeloupe",
      "gu": "Guam",
      "gt": "Guatemala",
      "gg": "Guernsey",
      "gn": "Guinea",
      "gw": "Guinea-Bissau",
      "gy": "Guyana",
      "ht": "Haiti",
      "hn": "Honduras",
      "hk": "Hong Kong",
      "hu": "Hungary",
      "is": "Iceland",
      "in": "India",
      "id": "Indonesia",
      "ir": "Iran",
      "iq": "Iraq",
      "ie": "Ireland",
      "im": "Isle of Man",
      "il": "Israel",
      "it": "Italy",
      "jm": "Jamaica",
      "jp": "Japan",
      "je": "Jersey",
      "jo": "Jordan",
      "kz": "Kazakhstan",
      "ke": "Kenya",
      "ki": "Kiribati",
      "xk": "Kosovo",
      "kw": "Kuwait",
      "kg": "Kyrgyzstan",
      "la": "Laos",
      "lv": "Latvia",
      "lb": "Lebanon",
      "ls": "Lesotho",
      "lr": "Liberia",
      "ly": "Libya",
      "li": "Liechtenstein",
      "lt": "Lithuania",
      "lu": "Luxembourg",
      "mo": "Macau",
      "mk": "Macedonia (FYROM)",
      "mg": "Madagascar",
      "mw": "Malawi",
      "my": "Malaysia",
      "mv": "Maldives",
      "ml": "Mali",
      "mt": "Malta",
      "mh": "Marshall Islands",
      "mq": "Martinique",
      "mr": "Mauritania",
      "mu": "Mauritius",
      "yt": "Mayotte",
      "mx": "Mexico",
      "fm": "Micronesia",
      "md": "Moldova",
      "mc": "Monaco",
      "mn": "Mongolia",
      "me": "Montenegro",
      "ms": "Montserrat",
      "ma": "Morocco",
      "mz": "Mozambique",
      "mm": "Myanmar (Burma)",
      "na": "Namibia",
      "nr": "Nauru",
      "np": "Nepal",
      "nl": "Netherlands",
      "nc": "New Caledonia",
      "nz": "New Zealand",
      "ni": "Nicaragua",
      "ne": "Niger",
      "ng": "Nigeria",
      "nu": "Niue",
      "nf": "Norfolk Island",
      "kp": "North Korea",
      "mp": "Northern Mariana Islands",
      "no": "Norway",
      "om": "Oman",
      "pk": "Pakistan",
      "pw": "Palau",
      "ps": "Palestine",
      "pa": "Panama",
      "pg": "Papua New Guinea",
      "py": "Paraguay",
      "pe": "Peru",
      "ph": "Philippines",
      "pl": "Poland",
      "pt": "Portugal",
      "pr": "Puerto Rico",
      "qa": "Qatar",
      "re": "Réunion",
      "ro": "Romania",
      "ru": "Russia",
      "rw": "Rwanda",
      "bl": "Saint Barthélemy",
      "sh": "Saint Helena",
      "kn": "Saint Kitts and Nevis",
      "lc": "Saint Lucia",
      "mf": "Saint Martin",
      "pm": "Saint Pierre and Miquelon",
      "vc": "Saint Vincent and the Grenadines",
      "ws": "Samoa",
      "sm": "San Marino",
      "st": "São Tomé and Príncipe",
      "sa": "Saudi Arabia",
      "sn": "Senegal",
      "rs": "Serbia",
      "sc": "Seychelles",
      "sl": "Sierra Leone",
      "sg": "Singapore",
      "sx": "Sint Maarten",
      "sk": "Slovakia",
      "si": "Slovenia",
      "sb": "Solomon Islands",
      "so": "Somalia",
      "za": "South Africa",
      "kr": "South Korea",
      "ss": "South Sudan",
      "es": "Spain",
      "lk": "Sri Lanka",
      "sd": "Sudan",
      "sr": "Suriname",
      "sz": "Swaziland",
      "se": "Sweden",
      "ch": "Switzerland",
      "sy": "Syria",
      "tw": "Taiwan",
      "tj": "Tajikistan",
      "tz": "Tanzania",
      "th": "Thailand",
      "tl": "Timor-Leste",
      "tg": "Togo",
      "tk": "Tokelau",
      "to": "Tonga",
      "tt": "Trinidad and Tobago",
      "tn": "Tunisia",
      "tr": "Turkey",
      "tm": "Turkmenistan",
      "tc": "Turks and Caicos Islands",
      "tv": "Tuvalu",
      "vi": "U.S. Virgin Islands",
      "ug": "Uganda",
      "ua": "Ukraine",
      "ae": "United Arab Emirates",
      "gb": "United Kingdom",
      "us": "United States",
      "uy": "Uruguay",
      "uz": "Uzbekistan",
      "vu": "Vanuatu",
      "va": "Vatican City",
      "ve": "Venezuela",
      "vn": "Vietnam",
      "wf": "Wallis and Futuna",
      "eh": "Western Sahara",
      "ye": "Yemen",
      "zm": "Zambia",
  };

   telInputs.forEach(function(telInputId) {
        var telInput = $(telInputId);
        telInput.intlTelInput({
            allowExtensions: true,
            formatOnDisplay: true,
            autoFormat: true,
            autoHideDialCode: true,
            autoPlaceholder: "aggressive",
            defaultCountry: 'af',
            ipinfoToken: "your-ipinfo-token",
            nationalMode: false,
            numberType: "MOBILE",
            preferredCountries: ['af', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
            preventInvalidNumbers: true,
            separateDialCode: true,
            geoIpLookup: function(callback) {
                $.get("https://ipinfo.io?token=your-ipinfo-token", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                });
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
        });

        function reset() {
            telInput.removeClass("error");
            errorMsg.addClass("hide");
            validMsg.addClass("hide");
        }

        telInput.blur(function() {
            reset();
            if ($.trim(telInput.val())) {
                if (telInput.intlTelInput("isValidNumber")) {
                    validMsg.removeClass("hide");
                } else {
                    telInput.addClass("error");
                    errorMsg.removeClass("hide");
                }
            }
        });

        telInput.on("keyup change", reset);
    });

    // Set initial country names based on selected country codes
    countryInputs.forEach(function(countryInputId, index) {
        var initialCountryCode = $(countryInputId).val();
        $(countryNameInputs[index]).val(countryMapping[initialCountryCode] || 'Unknown');
    });

    // Handle country change events
    $("#form_country_1, #form_country_2, #form_country_3").change(function() {
        var countryCode = $(this).val();
        var index = this.id.split("_").pop();
        $("#form_phone_" + index).intlTelInput("setCountry", countryCode.toUpperCase());
        $("#country_name_" + index).val(countryMapping[countryCode] || 'Unknown');
    });


 // Handle form submission
 function handleFormSubmission(formId) {
  $(formId).submit(function(event) {
      $(this).find("input[name='pincode']").remove(); 
      var pincode = $(this).find('.selected-dial-code').text().trim();
      var pincodeInput = document.createElement('input');
      pincodeInput.type = 'hidden';
      pincodeInput.name = 'pincode';
      pincodeInput.value = pincode;
      this.appendChild(pincodeInput);
  });
}

handleFormSubmission("#contact_form_1");
handleFormSubmission("#contact_form_2");
handleFormSubmission("#contact_form_3");
});

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("preloader");
    
    window.addEventListener("load", () => {
        loader.classList.add("fade-out");
  
          loader.addEventListener('transitionend', () => {
            loader.style.display = "none";
          }, { once: true });
    });
});



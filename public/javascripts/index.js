const axios = require('axios');
import {SOURCES, CATEGORIES, COUNTRIES} from './constants';

document.addEventListener('DOMContentLoaded', () => {
  // let type = "everything";
  // let q = "obama";
  // axios.get(`/${type}/${q}`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  // .catch((error) => {
  //   console.log(error);
  // });

  // $('#source').append('<option value="foo">Foo</option>');
  $.each(CATEGORIES, (val, text) => {
    $('#category').append(new Option(text, val));
    if (text === "-- select an option --") {
      $('#category option:last').attr('disabled', 'disabled');
    }
  });


  // let options = $('source').attr('options');
  // let length = $('#source option').length;
  // console.log(length);

  // options[options.length] = new Option('Foo', 'foo');
  $.each(SOURCES, (val, text) => {
    $('#source').append(new Option(text, val));
    if (text === "-- select an option --") {
      $('#source option:last').attr('disabled', 'disabled');
    }
  });

  $.each(COUNTRIES, (val, text) => {
    $('#country').append(new Option(text, val));
    if (text === "-- select an option --") {
      $('#country option:last').attr('disabled', 'disabled');
    }
  });
});

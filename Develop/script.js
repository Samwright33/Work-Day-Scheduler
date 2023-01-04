// Added variables
var dateDisplayEl = $('#date-display');
var saveButtonEl = ('#saveInput');

const form = document.querySelector('form')
// Added event listener to attempt to save the submitted event in local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = object.fromEntries(fd);

  const json = JSON.stringify(obj);
  localStorage.setItem('form', json);
})



// Used bootstrap to add current date and time
function displayDate () {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  dateDisplayEl.text(rightNow);
}
// Attempted to add function to change the background color of the hour compared to the actual time
function timeBlockColorNine() {
  var nine = ('#hour-9')
  if (nine.isBefore(rightNow)) {
    rowEl.addClass('past');
  } else if (nine.isSame(rightNow)) {
    rowEl.removeClass('past');
  }
}

function timeBlockColorNine() {
  var nine = ('#hour-9')
  if (nine.isSame(rightNow)) {
    rowEl.addClass('present');
  } else if (nine.isAfter(rightNow)) {
    rowEl.removeClass('past');
  }
}

function timeBlockColorNine() {
  var nine = ('#hour-9')
  if (nine.isAfter(rightNow)) {
    rowEl.addClass('future');
  } else if (nine.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorTen() {
  var ten = ('#hour-10')
  if (ten.isBefore(rightNow)) {
    rowEl.addClass('past');
  } else if (ten.isSame(rightNow)) {
    rowEl.removeClass('past');
  }
}

function timeBlockColorTen() {
  var ten = ('#hour-9')
  if (ten.isSame(rightNow)) {
    rowEl.addClass('present');
  } else if (ten.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorTen() {
  var ten = ('#hour-10')
  if (ten.isAfter(rightNow)) {
    rowEl.addClass('future');
  } else if (ten.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorEleven() {
  var eleven = ('#hour-11')
  if (eleven.isBefore(rightNow)) {
    rowEl.addClass('past');
  } else if (eleven.isSame(rightNow)) {
    rowEl.removeClass('past');
  }
}

function timeBlockColorEleven() {
  var eleven = ('#hour-11')
  if (eleven.isSame(rightNow)) {
    rowEl.addClass('present');
  } else if (eleven.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorEleven() {
  var eleven = ('#hour-11')
  if (eleven.isAfter(rightNow)) {
    rowEl.addClass('future');
  } else if (eleven.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorTwelve() {
  var twelve = ('#hour-12')
  if (twelve.isBefore(rightNow)) {
    rowEl.addClass('past');
  } else if (twelve.isSame(rightNow)) {
    rowEl.removeClass('past');
  }
}

function timeBlockColorTwelve() {
  var twelve = ('#hour-12')
  if (twelve.isSame(rightNow)) {
    rowEl.addClass('present');
  } else if (twelve.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

function timeBlockColorTwelve() {
  var twelve = ('#hour-12')
  if (twelve.isAfter(rightNow)) {
    rowEl.addClass('future');
  } else if (twelve.isAfter(rightNow)) {
    rowEl.removeClass('present');
  }
}

// Displayed time and date on page
displayDate ();



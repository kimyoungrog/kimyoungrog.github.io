const calendarElement = document.querySelector("#calendar");
const A = document.querySelector("#A");
const B = document.querySelector("#B");
const C = document.querySelector("#C");

let currentPrivateGroup = localStorage.getItem("privateGroup");

function refreshEvent(payload) {
  calendar.refetchEvents();
}

// const groupAStartDate = new Date("2022-12-15");
// const groupBStartDate = new Date("2022-12-10");
// const groupCStartDate = new Date("2022-12-07");

// const gap = 6;
// const during = 3;

// function addGroupEvent() {}

let calendar;

function filterGroup(event) {
  if (event.title !== "A조" && event.title !== "B조" && event.title !== "C조") {
    return;
  }

  if (currentPrivateGroup == null) {
    return;
  }

  if (!event.title.includes(currentPrivateGroup)) {
    event.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: "dayGridMonth",
    locale: "ko",
    height: "auto",
    datesSet: (payload) => refreshEvent(payload),
    googleCalendarApiKey: "AIzaSyBfQo6N6FWayoA-i3zCPrzNFaLHV2w_59I",
    eventSources: [
      {
        googleCalendarId:
          "qduatr3seur835pk4aolok2900@group.calendar.google.com",
        className: "holiday",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        borderColor: "rgba(255, 255, 255, 0.0)",
        textColor: "#ff0000"
      },
      {
        googleCalendarId:
          "krqauhfjbuu4ron8nlak63tcjo@group.calendar.google.com",
        className: "group",
        backgroundColor: "coral",
        borderColor: "rgba(255, 255, 255, 0.0)"
      }
    ],
    eventDidMount: function (arg) {
      filterGroup(arg.event);
    }
  });

  calendar.render();
});

function onABCChanged(event) {
  currentPrivateGroup = event.target.id;
  localStorage.setItem("privateGroup", event.target.id);
  refreshEvent({
    start: Date.parse(calendar.currentData.viewApi.activeStart),
    end: Date.parse(calendar.currentData.viewApi.activeEnd)
  });
}

A.addEventListener("change", onABCChanged);
B.addEventListener("change", onABCChanged);
C.addEventListener("change", onABCChanged);

switch (currentPrivateGroup) {
  case "A":
    A.checked = true;
    break;
  case "B":
    B.checked = true;
    break;
  case "C":
    C.checked = true;
    break;
  default:
    break;
}

$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.type == "openUI") {
      openUI();
    }
  });
});

function openUrl(url) {
  window.invokeNative("openUrl", url);
}

function closeUI() {
  $("#main-ui").fadeOut();
}

function openUI() {
  $("#main-ui").fadeIn();
}

function openAdminToolMenu() {
  setTimeout(() => {
    $("#admin-menu").fadeIn();
    $("#title").text("Admin Tool");
  }, 500);

  closeMainMenu();
}

function openPlayersMenu() {
  setTimeout(() => {
    $("#player-menu").fadeIn();
    $("#title").text("Player List Menu");
  }, 500);

  closeMainMenu();
}

function openServerMenu() {
  setTimeout(() => {
    $("#server-menu").fadeIn();
    $("#title").text("Server Tool");
  }, 500);

  closeMainMenu();
}

function openTeleportMenu() {
  setTimeout(() => {
    $("#teleport-menu").fadeIn();
    $("#title").text("Teleport Options");
  }, 500);

  closeMainMenu();
}

function openVisionMenu() {
  setTimeout(() => {
    $("#vision-menu").fadeIn();
    $("#title").text("Vision View");
  }, 500);

  closeMainMenu();
}

function openVehicleMenu() {
  setTimeout(() => {
    $("#vehicle-menu").fadeIn();
    $("#title").text("Vehicle Spawner");
  }, 500);

  closeMainMenu();
}

function openBanListMenu() {
  setTimeout(() => {
    $("#banlist-menu").fadeIn();
    $("#title").text("Ban List");
  }, 500);

  closeMainMenu();
}

function openAdminListMenu() {
  setTimeout(() => {
    $("#adminlist-menu").fadeIn();
    $("#title").text("Admin List");
  }, 500);

  closeMainMenu();
}

function openUnbanListMenu() {
  setTimeout(() => {
    $("#ubAccess-menu").fadeIn();
    $("#title").text("Admin List");
  }, 500);

  closeMainMenu();
}

function openWhitelistMenu() {
  setTimeout(() => {
    $("#wlusers-menu").fadeIn();
    $("#title").text("Admin List");
  }, 500);

  closeMainMenu();
}

function closeMainMenu() {
  $("#main-menu").fadeOut();
}

function backToMainMenu() {
  $("#admin-menu").fadeOut();
  $("#player-menu").fadeOut();
  $("#server-menu").fadeOut();
  $("#teleport-menu").fadeOut();
  $("#vision-menu").fadeOut();
  $("#vehicle-menu").fadeOut();
  $("#banlist-menu").fadeOut();
  $("#adminlist-menu").fadeOut();
  $("#ubAccess-menu").fadeOut();
  $("#wlusers-menu").fadeOut();

  setTimeout(() => {
    $("#main-menu").fadeIn();
    $("#title").text("Admin Menu");
  }, 500);
}

function doAction(actionName) {
  $.post(`https://FIREAC/${actionName}`);
}

function openPlayerActionList() {}

function teleportToWaypoint() {}
function teleportToCoords() {}

function removeSelectedAdmin() {}
function unbanSelectedPlayer() {}
function removeUnbanAccess() {}
function removeWhitelistUser() {}

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    closeUI();
  }
});

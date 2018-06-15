/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import ReactDOM from "react-dom";
import React from "react";

import {qS, qSA} from "../src/dom";
import UserTable from "../components/UserTable";

console.log('This is /app')

document.addEventListener("DOMContentLoaded", () =>{
  const welcomeTitle = document.querySelector(".welcome-title");
  welcomeTitle.style.color = "DarkBlue";
  if (welcomeTitle) {
    welcomeTitle.style.color = "darkskyblue";
  }

  // RactDOM.render(
  //   <UserTable/>,
  //   qS("#user-table")
  // );
})
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

import './style.css';
import { showHome } from './homePage'
import { showMenu } from './menuPage'
import { showAbout } from './aboutPage';
import { showLocation } from './locationPage';
import { showReservation } from './reservationPage';
import { renderHome} from './homePage'

showHome()
renderHome()

const content = document.querySelector('.content')
const body = document.querySelector('.body')
const nav = document.querySelector('.nav')
const homeTab = document.querySelector('.HomeTab')
const menuTab = document.querySelector('.menuTab')
const aboutTab = document.querySelector('.aboutTab')
const locationTab = document.querySelector('.locationTab')
const reservationTab = document.querySelector('.reservationTab')
const menu = document.querySelector('.menu')
const about = document.querySelector('.about')
const location = document.querySelector('.location')
const reservation = document.querySelector('.reservation')

// var nextDiv = body.nextElementSibling;

// tabs = locationTab || menuTab || aboutTab || reservationTab

menuTab.addEventListener('click', () =>
{
showMenu() }
 )

 aboutTab.addEventListener('click', () =>
 {  showAbout()
}
  )
  homeTab.addEventListener('click', () =>
  {  renderHome()
 }
   )

  locationTab.addEventListener('click', () =>
{
showLocation() }
 )

 reservationTab.addEventListener('click', () =>
{
showReservation() }
 )

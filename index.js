function scuberGreetingForFeet(distance) {
  let ridePrice

  if (distance < 400)
    ridePrice = 'This one is on me!'
  else if (distance < 2000)
    ridePrice = 'That will be twenty bucks.'
  else if (distance < 2500)
    ridePrice = 'I will gladly take your thirty bucks.'
  else ridePrice = 'No can do.'
  return ridePrice
}

scuberGreetingForFeet(3000)



function ternaryCheckCity(city) {
  const cityMessage = (city === 'NYC') ? "Ok, sounds good." : "No go."
  return cityMessage
}

ternaryCheckCity('Brisbane')

function switchOnCharmFromTip(tip) {
  let isGenerous;
  switch (tip) {
    case 'generous':
      isGenerous = 'Thank you so much.';
      break;
    case 'not as generous':
      isGenerous = 'Thank you.'
      break;
    default:
      isGenerous = 'Bye.'
  }
  return isGenerous
}

switchOnCharmFromTip('not as generous')





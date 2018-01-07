import firebase from 'firebase'

function SubscribeForm () {}

SubscribeForm.prototype.hasSubscriber = function (email) {
  var subscriberRef = firebase.database().ref('/subscribers')
  return subscriberRef.once('value').then((subscribers) => {
    var hasMatchingEmail = false
    subscribers.forEach((subscriber) => {
      if (subscriber.val().email === email) {
        hasMatchingEmail = true
        return true
      }
    })
    return hasMatchingEmail ? Promise.reject(new Error('Email is already subscribed')) : Promise.resolve('clear')
  })
}

SubscribeForm.prototype.addSubscriber = function (subscriber) {
  var subscriberRef = firebase.database().ref('/subscribers')
  var newSubscriberRef = subscriberRef.push()
  return newSubscriberRef.set({
    name: subscriber.name,
    email: subscriber.email
  })
  .then(() => {
    console.log('Thanks for subscribing!')
  })
  .catch((error) => {
    console.log(error)
  })
}

export default new SubscribeForm()

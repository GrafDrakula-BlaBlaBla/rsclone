export default function signIn() {

        const auth2 = window.gapi.auth2.getAuthInstance()

        auth2.signIn().then(googleUser => {

          // метод возвращает объект пользователя
          // где есть все необходимые нам поля
          const profile = googleUser.getBasicProfile()
          console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
          console.log('Full Name: ' + profile.getName())
          console.log('Given Name: ' + profile.getGivenName())
          console.log('Family Name: ' + profile.getFamilyName())
          console.log('Image URL: ' + profile.getImageUrl())
          console.log('Email: ' + profile.getEmail())

          // токен
          const id_token = googleUser.getAuthResponse().id_token
          console.log('ID Token: ' + id_token)
        })

}

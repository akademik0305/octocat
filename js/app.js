// fetch data
async function main() {
  const input = document.querySelector('.search__input')
  const button = document.querySelector('.search__button')


  button.addEventListener('click', async () => {
    if (input.value) {
      const req = await getData('https://api.github.com/users/' + input.value)
      change(req)
    }
  })
  const req = await getData('https://api.github.com/users/octocat')
  change(req)
}

// https://api.github.com/users/octocat/followers
async function getData(url) {
  console.log(url);
  const res = await fetch(url)
  const req = await res.json()
  return req
}

async function change(req) {
  await changeValue('card-main__name', req.name)
  await changeValue('card-main__text', req.bio)
  await changeValue('info-item__repos', req.public_repos)
  await changeValue('info-item__followers', req.followers)
  await changeValue('info-item__following', req.following)
  await changeValue('place-item__city', req.location)
  await changeValue('place-item__twitter', req.twitter_username, true)
  await changeValue('place-item__url', req.blog)
  await changeValue('place-item__github', req.company)
  await changeValue('card-main__date', req.created_at)
  await changeValue('card-main__name', req.name)
  await changeValue('card-main__name', req.name)
}

async function changeValue(className, value, twit = false) {
  const tag = document.querySelector(`.${className}`)
  if (value) {
    tag.textContent = value
  } else if (twit) {
    tag.textContent = 'Not Available'
  } else {
    tag.textContent = 'This profile has no bio'
  }
}


main()
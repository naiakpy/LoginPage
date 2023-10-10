const wrapper = document.querySelector('.wrapper')
const login = document.querySelector('.link-login')
const regist = document.querySelector('.link-regist')

regist.addEventListener('click', () => {
    wrapper.classList.add('active')
})

login.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

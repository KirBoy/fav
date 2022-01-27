let flag = false
const open =  document.querySelector('.main__right').offsetHeight - document.querySelector('.header').offsetHeight - document.querySelector('.filters').scrollHeight + 'px'
const close =  document.querySelector('.main__right').offsetHeight - document.querySelector('.header').offsetHeight - document.querySelector('.filters').offsetHeight + 'px'
document.querySelector('.main__content').style.maxHeight = close

document.querySelector('.filters__settings').onclick = e => {
    if (flag) {
        document.querySelector('.main__content').style.maxHeight = close
        document.querySelector('.filters').style.height = '35px'
    } else {
        document.querySelector('.filters').style.height = document.querySelector('.filters').scrollHeight + 'px'
        document.querySelector('.main__content').style.maxHeight = open
    }
    flag = !flag
}

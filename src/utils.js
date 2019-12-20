import { randomNum } from './libs/number'
import defaultConfig from './config'

const { 
  borderWidth, // 拼块白边
  sliderLen: l, // 滑块边长
  sliderRadius: r // 滑块半径
} = defaultConfig


export const isArray = value => Object.prototype.toString.call(value) == '[object Array]'

export function createCanvas (width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function createImg (images, onload) {
  let errCount = 0
  const isIE = window.navigator.userAgent.indexOf('Trident') > -1
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.onload = onload
  img.onerror = () => {
    if (errCount <= 3) {
      errCount += 1
      img.setSrc(getRandomImgSrc(images))
    }
  }
  
  img.setSrc = function (src) {
    if (isIE) { // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      const xhr = new XMLHttpRequest()
      xhr.onloadend = function (e) {
        const file = new FileReader() // FileReader仅支持IE10+
        file.readAsDataURL(e.target.response)
        file.onloadend = function (e) {
          img.src = e.target.result
        }
      }
      xhr.open('GET', src)
      xhr.responseType = 'blob'
      xhr.send()
    } else {
      img.src = src
    }
  }

  img.setSrc(getRandomImgSrc(images))
  return img
}

export function createElement (tagName, className) {
  const elment = document.createElement(tagName)
  elment.className = className
  return elment
}

export function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    if (obj.className) obj.className += ' '
    obj.className += cls
  }
}

export function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}  

export function toggleClass(obj, cls){
  if (hasClass(obj,cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}

// export function addClass (tag, className) {
//   tag.classList.add(className)
// }

// export function removeClass (tag, className) {
//   tag.classList.remove(className)
// }

export function getRandomImgSrc (images) {
  // '//picsum.photos/300/150/?image=' + randomNum(0, 1084)
  if (!images.length) return require('./img/default.jpg').default
  const idx = randomNum(0, images.length - 1)
  return images[idx]
}

export function drawCanvas (ctx, x, y, operation) {
  const PI = Math.PI
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
  ctx.lineTo(x + l, y)
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
  ctx.lineTo(x + l, y + l)
  ctx.lineTo(x, y + l)
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
  ctx.lineTo(x, y)
  ctx.lineWidth = borderWidth
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
  ctx.stroke()
  ctx[operation]()
  ctx.globalCompositeOperation = 'destination-over'
}

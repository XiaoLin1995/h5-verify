import {
  isArray,
  createImg,
  createElement,
  createCanvas,
  drawCanvas,
  getRandomImgSrc,
  addClass,
  removeClass
} from './utils'
import {
  randomNum,
  addNum,
  mulNum
} from './libs/number'
import defaultConfig from './config'
import './verify.css'

const { 
  deviation, // 滑块校验时，允许的偏差范围
  borderWidth, // 拼块白边
  classNameHead,
  canvasWidth: w, // canvas宽度
  canvasHeight: h, // canvas高度
  sliderLen: l, // 滑块边长
  sliderRealLen: L, // 滑块实际边长
  sliderRadius: r // 滑块半径
} = defaultConfig

class Jigsaw {
  constructor (el, {
    options,
    onSuccess,
    onFail,
    onRefresh
  }) {
    Object.assign(el.style, {
      position: 'relative',
      width: w + 'px',
      margin: '0 auto'
    })
    const optionsDefault = {
      images: [],
      sliderText: 'Slide to unlock'
    }
    this.options = Object.assign(optionsDefault, options)
    if (!isArray(this.options.images)) this.options.images = []
    this.el = el
    this.onSuccess = onSuccess
    this.onFail = onFail
    this.onRefresh = onRefresh

    this.init()
  }

  init () {
    this.initDOM()
    this.initImg()
    this.bindEvents()
  }

  initDOM () {
    const canvas = createCanvas(w, h) // 画布
    canvas.setAttribute('class', classNameHead + 'canvas')
    const block = canvas.cloneNode(true) // 滑块
    const sliderContainer = createElement('div', classNameHead + 'sliderContainer')
    const refreshIcon = createElement('div', classNameHead + 'refreshIcon')
    const sliderMask = createElement('div', classNameHead + 'sliderMask')
    const slider = createElement('div', classNameHead + 'slider')
    const sliderIcon = createElement('span', classNameHead + 'sliderIcon')
    const text = createElement('span', classNameHead + 'sliderText')

    block.className = classNameHead+ 'block'
    text.innerHTML = this.options.sliderText

    const el = this.el
    el.appendChild(canvas)
    el.appendChild(refreshIcon)
    el.appendChild(block)
    slider.appendChild(sliderIcon)
    sliderMask.appendChild(slider)
    sliderContainer.appendChild(sliderMask)
    sliderContainer.appendChild(text)
    el.appendChild(sliderContainer)

    Object.assign(this, {
      canvas,
      block,
      sliderContainer,
      refreshIcon,
      slider,
      sliderMask,
      sliderIcon,
      text,
      canvasCtx: canvas.getContext('2d'),
      blockCtx: block.getContext('2d')
    })
  }

  initImg () {
    const img = createImg(this.options.images, () => {
      this.draw()
      this.canvasCtx.drawImage(img, 0, 0, w, h)
      this.blockCtx.drawImage(img, 0, 0, w, h)
      const y = this.y - r * 2 - 1
      const ImageData = this.blockCtx.getImageData(this.x - 3, y, L, L)
      this.block.width = L
      this.blockCtx.putImageData(ImageData, 0, y)
    })
    this.img = img
  }

  draw () {
    // 随机创建滑块的位置
    this.x = randomNum(L + 10, w - (L + 10))
    this.y = randomNum(10 + r * 2, h - (L + 10))
    drawCanvas(this.canvasCtx, this.x, this.y, 'fill')
    drawCanvas(this.blockCtx, this.x, this.y, 'clip')
  }

  clean () {
    this.canvasCtx.clearRect(0, 0, w, h)
    this.blockCtx.clearRect(0, 0, w, h)
    this.block.width = w
  }

  bindEvents () {
    this.el.onselectstart = () => false
    this.refreshIcon.onclick = () => {
      this.reset()
      typeof this.onRefresh === 'function' && this.onRefresh()
    }

    let originX, originY, trail = [], isMouseDown = false

    const handleDragStart = function (e) {
      originX = e.clientX || e.touches[0].clientX
      originY = e.clientY || e.touches[0].clientY
      isMouseDown = true
    }

    const handleDragMove = (e) => {
      if (!isMouseDown) return false
      const eventX = e.clientX || e.touches[0].clientX
      const eventY = e.clientY || e.touches[0].clientY
      const moveX = Math.round(eventX - originX)
      const moveY = Math.round(eventY - originY)
      if (moveX < 0 || moveX + l >= w) return false
      this.slider.style.transition = ''
      this.slider.style.left = moveX + 'px'
      this.block.style.left = L + moveX >= w ? w - L + 'px' : moveX + 'px'

      addClass(this.sliderContainer, classNameHead + 'sliderContainer_active')
      this.sliderMask.style.width = moveX + 'px'
      trail.push(moveY)
    }

    const handleDragEnd = (e) => {
      if (!isMouseDown) return false
      isMouseDown = false
      const eventX = e.clientX || e.changedTouches[0].clientX
      if (eventX == originX) return false
      removeClass(this.sliderContainer, classNameHead + 'sliderContainer_active')
      this.trail = trail
      const { spliced, verified } = this.verify()
      if (spliced) {
        if (verified) {
          addClass(this.sliderContainer, classNameHead + 'sliderContainer_success')
          typeof this.onSuccess === 'function' && this.onSuccess()
        } else {
          addClass(this.sliderContainer, classNameHead + 'sliderContainer_fail')
          this.reset()
        }
      } else {
        addClass(this.sliderContainer, classNameHead + 'sliderContainer_fail')
        typeof this.onFail === 'function' && this.onFail()
        setTimeout(() => {
          this.reset()
        }, 1000)
      }
    }
    this.slider.addEventListener('mousedown', handleDragStart)
    this.slider.addEventListener('touchstart', handleDragStart)
    this.block.addEventListener('mousedown', handleDragStart)
    this.block.addEventListener('touchstart', handleDragStart)
    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('touchmove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
    document.addEventListener('touchend', handleDragEnd)
  }

  verify () {
    const arr = this.trail // 拖动时y轴的移动距离
    const average = arr.reduce(addNum) / arr.length
    const deviations = arr.map(x => x - average)
    const stddev = Math.sqrt(deviations.map(mulNum).reduce(addNum) / arr.length)
    const left = Math.round(parseFloat(this.block.style.left))
    return {
      spliced: Math.abs(left + borderWidth * 2 - this.x) <= deviation,
      verified: stddev !== 0 // 简单验证下拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
    }
  }

  reset () {
    this.sliderContainer.className = classNameHead + 'sliderContainer'
    this.slider.style.left = 0
    this.block.style.left = 0
    this.slider.style.transition = 'left 0.3s'
    this.sliderMask.style.width = 0
    this.clean()
    this.img.setSrc(getRandomImgSrc(this.options.images))
  }
}

window.Jigsaw = Jigsaw
export default Jigsaw

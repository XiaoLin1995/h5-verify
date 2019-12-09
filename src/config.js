const config = {
  canvasWidth: 300, // canvas宽度
  canvasHeight: 150, // canvas高度
  deviation: 5, // 滑块校验时，允许的偏差范围
  borderWidth: 2, // 拼块白边
  sliderLen: 40, // 滑块边长
  sliderRealLen: 0, // 滑块实际边长
  sliderRadius: 9, // 滑块半径
  classNameHead: 'jigsaw-'
}
config.sliderRealLen = config.sliderLen + config.sliderRadius * 2 + config.borderWidth * 2


export default config

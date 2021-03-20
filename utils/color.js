// 生成 color
export function genertorColor(list = [], colorList = COLOR_LIST) {
	const _list = [...list]
	_list.forEach((l, i) => {
		l.color = colorList[randomIndex(colorList)] || colorList[i]
	})
	return _list
}
// 取数组中的随机数
export const randomIndex = arr => Math.floor(Math.random() * arr.length)
// color List colr
export const COLOR_LIST = [
	'magenta',
	'blue',
	'red',
	'volcano',
	'orange',
	'gold',
	'lime',
	'green',
	'cyan',
	'geekblue',
	'purple'
]

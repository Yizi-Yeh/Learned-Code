// 將好幾個功能 api 包裝起來
// 元件檔中統一引入 index 即可

import { MousePosition } from './useMousePosition'
import { StateAdd } from './useState'
import { Fetchs } from './useFetch'

export const useMousePosition = MousePosition
export const useState = StateAdd 
export const useFetchs = Fetchs
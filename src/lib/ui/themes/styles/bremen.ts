
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const bremen: CustomThemeConfig = {
    name: 'bremen',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a259ff 
		"--color-primary-50": "241 230 255", // #f1e6ff
		"--color-primary-100": "236 222 255", // #ecdeff
		"--color-primary-200": "232 214 255", // #e8d6ff
		"--color-primary-300": "218 189 255", // #dabdff
		"--color-primary-400": "190 139 255", // #be8bff
		"--color-primary-500": "162 89 255", // #a259ff
		"--color-primary-600": "146 80 230", // #9250e6
		"--color-primary-700": "122 67 191", // #7a43bf
		"--color-primary-800": "97 53 153", // #613599
		"--color-primary-900": "79 44 125", // #4f2c7d
		// secondary | #1abcfe 
		"--color-secondary-50": "221 245 255", // #ddf5ff
		"--color-secondary-100": "209 242 255", // #d1f2ff
		"--color-secondary-200": "198 238 255", // #c6eeff
		"--color-secondary-300": "163 228 255", // #a3e4ff
		"--color-secondary-400": "95 208 254", // #5fd0fe
		"--color-secondary-500": "26 188 254", // #1abcfe
		"--color-secondary-600": "23 169 229", // #17a9e5
		"--color-secondary-700": "20 141 191", // #148dbf
		"--color-secondary-800": "16 113 152", // #107198
		"--color-secondary-900": "13 92 124", // #0d5c7c
		// tertiary | #D41976 
		"--color-tertiary-50": "249 221 234", // #f9ddea
		"--color-tertiary-100": "246 209 228", // #f6d1e4
		"--color-tertiary-200": "244 198 221", // #f4c6dd
		"--color-tertiary-300": "238 163 200", // #eea3c8
		"--color-tertiary-400": "225 94 159", // #e15e9f
		"--color-tertiary-500": "212 25 118", // #D41976
		"--color-tertiary-600": "191 23 106", // #bf176a
		"--color-tertiary-700": "159 19 89", // #9f1359
		"--color-tertiary-800": "127 15 71", // #7f0f47
		"--color-tertiary-900": "104 12 58", // #680c3a
		// success | #0acf83 
		"--color-success-50": "218 248 236", // #daf8ec
		"--color-success-100": "206 245 230", // #cef5e6
		"--color-success-200": "194 243 224", // #c2f3e0
		"--color-success-300": "157 236 205", // #9deccd
		"--color-success-400": "84 221 168", // #54dda8
		"--color-success-500": "10 207 131", // #0acf83
		"--color-success-600": "9 186 118", // #09ba76
		"--color-success-700": "8 155 98", // #089b62
		"--color-success-800": "6 124 79", // #067c4f
		"--color-success-900": "5 101 64", // #056540
		// warning | #ff7262 
		"--color-warning-50": "255 234 231", // #ffeae7
		"--color-warning-100": "255 227 224", // #ffe3e0
		"--color-warning-200": "255 220 216", // #ffdcd8
		"--color-warning-300": "255 199 192", // #ffc7c0
		"--color-warning-400": "255 156 145", // #ff9c91
		"--color-warning-500": "255 114 98", // #ff7262
		"--color-warning-600": "230 103 88", // #e66758
		"--color-warning-700": "191 86 74", // #bf564a
		"--color-warning-800": "153 68 59", // #99443b
		"--color-warning-900": "125 56 48", // #7d3830
		// error | #f24e1e 
		"--color-error-50": "253 228 221", // #fde4dd
		"--color-error-100": "252 220 210", // #fcdcd2
		"--color-error-200": "252 211 199", // #fcd3c7
		"--color-error-300": "250 184 165", // #fab8a5
		"--color-error-400": "246 131 98", // #f68362
		"--color-error-500": "242 78 30", // #f24e1e
		"--color-error-600": "218 70 27", // #da461b
		"--color-error-700": "182 59 23", // #b63b17
		"--color-error-800": "145 47 18", // #912f12
		"--color-error-900": "119 38 15", // #77260f
		// surface | #2c2c2c 
		"--color-surface-50": "223 223 223", // #dfdfdf
		"--color-surface-100": "213 213 213", // #d5d5d5
		"--color-surface-200": "202 202 202", // #cacaca
		"--color-surface-300": "171 171 171", // #ababab
		"--color-surface-400": "107 107 107", // #6b6b6b
		"--color-surface-500": "44 44 44", // #2c2c2c
		"--color-surface-600": "40 40 40", // #282828
		"--color-surface-700": "33 33 33", // #212121
		"--color-surface-800": "26 26 26", // #1a1a1a
		"--color-surface-900": "22 22 22", // #161616
		
	}
}

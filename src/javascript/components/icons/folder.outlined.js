import { element, style } from '@mkenzo_8/puffin'

const styleWrapper = style`
	& path{
		stroke: var(--sidebarIconsFill);
	}
`

function FolderOutlined() {
	return element`
		<svg class="${styleWrapper}" width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.37985 1.00056H12.5664C13.8138 1.0782 15.0398 1.59651 16.0905 2.52791L19.5782 6H1V2.79268C1.00463 2.52946 1.05165 2.27341 1.13537 2.04012C1.21984 1.80474 1.33778 1.60313 1.47487 1.44275C1.61171 1.28267 1.76234 1.16954 1.91207 1.09829C2.06075 1.02753 2.21069 0.996772 2.35576 1.00027L2.37985 0.00055748V1.00056Z"  stroke-width="2"/>
			<path d="M1 20.9458V6.00276H25.7224H25.7434L25.7644 6.00188C26.3305 5.97809 26.8841 6.18117 27.3038 6.56877C27.7188 6.95208 27.9694 7.48521 28 8.05424V20.9458C27.9694 21.5148 27.7188 22.0479 27.3038 22.4312C26.8841 22.8188 26.3305 23.0219 25.7644 22.9981L25.7434 22.9972H25.7224H3.27759H3.25658L3.2356 22.9981C2.66951 23.0219 2.11588 22.8188 1.6962 22.4312C1.28117 22.0479 1.03059 21.5148 1 20.9458Z" stroke-width="2"/>
		</svg>
	`
}

export default FolderOutlined

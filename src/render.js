/**
 * Componente para renderizar o bloco.
 * É aplicado em dois locais diferentes em edit.js e um em save.js
 *
 * @param {boolean} preview Determina se está em modo preview (bloco isSelected), para renderizar diferente, se necessário
 * @return {JSX.Element} Renderização do bloco
 */
export default function Render({ attributes }) {
	const { title, description, icon, link, target } = attributes;

	const hoverBehavior = description.trim().length > 0 ? 'hover' : '';
	let href = null;

	if (typeof link === 'string' && link.length > 0) {
		href = link.toLowerCase().trim();
		href = href.startsWith('http')
			? href
			: `//${href}`;
	}

	return (
		<div className={`item d-flex align-items-center justify-content-center text-center ${hoverBehavior}`}>
			<a className="content" href={href} target={target} style={{ cursor: href ? 'pointer' : 'default' }}>
				<div className="front">
					<i className={`${icon} fa-3x`} />
					<h2>{title}</h2>
				</div>
				<span className="description">
					{description}
				</span>
			</a>
		</div>
	)
}

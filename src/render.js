/**
 * Componente para renderizar o bloco.
 * É aplicado em dois locais diferentes em edit.js e um em save.js
 *
 * @param {boolean} preview Determina se está em modo preview (bloco isSelected), para renderizar diferente, se necessário
 * @return {JSX.Element} Renderização do bloco
 */
export default function Render({ attributes }) {
	const { title, description, icon } = attributes;

	const hoverBehavior = description.trim().length > 0 ? 'hover' : '';

	return (
		<div className={`item d-flex align-items-center justify-content-center text-center ${hoverBehavior}`}>
			<div className="content">
				<div className="front">
					<i className={`${icon} fa-3x`} />
					<h2>{title}</h2>
				</div>
				<span className="description">
					{description}
				</span>
			</div>
		</div>
	)
}

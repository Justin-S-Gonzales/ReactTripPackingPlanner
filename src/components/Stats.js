export default function Stats({ items }) {
	if (!items.length)
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		);

	let numPacked = items.reduce(
		(acc, item) => (item.packed ? (acc += 1) : acc),
		0
	);

	const percentage = Math.round((numPacked / items.length) * 100);
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You got everything! Ready to go ✈️"
					: `💼You have ${items.length} item(s) on your list, and you already packed 
					${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
}
